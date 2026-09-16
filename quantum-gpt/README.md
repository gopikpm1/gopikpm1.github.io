# QuantumGPT — AI-Powered Spiritual & Life Guidance Platform

A multi-platform guidance ecosystem (Web & Mobile) that bridges modern generative AI with ancient Vedic time science, astrology, and karma logic to provide personalized life guidance, behavioral coaching, and actionable remedies.

## Live Reference

- **Platform**: QuantumGPT by Dr. Pillai
- **Type**: Web Application + Cross-Platform Mobile App (iOS & Android)

## Tech Stack

- **Frontend Web**: React.js
- **Mobile**: React Native
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT (JSON Web Tokens)
- **AI Integration**: OpenAI API

## Key Features

### Multi-Platform Experience
- **Web Dashboards**: React.js-based browser interfaces for comprehensive guidance access
- **Mobile App**: React Native for unified iOS/Android experience
- **Consistent UX**: Fluid responsiveness and state management across all platforms

### AI-Powered Guidance
- Integration with OpenAI API for personalized life guidance
- Custom domain-specific context constraints for Vedic astrology alignment
- Dynamic synthesis of user profiles, birth charts, and planetary metrics
- Behavioral coaching, actionable mantras, and energetic remedies

### Subscription Tiers
- **Free Trial**: Introductory access with limited features
- **Plus**: Enhanced guidance capabilities
- **Pro Unlimited**: Full access without usage restrictions

### Real-Time Quota Management
- Daily question-quota enforcement
- Real-time tracking of usage across sessions
- Seamless tier upgrade paths

## Architecture

```
┌─────────────────────────────────────────────────────────────────┐
│                    Client Layer                                  │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐    │
│  │  React.js   │  │React Native │  │   JWT Auth Layer    │    │
│  │   (Web)     │  │  (Mobile)   │  │   (Web & Mobile)    │    │
│  └─────────────┘  └─────────────┘  └─────────────────────┘    │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Server Layer                                  │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │              Node.js + Express.js API Gateway           │   │
│  │  ┌─────────────┐  ┌─────────────┐  ┌───────────────┐  │   │
│  │  │  Auth       │  │  Subscription│ │  Quota        │  │   │
│  │  │  Service    │  │  Management  │ │  Enforcement  │  │   │
│  │  └─────────────┘  └─────────────┘  └───────────────┘  │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│                    Integration Layer                             │
│  ┌─────────────┐  ┌─────────────────────────────────────────┐  │
│  │   MongoDB   │  │           OpenAI API                     │  │
│  │  (Data Store)│  │   (AI Guidance Engine)                  │  │
│  └─────────────┘  └─────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

## API Capabilities

### Authentication
- JWT-based token authentication
- Secure login flows across web and mobile
- Encrypted client-server sessions
- Protected route access

### User Management
- User profile creation and management
- Birth chart data storage
- Historical chat session tracking
- Custom daily grounding prompts

### Subscription Management
- Multi-tiered membership handling
- Real-time subscription status checks
- Automated renewal lifecycle management

### AI Guidance
- Personalized response generation
- Planetary metrics integration
- Vedic time science context
- Mantra and remedy recommendations

## Database Schema

### Collections
- **Users**: Account information, preferences, subscription tier
- **Sessions**: Historical chat interactions, timestamps
- **BirthCharts**: Astrological data, planetary positions
- **Prompts**: Custom daily grounding prompts
- **Subscriptions**: Tier information, renewal dates, usage quotas

## Security Features

- JWT-based stateless authentication
- Protected API routes and endpoints
- Encrypted session handling
- Secure token storage and refresh mechanisms
