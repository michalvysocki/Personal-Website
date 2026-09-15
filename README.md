# michalwysocki.com

Personal site — projects, experience, and research interests.
Built with [Astro](https://astro.build) and Tailwind CSS, deployed to GitHub Pages.

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output to ./dist
npm run preview  # serve the production build locally
```

Requires Node 22 or newer.

## Structure

```
src/
  components/    UI components (Hero, ProjectCard, Experience, ...)
  content/
    projects/    one .mdx file per project — frontmatter + long-form write-up
  data/          structured data with no long-form content (experience, education)
  layouts/       Base.astro — head, metadata, nav, footer
  pages/         routes: /, /projects, /projects/[slug], /cv, /about, 404
  styles/        global.css — design tokens in @theme
public/          static assets served as-is (favicons, og.png, CNAME, robots.txt)
```

## Adding content

**A project** — create `src/content/projects/<slug>.mdx`. The filename becomes the
URL. Frontmatter is validated against the schema in `src/content.config.ts`, so a
missing or mistyped field fails the build. Set `featured: true` to show it on the
homepage; `order` controls sorting.

**A role or degree** — append to `src/data/experience.ts` or
`src/data/education.ts`. The entry shown in "Currently" block on
the homepage is the one with 'current: true' value.

**Design tokens** — colors and fonts live in the `@theme` block in
`src/styles/global.css`. Change them there, not in component classes.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes it to GitHub Pages. The custom domain is set by `public/CNAME`.