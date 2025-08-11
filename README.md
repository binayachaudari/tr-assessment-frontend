# ATM Application

A React-based ATM simulation application built with modern web technologies. This application provides an interactive ATM experience with features like PIN entry, balance checking, deposits, and withdrawals.

## Quick Start

### Prerequisites

- **Node.js** (version 18 or higher)
- **Yarn** (recommended) or **npm**

### Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/binayachaudari/tr-assessment-frontend.git
   cd frontend
   ```

2. **Install dependencies**

   ```bash
   yarn
   # or
   npm install
   ```

3. **Environment Setup** (if applicable)

   ```bash
   cp .env.example .env
   # Edit .env file with your configuration
   ```

4. **Start Development Server**

   ```bash
   yarn dev
   # or
   npm run dev
   ```

5. **Open your browser**
   - Navigate to `http://localhost:5173`
   - The application should now be running!

## Browser

Brave
Brave 1.80.125 (Official Build) (arm64)
Chromium: 138.0.7204.184

## Available Scripts

- `yarn dev` - Start development server
- `yarn build` - Build for production
- `yarn preview` - Preview production build
- `yarn lint` - Run ESLint
- `yarn lint:fix` - Fix ESLint issues
- `yarn format` - Format code with Prettier

## Key Libraries & Technologies

### Core Framework

- **React 19** - Modern React with latest features
- **Vite** - Fast build tool and development server
- **React Router DOM 7** - Client-side routing

### State Management & Data Fetching

- **TanStack React Query 4** - Server state management and caching
- **React Context API** - Client-side state management

### Styling & UI

- **Tailwind CSS 4** - Utility-first CSS framework
- **clsx** - Conditional className utility

### HTTP & API

- **Axios** - HTTP client for API requests
- **JWT Decode** - JWT token handling

### Development Tools

- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Husky** - Git hooks
- **Vitest** - Unit testing framework
- **Testing Library** - React component testing

## Configuration

The application uses several configuration files:

- `vite.config.js` - Vite build configuration
- `eslint.config.js` - ESLint rules
- `.prettierrc` - Prettier formatting rules
- `tailwind.config.js` - Tailwind CSS configuration

## Features

- **PIN Management** - Secure PIN entry and validation
- **Balance Checking** - View account balance
- **Deposits** - Simulate cash deposits
- **Withdrawals** - Simulate cash withdrawals
- **Card Brand Support** - Multiple credit card brand displays
- **Responsive Design** - Works on various screen sizes
- **Modern UI** - Clean, ATM-like interface
