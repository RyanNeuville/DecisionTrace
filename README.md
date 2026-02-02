# DecisionTrace

**DecisionTrace** is an innovative web application designed for businesses to structure strategic decision-making and centralize financial management. The tool preserves the reasoning behind each choice and links these decisions to their actual financial impacts.

## Key Features

### Decision Management (Module 1)

- **Formalization**: Defining the context and responsibilities.

- **Comparative Analysis**: Adding options and evaluation criteria.

- **Traceability**: Final justification and retention of the decision history.

### Financial Management (Module 2)

- **Flow Tracking**: Recording and categorizing inflows and outflows.

- **Monitoring**: Automatic balance calculation and visualization via graphical reports.

- **Innovation**: Direct link between a financial transaction and a strategic decision.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS & Shadcn/ui
- **Authentication**: Clerk
- **Database**: PostgreSQL (via Prisma ORM)
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js (v18+ recommended)
- npm or pnpm

### Installation

1.  Clone the repository:

    ```bash
    git clone https://github.com/RyanNeuville/DecisionTrace.git
    cd decisiontrace
    ```

2.  Install dependencies:
    ```bash
    npm install
    # or
    pnpm install
    ```

### Environment Setup

Create a `.env` file in the root directory (or `.env.local`) and add the following variables:

```env
# Database
DATABASE_URL="postgresql://user:password@localhost:5432/decisiontrace"

# Auth (Clerk)
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
```

### Database Setup

Run the following commands to set up the database schema:

```bash
# Generate Prisma Client
npx prisma generate

# Push schema to the database (for development)
npx prisma db push
```

### Running the App

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser.

## CI/CD

This project uses **GitHub Actions** for continuous integration.
The workflow is defined in `.github/workflows/ci.yml` and includes:

- **Quality Check**: Runs `eslint` to ensure code quality.
- **Build**: Verifies that the application builds successfully.
