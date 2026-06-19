# Bright.ng

Personal portfolio site — hero, project showcase, testimonials, work timeline, contact CTA.

## Stack
- Next.js 14 (App Router)
- Tailwind CSS
- Framer Motion
- TypeScript
- Deployed on Vercel

## Structure
- `/app` — routes (home + project case studies)
- `/components` — UI components
- `/data` — static content (projects, experience)
- `/public/assets` — images, icons

## Coding rules
- Mobile-first, responsive at every breakpoint
- All content lives in `/data`, never hardcoded in components
- Framer Motion `whileInView` for scroll animations — structure first, polish later
- No new dependencies without explicit approval
- Never touch shared config files without explicit instruction
