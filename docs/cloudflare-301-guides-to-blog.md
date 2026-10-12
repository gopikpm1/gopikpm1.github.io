# Cloudflare 301 redirects: `/guides/*` → `/blog/*`

The site used to serve articles at `/guides/<slug>/`. They now live at `/blog/<slug>/`.
Because these pages are **already indexed**, we move them with **permanent (301) redirects**
so Google transfers their ranking signals instead of 404-ing them.

- Hosting: **GitHub Pages** (origin), fronted by **Cloudflare** (`gopim.dev`).
- GitHub Pages cannot emit true 301s — but **Cloudflare runs these rules at the edge,
  before the request reaches the origin**, so the real 301 is served.
- As a harmless fallback, the Astro build also emits instant meta-refresh + `rel=canonical`
  redirect stubs for the old paths (only used if the origin is hit directly).

## Option A — Single Redirects (recommended, no code)

Cloudflare Dashboard → **Rules → Redirect Rules → Single Redirects → Create rule**.

Create these rules **in this order** (first match wins):

### Rule 1 — bare `/guides` (no trailing slash)
| Setting | Value |
|---|---|
| Rule name | `guides-bare-to-blog` |
| If incoming requests match | Wildcard match: `gopim.dev/guides` |
| Then | Type: **Static** · URL: `https://gopim.dev/blog/` |
| Status code | **301** |

### Rule 2 — hub `/guides/` and every article `/guides/<slug>/`
| Setting | Value |
|---|---|
| Rule name | `guides-to-blog` |
| If incoming requests match | Type: **Custom filter expression** → `starts_with(http.request.uri.path, "/guides/")` |
| Then | Type: **Dynamic** → Expression: `concat("https://gopim.dev/blog", regex_replace(http.request.uri.path, "^/guides/", "/blog/"))` |
| Status code | **301** |

> ⚠️ **Do NOT use the wildcard `$1` syntax** (`gopim.dev/guides/*` → `…/blogs/$1`).
> In the newer Single Redirects UI, `$1` is emitted as a **literal string** unless it's inside a
> `concat("…", "${1}")` expression, producing broken URLs like `https://gopim.dev/blogs/$1`.
> The `regex_replace` expression above is unambiguous and avoids that pitfall.

`regex_replace(http.request.uri.path, "^/guides/", "/blog/")` turns `/guides/<slug>/` into
`/blog/<slug>/` — no index math, no wildcard backreferences. Query strings are preserved by default.


## Option B — Expression editor (same result)

Filter expression:
```
starts_with(http.request.uri.path, "/guides/")
```
Target expression (Dynamic):
```
concat("https://gopim.dev", regex_replace(http.request.uri.path, "^/guides/", "/blog/"))
```
Status code: **301**. Add the static `/guides` → `/blog/` rule as well.

## Verify after deploying

```bash
# Should return HTTP/1.1 301 with a Location: /blog/... header
curl -sI https://gopim.dev/guides/                     | grep -iE 'HTTP|location'
curl -sI https://gopim.dev/guides/freelance-mobile-app-developer-in-chennai/ | grep -iE 'HTTP|location'

# New pages must be 200 (not caught by the rule)
curl -sI https://gopim.dev/blog/ | grep -iE 'HTTP'
```

Use **Cloudflare Trace** (or the `curl -I` checks above) to confirm the rule fires and that
`/blog/...` URLs return 200.

## Why this is safe for already-indexed pages

- 301 = permanent move: old URLs never 404 and pass their equity to the new URLs.
- Rules run at the edge, ahead of the origin's meta-refresh stubs.
- `/blog/...` pages and all internal links are untouched — they don't match `/guides/`.
