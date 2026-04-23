# AGENTS.md

## Project Overview

This repository contains **Premium Custom Admin Dashboard**, a React + Vite frontend application based on a Figma design and adapted into a modular component architecture.

The app renders a data-rich dashboard for service/business operations, including:

- KPI cards and trends
- Revenue and lead source charts
- Workflow board
- Automation status cards
- Activity feed

## Tech Stack

- React 18 (peer dependency)
- Vite 6
- Tailwind CSS v4 (`@tailwindcss/vite`)
- TypeScript (`.tsx` source)
- Motion (`motion/react`) for transitions
- Recharts for data visualization
- Radix UI primitives + custom UI components
- Lucide icons and MUI packages present in dependencies

## Repo Structure

```text
src/
  app/
    App.tsx                    # Main dashboard composition
    components/
      Sidebar.tsx
      Header.tsx
      KPICard.tsx
      RevenueChart.tsx
      LeadSourceChart.tsx
      WorkflowBoard.tsx
      AutomationCard.tsx
      ActivityFeed.tsx
      ui/                      # Reusable UI primitives
      figma/                   # Figma helper components
  styles/
    index.css                  # Style entrypoint imports
    tailwind.css               # Tailwind source declarations
    theme.css                  # Design tokens/theme variables
    fonts.css                  # Font declarations
```

## Local Development

- Install dependencies: `npm install`
- Start dev server: `npm run dev`
- Build production bundle: `npm run build`

## Agent Guidance

- Keep the visual language consistent with existing theme tokens in `src/styles/theme.css`.
- Prefer extending existing components in `src/app/components` instead of introducing duplicate patterns.
- Use the reusable primitives in `src/app/components/ui` before creating new base UI components.
- Keep component responsibilities focused and avoid monolithic files.
- Preserve gradients, glassmorphism, and animated reveal patterns used across the dashboard.
- Do not commit generated artifacts (`dist/`, logs, `node_modules/`).

## Documentation Sync Rules

When project behavior or structure changes, update:

- `README.md` for user-facing setup and architecture notes
- `AGENTS.md` for implementation and contributor/agent guidance
- `.gitignore` if new generated artifacts are introduced

