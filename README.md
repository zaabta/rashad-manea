# E-Portfolio - Teaching Portfolio Website

A stunning, responsive teaching portfolio website built with Next.js, TypeScript, and Tailwind CSS. This template provides a complete solution for educators to showcase their teaching experience, educational initiatives, and professional qualifications for job applications.

## 🌟 Features

- **Education-Focused Design**: Clean, professional interface tailored for teaching professionals
- **Fully Responsive**: Optimized for all devices and screen sizes
- **TypeScript**: Type-safe development with excellent developer experience
- **Performance Optimized**: Built with Next.js for optimal performance
- **SEO Friendly**: Proper metadata and structure for search engines
- **Dark Mode Ready**: Prepared for dark mode implementation
- **Smooth Animations**: Subtle animations for enhanced user experience
- **Contact Form**: Functional contact form for potential employers
- **Teaching Projects Showcase**: Beautiful cards highlighting educational initiatives
- **Skills Visualization**: Interactive progress bars for teaching competencies
- **Experience Timeline**: Professional timeline layout for teaching positions
- **Easy Customization**: Well-structured and commented code specifically for educators

## 🚀 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🛠️ Customization

### Personal Information

Update your personal information in `/src/data/index.ts`:

```typescript
export const personalInfo: PersonalInfo = {
  name: 'Your Name',
  title: 'Your Job Title',
  bio: 'Your bio description',
  image: '/images/profile.jpg',
  resume: '/resume.pdf'
}
```

### Contact Information

Update your contact details:

```typescript
export const contactInfo: ContactInfo = {
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  location: 'Your City, State',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  // ... other social links
}
```

### Projects

Add your projects to the `projects` array:

```typescript
export const projects: Project[] = [
  {
    id: '1',
    title: 'Your Project Name',
    description: 'Brief description',
    image: '/images/projects/project1.jpg',
    technologies: ['React', 'Node.js', 'MongoDB'],
    liveUrl: 'https://yourproject.com',
    githubUrl: 'https://github.com/yourusername/project',
    featured: true,
    category: 'web'
  },
  // ... more projects
]
```

### Skills

Update the skills array with your proficiency levels:

```typescript
export const skills: Skill[] = [
  {
    id: '1',
    name: 'React',
    level: 90,
    category: 'frontend'
  },
  // ... more skills
]
```

### Experience

Add your work experience:

```typescript
export const experience: Experience[] = [
  {
    id: '1',
    company: 'Company Name',
    position: 'Your Position',
    startDate: '2022-01',
    endDate: undefined, // Use undefined for current position
    description: 'Job description',
    responsibilities: [
      'Responsibility 1',
      'Responsibility 2',
    ],
    technologies: ['Tech1', 'Tech2'],
    location: 'City, State',
    type: 'full-time'
  },
  // ... more experience
]
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Projects.tsx
│   └── Skills.tsx
├── data/               # Data and content
│   └── index.ts        # All portfolio data
└── types/              # TypeScript type definitions
    └── index.ts        # Type definitions

public/
├── images/            # Image assets
│   ├── projects/      # Project screenshots
│   └── profile.jpg    # Profile photo
└── resume.pdf         # Your resume file
```

## 🎨 Styling

This project uses Tailwind CSS with a custom configuration:

- **Primary Colors**: Blue gradient theme
- **Secondary Colors**: Purple accent colors
- **Custom Utilities**: Custom classes for common patterns
- **Responsive Design**: Mobile-first approach
- **Animations**: Custom animation classes

### Custom CSS Classes

- `.gradient-text`: Gradient text effect
- `.btn-primary`: Primary button styling
- `.btn-secondary`: Secondary button styling
- `.card-hover`: Card hover effects
- `.section-padding`: Consistent section padding
- `.container-max-width`: Maximum container width

## 🖼️ Assets

### Required Images

1. **Profile Photo**: Add your profile photo as `/public/images/profile.jpg`
2. **Project Screenshots**: Add project images to `/public/images/projects/`
3. **Resume**: Add your resume as `/public/resume.pdf`

### Image Specifications

- **Profile Photo**: 400x400px, square format
- **Project Images**: 800x600px, landscape format
- **File Formats**: JPG, PNG, WebP

## 📧 Contact Form Integration

The contact form is ready for integration with various services:

### Netlify Forms
Add `netlify` attribute to the form element.

### Formspree
Update the form action to your Formspree endpoint.

### EmailJS
Integrate EmailJS for client-side email sending.

### Custom Backend
Connect to your own backend API.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Netlify

1. Build the project: `npm run build`
2. Deploy the `out` folder to Netlify

### Other Platforms

The built files can be deployed to any static hosting service.

## 🔧 Development Commands

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 📞 Support

If you have any questions or need help customizing the portfolio, feel free to reach out!

---

**Made with ❤️ using Next.js and Tailwind CSS**
