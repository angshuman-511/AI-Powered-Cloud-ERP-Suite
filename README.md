# Amdox ERP Suite — AI-Powered Cloud ERP

> Enterprise AI-Powered Resource Planning Platform  
> Project Code: AMX-ERP-2026-04 | Amdox Technologies

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- Git

### 1. Backend Setup
```bash
cd backend
npm install
npm run dev
```
Backend starts at: `http://localhost:5000`

### 2. Frontend Setup
Open `frontend/login.html` in your browser, or serve with any static server:
```bash
cd frontend
npx serve -p 3000
```
Frontend accessible at: `http://localhost:3000`

---

## 📁 Project Structure

```
amdox/
├── frontend/                 # Client-side application
│   ├── index.html           # Landing → auto-redirect
│   ├── login.html           # Login page
│   ├── register.html        # Register page
│   ├── dashboard.html       # Dashboard (post-login)
│   ├── css/
│   │   └── styles.css       # Design system
│   └── js/
│       ├── app.js           # Common utilities
│       ├── auth.js          # API client
│       ├── login.js         # Login logic
│       └── register.js      # Register logic
│
├── backend/                  # Server-side API
│   ├── server.js            # Express entry point
│   ├── config/
│   │   └── database.js      # SQLite initialization
│   ├── middleware/
│   │   ├── auth.js          # JWT + RBAC middleware
│   │   └── validation.js    # Input validation
│   ├── routes/
│   │   ├── auth.js          # Auth endpoints
│   │   └── user.js          # User endpoints
│   ├── services/
│   │   ├── authService.js   # Auth business logic
│   │   ├── otpService.js    # Phone OTP service
│   │   └── tokenService.js  # JWT token service
│   └── database/
│       └── schema.sql       # SQL schema
│
└── README.md
```

## 🔐 API Endpoints

### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/auth/register` | Register with email/password |
| POST | `/api/auth/login` | Login with email/password |
| POST | `/api/auth/google` | Google OAuth login |
| POST | `/api/auth/phone/send-otp` | Send OTP to phone |
| POST | `/api/auth/phone/verify-otp` | Verify OTP & login |
| POST | `/api/auth/refresh` | Refresh access token |
| POST | `/api/auth/logout` | Logout (revoke session) |

### User
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/user/profile` | Get user profile |
| GET | `/api/user/dashboard` | Get dashboard data |

### Health
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health/live` | Liveness check |
| GET | `/health/ready` | Readiness check |
| GET | `/health/db` | Database check |

## 🛡️ Security Features
- JWT access + refresh token rotation
- Password hashing (bcrypt, 12 rounds)
- CORS configuration
- Helmet security headers
- Input validation on all endpoints
- RBAC middleware ready
- Audit logging for all auth events

## ⚙️ Environment Variables
Copy `.env.example` to `.env` and configure:
- `JWT_ACCESS_SECRET` / `JWT_REFRESH_SECRET` — Token signing secrets
- `GOOGLE_CLIENT_ID` — For Google OAuth
- `TWILIO_*` — For phone OTP in production

## 📱 Auth Methods Supported
1. **Email + Password** — Full registration and login
2. **Google OAuth** — One-click Google sign-in (requires Google Client ID)
3. **Phone OTP** — SMS verification code (dev mode logs to console)

---

*Amdox Technologies • Engineering Division • April 2026*
