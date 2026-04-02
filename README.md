# My Portfolio Website

A simple, personalization-friendly portfolio website built with **React** and **JavaScript**, powered by **Vite**, and deployed on **GitHub Pages**.

## ✨ Features

- 📱 Fully responsive design
- 🎨 Modern dark theme with blue accents
- ⚡ Fast build with Vite
- 📝 Easy to personalize with `portfolio-data.js`
- 🚀 One-click deployment to GitHub Pages
- 🔗 Smooth navigation with hash anchors
- 📧 Contact form with form state management

## 📁 Project Structure

```
src/
├── components/           # React components
│   ├── Header.jsx      # Navigation header
│   ├── Hero.jsx        # Landing section
│   ├── About.jsx       # About me section
│   ├── Skills.jsx      # Skills list
│   ├── Projects.jsx    # Project showcase
│   ├── Contact.jsx     # Contact form
│   └── Footer.jsx      # Footer
├── portfolio-data.js   # ⭐ EDIT THIS TO PERSONALIZE
├── App.jsx            # Main app component
├── App.css            # Global styles
├── index.css          # Base styles
└── main.jsx           # Entry point
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/MyPortfolioWebsite_KE.git
cd MyPortfolioWebsite_KE
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Personalize Your Portfolio

Edit `src/portfolio-data.js` and update:

```javascript
export const portfolioData = {
  name: 'Your Name',
  title: 'Your Title',
  description: 'Your description',
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  // ... and more
}
```

### 4. Run Development Server

```bash
npm run dev
```

Open `http://localhost:5173` in your browser.

## 🏗️ Building for Production

```bash
npm run build
```

This creates a `dist/` folder with optimized files ready for deployment.

### 5. Preview Production Build

```bash
npm run preview
```

## 🌐 Deploy to GitHub Pages

### Automatic Deployment (Recommended)

1. Push your changes to the `main` branch:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```

2. The GitHub Actions workflow will automatically:
   - Build your site
   - Deploy to GitHub Pages
   - Your site is live at `https://yourusername.github.io/MyPortfolioWebsite_KE/`

### Manual Setup (First Time)

1. Go to **Settings** → **Pages**
2. Under "Build and deployment", make sure:
   - Source: **Deploy from a branch**
   - Branch: **gh-pages** (created automatically after first workflow run)

## 📝 Customization Guide

### Update Personal Information

Edit `src/portfolio-data.js`:

```javascript
export const portfolioData = {
  name: 'John Doe',              // Your name
  title: 'Full Stack Developer', // Your title
  description: 'I build modern web applications...',
  email: 'john@example.com',
  phone: '+1 (555) 123-4567',
  // ...
}
```

### Update Skills

```javascript
skills: [
  { 
    category: 'Frontend', 
    items: ['React', 'JavaScript', 'HTML5', 'CSS3'] 
  },
  // Add more skill categories...
]
```

### Update Projects

```javascript
projects: [
  {
    id: 1,
    title: 'My Awesome Project',
    description: 'Project description here...',
    technologies: ['React', 'Node.js', 'MongoDB'],
    github: 'https://github.com/yourusername/project',
    live: 'https://project-demo.com',
  },
  // Add more projects...
]
```

### Update Social Links

```javascript
social: [
  { name: 'GitHub', url: 'https://github.com/yourusername' },
  { name: 'LinkedIn', url: 'https://linkedin.com/in/yourprofile' },
  { name: 'Twitter', url: 'https://twitter.com/yourhandle' },
]
```

### Update About Section

```javascript
about: `I'm a passionate developer with 5+ years of experience...`,
contactMessage: 'Feel free to reach out!',
```

## 🎨 Styling

All styling is done with CSS files located next to each component:

- Global styles: `src/App.css` and `src/index.css`
- Component styles: `src/components/ComponentName.css`

To customize colors, edit the CSS files. Main colors used:

- Primary Blue: `#3b82f6`
- Background: `rgba(15, 23, 42, ...)`
- Text: `#f1f5f9` (light) and `#cbd5e1` (secondary)

## 📧 Contact Form

The contact form in `Contact.jsx` currently logs to the browser console. To make it fully functional, integrate with:

- **EmailJS**: Easy email integration
- **Formspree**: Simple form backend
- **Netlify Forms**: If migrating to Netlify
- **Custom Backend**: Your own API

Example with Formspree:

```javascript
// In Contact.jsx handleSubmit function:
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(formData)
})
```

## 🔧 Available Scripts

```bash
npm run dev      # Start development server (http://localhost:5173)
npm run build    # Build for production
npm run preview  # Preview production build locally
```

## 💡 Tips

- **Smooth Scrolling**: Navigation links automatically smooth scroll to sections
- **Responsive Design**: Works on mobile, tablet, and desktop
- **Fast Loading**: Vite's optimizations make it lightweight and fast
- **SEO Ready**: Update the title and meta tags in `index.html`

## 📱 Mobile Optimization

The portfolio is fully responsive with breakpoints for:

- Mobile: 320px - 768px
- Tablet: 768px - 1024px
- Desktop: 1024px+

Test on mobile:
```bash
npm run dev
# Visit: http://your-ip:5173
```

## 🐛 Troubleshooting

### Build fails with "Command not found"

```bash
npm install
npm run build
```

### Can't access on mobile

Make sure you're using your computer's IP address (not localhost):

```bash
npm run dev
# Shows: Local: http://localhost:5173/MyPortfolioWebsite_KE/
#        Network: http://192.168.x.x:5173/MyPortfolioWebsite_KE/
```

### GitHub Pages not updating

1. Go to repository **Settings** → **Pages**
2. Check that **gh-pages** branch is selected
3. Wait 1-2 minutes for deployment
4. Clear browser cache (Ctrl+Shift+Delete)

## 📚 Learn More

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [GitHub Pages Guide](https://pages.github.com)

## 📄 License

This project is open source and available under the MIT License.

---

**Made with ❤️ by You**
"" 
