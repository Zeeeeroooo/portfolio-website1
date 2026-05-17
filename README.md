# Personal Portfolio Website

A clean, modern, mobile-friendly personal portfolio website built with React, Vite, and Tailwind CSS.

## Sections Included

- Hero section with name, intro, and CTA buttons
- About Me section
- Skills section
- Projects section
- Contact section
- Smooth hover effects and simple animations
- Soft colors, professional spacing, and responsive layout

## How to Run Locally

1. Install Node.js from https://nodejs.org if you do not already have it.
2. Open this project folder in your terminal.
3. Install dependencies:

```bash
npm install
```

4. Start the development server:

```bash
npm run dev
```

5. Open the local URL shown in your terminal, usually:

```bash
http://localhost:5173
```

## How to Build for Production

```bash
npm run build
```

The production-ready files will be created in the `dist` folder.

To preview the production build locally:

```bash
npm run preview
```

## How to Edit the Website

Most editable content is in:

```bash
src/App.jsx
```

### Update Your Name and Intro

Find this object near the top of `src/App.jsx`:

```js
const profile = {
  name: 'Your Name',
  role: 'Frontend Developer',
  intro: 'I build clean, responsive, and user-friendly web experiences...',
  email: 'hello@example.com',
  location: 'Your City, Country'
}
```

Replace the placeholder values with your own details.

### Update Skills

Edit the `skills` array:

```js
const skills = ['React', 'Tailwind CSS', 'JavaScript']
```

Add, remove, or rename skills as needed.

### Update Projects

Edit the `projects` array:

```js
const projects = [
  {
    title: 'Project One',
    description: 'A short project description goes here.',
    tech: ['React', 'Tailwind'],
    link: '#'
  }
]
```

Change each project title, description, technologies, and link.

### Change Colors and Styling

The design uses Tailwind CSS utility classes directly inside `src/App.jsx`.

Common classes to edit:

- `text-teal-600` for accent text
- `bg-teal-100` for soft accent backgrounds
- `bg-slate-950` for dark sections and buttons
- `rounded-[2rem]` for large rounded corners
- `shadow-xl` and `shadow-2xl` for card shadows

### Add a Real Profile Photo

The hero card currently has a placeholder circle. You can replace it with an image by placing your image in the `public` folder and using an `<img>` tag in `src/App.jsx`.

Example:

```jsx
<img
  src="/profile.jpg"
  alt="Your Name"
  className="mb-8 h-28 w-28 rounded-full object-cover shadow-inner"
/>
```

## File Structure

```bash
personal-portfolio-website/
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── README.md
└── src/
    ├── App.jsx
    ├── main.jsx
    └── styles.css
```
