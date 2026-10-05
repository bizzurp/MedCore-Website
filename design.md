# MedCore Design System

Inspired by Cedar.com's patient-centered healthcare financial experience, tailored for MedCore's revenue cycle intelligence platform.

## Overview

MedCore is a healthcare financial intelligence platform designed to streamline patient discharge workflows, improve revenue cycle management, and provide actionable insights for healthcare administrators. This design system builds upon Cedar.com's principles of clarity, trust, and patient-centered financial interactions while addressing MedCore's specific focus on multi-payer reconciliation and operational analytics.

## Color Palette

### Primary Brand Colors (Existing)
```css
--brand-navy: #0F2A4A;
--brand-navy-light: #18385E;
--brand-navy-dark: #0A1D33;
--brand-blue: #0284C7;
--brand-blue-light: #38BDF8;
--brand-blue-dark: #0369A1;
```

### Cedar-Inspired Accent Colors
```css
--accent-orange: #FF6B35;    /* For alerts, CTAs, highlights */
--accent-green: #4CAF50;     /* For success, positive trends */
--accent-yellow: #FFC107;    /* For warnings, attention */
--accent-teal: #00BCD4;      /* For secondary actions, info */
```

### Neutrals
```css
--neutral-white: #FFFFFF;
--neutral-gray-50: #F8FAFC;
--neutral-gray-100: #F1F5F9;
--neutral-gray-200: #E2E8F0;
--neutral-gray-300: #CBD5E1;
--neutral-gray-400: #94A3B8;
--neutral-gray-500: #64748B;
--neutral-gray-600: #475569;
--neutral-gray-700: #334155;
--neutral-gray-800: #1E293B;
--neutral-gray-900: #0F172A;
```

## Typography

### Font Families
```css
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
--font-mono: 'JetBrains Mono', SF Mono, Menlo, Monaco, Consolas, monospace;
```

### Type Scale
```css
--text-xs: 0.75rem;   /* 12px */
--text-sm: 0.875rem;  /* 14px */
--text-base: 1rem;    /* 16px */
--text-lg: 1.125rem;  /* 18px */
--text-xl: 1.25rem;   /* 20px */
--text-2xl: 1.5rem;   /* 24px */
--text-3xl: 1.875rem; /* 30px */
--text-4xl: 2.25rem;  /* 36px */
--text-5xl: 3rem;     /* 48px */
--text-6xl: 3.75rem;  /* 60px */
```

### Font Weights
- Thin: 100
- Extra Light: 200
- Light: 300
- Regular: 400
- Medium: 500
- Semi Bold: 600
- Bold: 700
- Extra Bold: 800
- Black: 900

## Design Principles

### 1. Clarity Over Complexity
- Progressive disclosure of information
- Clear visual hierarchy
- Ample whitespace for readability
- Consistent spacing and alignment

### 2. Trust Through Data
- Prominent display of key metrics
- Clear data visualization
- Transparent financial calculations
- Audit trails and explanations

### 3. Patient-Centered Language
- Avoid jargon where possible
- Use clear, compassionate terminology
- Focus on patient outcomes
- Human-centered design elements

### 4. Action-Oriented Interface
- Clear call-to-actions
- Contextual actions available at point of need
- Streamlined workflows
- Predictable interactions

## Component Guidelines

### Cards
- Background: `var(--surface-card)` or white
- Border: `1px solid var(--border-neutral)` or `var(--neutral-gray-200)`
- Border Radius: `0.5rem` (8px)
- Shadow: `0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)`
- Padding: `1.5rem` (24px)
- Hover: Subtle elevation increase

### Buttons
#### Primary
- Background: `var(--brand-blue)`
- Text: `var(--neutral-white)`
- Hover: `var(--brand-blue-dark)`
- Border Radius: `0.375rem` (6px)
- Padding: `0.5rem 1rem` (8px 16px)
- Font Weight: `500` (Medium)

#### Secondary
- Background: `var(--neutral-white)`
- Text: `var(--brand-blue)`
- Border: `1px solid var(--brand-blue)`
- Hover Background: `var(--brand-blue-light)`
- Hover Text: `var(--brand-blue-dark)`

#### Accent (Orange)
- Background: `var(--accent-orange)`
- Text: `var(--neutral-white)`
- Hover: `darken(var(--accent-orange), 10%)`

### Alerts & Status Indicators
- Success: Background `var(--accent-green)/10`, Border `var(--accent-green)/20`, Text `var(--accent-green)`
- Warning: Background `var(--accent-yellow)/10`, Border `var(--accent-yellow)/20`, Text `var(--accent-yellow)`
- Error: Background `#EF4444/10`, Border `#EF4444/20`, Text `#EF4444`
- Info: Background `var(--accent-teal)/10`, Border `var(--accent-teal)/20`, Text `var(--accent-teal)`

