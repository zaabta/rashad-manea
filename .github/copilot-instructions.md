<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# E-Portfolio Project Instructions

## Project Overview
This is a modern, responsive portfolio website built with Next.js 13+, TypeScript, and Tailwind CSS. The project follows a component-based architecture with a clean separation of concerns.

## Development Guidelines

### Code Style
- Use TypeScript for all new files
- Follow functional component patterns with hooks
- Use Tailwind CSS for styling - avoid custom CSS when possible
- Implement responsive design mobile-first
- Use semantic HTML elements for accessibility

### Component Structure
- Keep components focused and single-responsibility
- Use proper TypeScript interfaces for props
- Add JSDoc comments for complex components
- Use proper error boundaries and loading states

### Data Management
- All portfolio data is centralized in `/src/data/index.ts`
- Use TypeScript interfaces from `/src/types/index.ts`
- Maintain type safety across all data operations

### Styling Conventions
- Use custom Tailwind classes defined in `globals.css`
- Follow the established color scheme (primary: blue, accent: purple)
- Use consistent spacing and typography scales
- Implement smooth transitions and hover effects

### Performance Considerations
- Use Next.js Image component for all images
- Implement proper lazy loading
- Optimize bundle size with dynamic imports when needed
- Follow Next.js best practices for SEO

### Accessibility
- Use proper ARIA labels and roles
- Ensure keyboard navigation works
- Maintain good color contrast ratios
- Use semantic HTML structure

## File Organization
- Components in `/src/components/`
- Data and content in `/src/data/`
- Type definitions in `/src/types/`
- Shared utilities in `/src/utils/` (if created)

## Common Patterns
- Use `'use client'` directive for components with interactivity
- Implement proper error handling for forms and API calls
- Use consistent naming conventions (PascalCase for components, camelCase for functions)
- Add proper loading and empty states for dynamic content
