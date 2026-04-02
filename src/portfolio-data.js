// EDIT THIS FILE TO PERSONALIZE YOUR PORTFOLIO

export const portfolioData = {
  // Personal Information
  name: 'John Doe',
  title: 'Full Stack Developer',
  description: 'I build modern web applications with React and JavaScript',
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',

  // Social Links
  social: [
    { name: 'GitHub', url: 'https://github.com' },
    { name: 'LinkedIn', url: 'https://linkedin.com' },
    { name: 'Twitter', url: 'https://twitter.com' },
  ],

  // Skills
  skills: [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'MongoDB', 'PostgreSQL'] },
    { category: 'Tools', items: ['Git', 'Docker', 'Vite', 'VS Code', 'GitHub'] },
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce application with shopping cart and payment integration',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Collaborative task management application with real-time updates',
      technologies: ['React', 'Firebase', 'Tailwind CSS'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A weather application that displays current conditions and forecasts',
      technologies: ['React', 'API Integration', 'CSS Grid'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ],

  // About Section
  about: `I'm a passionate full-stack developer with experience building responsive web applications.
    I enjoy learning new technologies and solving complex problems. When I'm not coding, you can
    find me reading tech blogs or contributing to open-source projects.`,

  // Contact Message
  contactMessage: 'Feel free to get in touch! I\'m always open to new opportunities.',
}
