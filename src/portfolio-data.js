// EDIT THIS FILE TO PERSONALIZE YOUR PORTFOLIO

export const portfolioData = {
  // Personal Information
  name: 'Kandice Estrella',
  title: 'Software Engineer',
  description: 'I am a recent graduate with a passion for web software development and a strong foundation in computer science and mathematics. I am eager to apply my skills and knowledge to real-world projects and contribute to innovative solutions.',
  email: 'kandiceestrella@gmail.com',
  //phone: '+1 (555) 123-4567',

  // Social Links
  social: [
    { name: 'GitHub', url: 'https://github.com/Kandice-E' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/kandice-estrella-204657246' },
    //{ name: 'Twitter', url: 'https://twitter.com' },
  ],

  // Skills
  skills: [
    { category: 'Frontend', items: ['React', 'JavaScript', 'HTML5', 'CSS3', 'THREE.js', 'Vite', 'GitHub Pages'] },
    { category: 'Backend', items: ['C++', 'Node.js', 'SQL', 'CUDA', 'Microsoft SQL Server'] },
    { category: 'Tools', items: ['Git', 'VS Code', 'GitHub', 'Cursor AI Code Editor', 'Microsoft Visual Studio','Microsoft Office'] },
  ],

  // Projects
  projects: [
    {
      id: 1,
      title: 'Winter Sky Arena',
      description: 'A 3D web-based game built with THREE.js, featuring interactive gameplay and immersive graphics. In-progress updates include implementing a genetic algorithm for enemy behavior and round-based combat.',
      technologies: ['JavaScript', 'Node.js', 'HTML', 'CSS', 'GitHub Pages', 'Vite'],
      github: 'https://github.com/Kandice-E/Module6_WinterSkyArena',
      live: 'https://kandice-e.github.io/WinterSkyArena/',
    },
    {
      id: 2,
      title: 'BlackJack Game',
      description: 'A simple BlackJack game playable in the browser. The game features basic gameplay mechanics and a user-friendly interface.',
      technologies: ['JavaScript', 'HTML', 'CSS', 'Cursor AI Code Editor', 'GitHub Pages'],
      github: 'https://github.com/Kandice-E/BlackJack_Cursor',
      live: 'https://kandice-e.github.io/BlackJack_Cursor/',
    },
    {
      id: 3,
      title: 'Advanced Sprite System',
      description: 'This project aims to demonstrate the use of sprites in Three.js with a focus on optimization strategies for large sprite systems. -The first scene portrays sprite animation and user interaction while the second showcases a texture applied to 30,000 sprites.',
      technologies: ['JavaScript', 'HTML', 'GitHub Pages', 'Vite'],
      github: 'https://github.com/Kandice-E/Module5_AdvancedSpriteSystem',
      live: 'https://kandice-e.github.io/AdvancedSpriteSystem/',
    },
  ],

  // About Section
  about: `I'm a passionate full-stack developer with experience building live server-side web/game applications.
    I enjoy learning new technologies and solving complex problems.`,

  // Education
  education: [
    {
      degree: 'Bachelor of Science in Mathematics',
      school: 'Gordon State College',
      year: '2024',
      details: 'Graduated with honors, GPA: 3.71',
    },
    {
      degree: 'Master of Science in Software Systems',
      school: 'Mercer University, School of Engineering',
      year: '2026',
      details: 'Current GPA: 4.0, expected graduation in May 2026',
    },
  ],

  // GitHub Repositories
  repositories: [
    {
      name: 'MyPortfolioWebsite_KE',
      description: 'Personal portfolio website built with React and Vite',
      url: 'https://github.com/yourusername/MyPortfolioWebsite_KE',
      stars: 0,
    },
    {
      name: 'THREE.js Exploring Geometries',
      description: 'A collection of interactive 3D geometry visualizations using THREE.js',
      url: 'https://github.com/Kandice-E/THREEjs-exploring-geometries',
      stars: 0,
    },
    {
      name: 'NVCC Compiler Optimizations on CUDA Code',
      description: 'Systematic investigation and documentation of the performance impact of various NVCC compiler optimizations on CUDA code',
      url: 'https://github.com/Kandice-E/Module4',
      stars: 0,
    },
  ],

  // Contact Message
  contactMessage: 'Feel free to get in touch! I\'m always open to new opportunities.',
}
