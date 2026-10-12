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

### Rule 2 — hub `/guides/` and every article `/guides/<slug>/` (Free-plan safe)
Use the **Wildcard pattern** option (no functions, no Business plan needed):

| Field | Value |
|---|---|
| When incoming requests match | **Wildcard pattern** → Request URL: `https://gopim.dev/guides/*` |
| Then → Target URL | `https://gopim.dev/blog/${1}` |
| Status code | **301** |

> ⚠️ Two things that broke the first attempt:
> 1. The capture must be **`${1}`** (curly braces), **not** `$1`. Plain `$1` is emitted as a
>    literal string. The wildcard pattern mode uses the built-in `wildcard_replace()`, so it is
>    **available on the Free plan** — unlike `regex_replace()`, which needs Business/WAF Advanced.
> 2. Watch the path: it's `/blog/`, not `/blogs/`.

The `*` matches zero-or-more characters, so `/guides/` (empty tail) → `/blog/` too. Rule 1
still covers the slash-less `/guides`.

**How the pieces map:** the match pattern is `https://gopim.dev/guides/*` and the target is
`https://gopim.dev/blog/${1}`. `${1}` is substituted with whatever the `*` captured (the
`<slug>/` part), so `/guides/foo/` → `/blog/foo/`.



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