### Data Visualization
- Charts: Use brand colors for primary data
- Grid Lines: `var(--neutral-gray-200)`
- Axes Text: `var(--neutral-gray-500)`
- Tooltip Background: `var(--neutral-white)`
- Tooltip Border: `1px solid var(--neutral-gray-300)`
- Tooltip Shadow: `0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)`

## Layout Patterns

### Dashboard Layout
- Header: Fixed height, brand navy background
- Sidebar: Collapsible, brand navy or white with border
- Main Content: Flexible, scrollable when needed
- Footer: Optional, minimal

### Card Grid
- Responsive columns: 1 (mobile) → 2 (tablet) → 3-4 (desktop)
- Gap: `1.5rem` (24px) between cards
- Equal height cards within rows

### Forms
- Input Background: `var(--neutral-white)`
- Input Border: `1px solid var(--neutral-gray-300)`
- Input Focus: `ring-2 ring-brand-blue/20`
- Label Text: `var(--neutral-gray-600)`
- Helper Text: `var(--neutral-gray-500)`
- Error Text: `#EF4444`

## Imagery & Icons

### Illustration Style
- Line-based icons with rounded endpoints
- Flat, minimal illustrations
- Healthcare-appropriate imagery (diverse patients, providers, medical settings)
- Avoid clinical sterility; favor warm, human tones

### Icon System
- Stroke width: Consistent (typically 1.5-2px)
- Corner rounding: Consistent
- Size: 20x24px for most UI icons
- Color: `var(--neutral-gray-500)` default, `var(--neutral-gray-700)` on hover/active

## Interaction States

### Hover
- Scale: `scale(1.02)` or `translateY(-2px)`
- Transition: `150ms ease-in-out`

### Focus
- Ring: `2px solid var(--brand-blue)/20`
- Outline: `2px solid var(--brand-blue)`

### Active/Pressed
- Scale: `scale(0.98)`
- Opacity: `0.95`

### Disabled
- Opacity: `0.5`
- Cursor: `not-allowed`

## Accessibility

### Color Contrast
- Minimum AA contrast ratio (4.5:1 for normal text, 3:1 for large text)
- AAA preferred for critical information

### Focus Management
- Visible focus indicators
- Logical tab order
- Skip navigation links

### Touch Targets
- Minimum 44x44px for interactive elements
- Adequate spacing between touch targets

## Application-Specific Components

### Financial Waterfall Display
- Progressive disclosure of payment responsibilities
- Color-coded by payer type (Patient, Philhealth, HMO, etc.)
- Interactive drill-down capabilities
- Clear labeling of each tier

### Encounter Status Indicators
- Stage-based color coding:
  - MGH_DECLARED: `--neutral-gray-400`
  - DOCTOR_PF_PENDING: `--brand-blue`
  - PHARMACY_RTS_AUDIT: `--accent-yellow`
  - HMO_FINAL_LOA: `--accent-teal`
  - PENDING_SETTLEMENT: `--accent-orange`
  - CLEARED_GATE_PASS: `--accent-green`

### Alert Severity
- Info: Blue accent
- Warning: Yellow accent
- Error: Red accent (`#EF4444`)
- Success: Green accent

## Implementation Notes

### CSS Variables
All colors and spacing values should be defined as CSS variables in `:root` or appropriate scope for easy theming and customization.

### Dark Mode Support
MedCore supports dark mode via `class` strategy. Dark mode variants should be provided for:
- Surface colors (inverted neutrals)
- Brand colors (slightly lighter for dark backgrounds)
- Accent colors (maintained vibrancy)

### Responsive Breakpoints
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: > 1024px
- Follow Tailwind's default breakpoints (sm, md, lg, xl, 2xl)

### Animation & Motion
- Subtle transitions for state changes (150-200ms)
- Smooth scrolling for anchor links
- Micro-interactions for feedback
- Respect reduced motion preferences

## File Structure Suggestion

```
/src/styles/
  ├── base.css          // Reset, typography, base styles
  ├── variables.css     // CSS variables (colors, spacing, etc.)
  ├── components/       // Component-specific styles
  └── utils/            // Utilities, helpers, mixins

/src/components/ui/     // Reusable UI components (buttons, cards, inputs, etc.)
/src/components/layout/ // Layout components (header, sidebar, footer)
/src/views/             // Page-level views
```

This design system provides a foundation for building a consistent, accessible, and user-friendly interface for MedCore that inspires trust and facilitates efficient healthcare financial operations.