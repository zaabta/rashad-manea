import { Project, Experience, Skill, Education, ContactInfo, PersonalInfo } from '@/types'

/**
 * Personal information data
 * Update this with your actual information
 */
export const personalInfo: PersonalInfo = {
  name: 'Your Name',
  title: 'Dedicated Educator & Teacher',
  bio: 'Passionate educator with extensive experience in curriculum development, student engagement, and educational technology integration. Committed to fostering inclusive learning environments that inspire and empower students to reach their full potential.',
  image: '/images/profile.jpg', // Add your profile image to public/images/
  resume: '/resume.pdf' // Add your resume to public/
}

/**
 * Contact information
 * Update with your actual contact details
 */
export const contactInfo: ContactInfo = {
  email: 'your.email@example.com',
  phone: '+1 (555) 123-4567',
  location: 'Your City, State',
  linkedin: 'https://linkedin.com/in/yourprofile',
  github: 'https://github.com/yourusername',
  twitter: 'https://twitter.com/yourusername',
  website: 'https://yourwebsite.com'
}

/**
 * Skills data
 * Add your teaching skills and educational competencies
 */
export const skills: Skill[] = [
  // Teaching & Pedagogy
  { id: '1', name: 'Curriculum Development', level: 95, category: 'frontend' },
  { id: '2', name: 'Lesson Planning', level: 90, category: 'frontend' },
  { id: '3', name: 'Student Assessment', level: 85, category: 'frontend' },
  { id: '4', name: 'Differentiated Instruction', level: 90, category: 'frontend' },
  { id: '5', name: 'Classroom Management', level: 88, category: 'frontend' },
  { id: '6', name: 'Educational Psychology', level: 80, category: 'frontend' },
  
  // Technology Integration
  { id: '7', name: 'Educational Technology', level: 85, category: 'backend' },
  { id: '8', name: 'Learning Management Systems', level: 80, category: 'backend' },
  { id: '9', name: 'Digital Assessment Tools', level: 75, category: 'backend' },
  { id: '10', name: 'Interactive Whiteboards', level: 82, category: 'backend' },
  { id: '11', name: 'Video Conferencing', level: 90, category: 'backend' },
  { id: '12', name: 'Educational Apps & Software', level: 78, category: 'backend' },
  
  // Subject Expertise
  { id: '13', name: 'Mathematics', level: 95, category: 'database' },
  { id: '14', name: 'Science', level: 85, category: 'database' },
  { id: '15', name: 'English Language Arts', level: 80, category: 'database' },
  
  // Professional Skills
  { id: '16', name: 'Communication', level: 95, category: 'tools' },
  { id: '17', name: 'Collaboration', level: 90, category: 'tools' },
  { id: '18', name: 'Professional Development', level: 85, category: 'tools' },
  { id: '19', name: 'Data Analysis', level: 75, category: 'tools' },
]

/**
 * Projects data - Educational Achievements & Initiatives
 * Showcase your teaching projects and educational contributions
 */
export const projects: Project[] = [
  {
    id: '1',
    title: 'STEM Curriculum Integration Project',
    description: 'Developed and implemented an interdisciplinary STEM curriculum that increased student engagement by 40% and improved test scores across all grade levels.',
    longDescription: 'A comprehensive curriculum project that integrated Science, Technology, Engineering, and Mathematics across multiple grade levels. Collaborated with fellow educators to create hands-on learning experiences that connected theoretical concepts to real-world applications.',
    image: '/images/projects/stem-curriculum.jpg',
    technologies: ['Curriculum Design', 'STEM Education', 'Project-Based Learning', 'Assessment Tools'],
    liveUrl: 'https://your-teaching-portfolio.com/stem-project',
    githubUrl: '', // Not applicable for teaching projects
    featured: true,
    category: 'web'
  },
  {
    id: '2',
    title: 'Digital Literacy Program',
    description: 'Created and led a school-wide digital literacy program, training 200+ students and 30+ faculty members in educational technology.',
    longDescription: 'Designed and implemented a comprehensive digital literacy program that equipped students with essential 21st-century skills. Provided professional development workshops for colleagues and created resource materials.',
    image: '/images/projects/digital-literacy.jpg',
    technologies: ['EdTech', 'Professional Development', 'Training', 'Resource Creation'],
    liveUrl: 'https://your-school-website.com/digital-literacy',
    githubUrl: '',
    featured: true,
    category: 'web'
  },
  {
    id: '3',
    title: 'Student Mentorship Program',
    description: 'Established a peer mentorship program that improved student retention rates by 25% and enhanced overall academic performance.',
    longDescription: 'Developed and coordinated a comprehensive mentorship program pairing upperclassmen with underclassmen. Created training materials for mentors and tracking systems for progress monitoring.',
    image: '/images/projects/mentorship.jpg',
    technologies: ['Student Development', 'Program Management', 'Data Analysis', 'Collaboration'],
    liveUrl: '',
    githubUrl: '',
    featured: false,
    category: 'web'
  },
  {
    id: '4',
    title: 'Inclusive Classroom Initiative',
    description: 'Designed and implemented inclusive teaching strategies that accommodated diverse learning styles and improved accessibility for all students.',
    longDescription: 'Developed comprehensive inclusive education practices that ensured equitable learning opportunities for students with diverse backgrounds and abilities. Created resource guides and conducted workshops for fellow educators.',
    image: '/images/projects/inclusive-education.jpg',
    technologies: ['Inclusive Education', 'Differentiated Instruction', 'Universal Design', 'Special Education'],
    liveUrl: '',
    githubUrl: '',
    featured: false,
    category: 'web'
  }
]

/**
 * Work experience data - Teaching Experience
 * List your educational and teaching experience
 */
export const experience: Experience[] = [
  {
    id: '1',
    company: 'Lincoln High School',
    position: 'High School Mathematics Teacher',
    startDate: '2022-08',
    endDate: undefined, // Current position
    description: 'Lead mathematics instructor responsible for teaching Algebra, Geometry, and Advanced Placement Calculus to students in grades 9-12.',
    responsibilities: [
      'Designed and implemented engaging lesson plans for 150+ students across multiple mathematics courses',
      'Developed differentiated instruction strategies to accommodate diverse learning styles and abilities',
      'Integrated educational technology tools to enhance student engagement and learning outcomes',
      'Collaborated with department colleagues to align curriculum with state standards and best practices',
      'Provided individualized support and tutoring to struggling students, improving pass rates by 30%',
      'Mentored new teachers and student teachers in effective pedagogical practices'
    ],
    technologies: ['Algebra', 'Geometry', 'Calculus', 'Educational Technology', 'Google Classroom', 'Khan Academy'],
    location: 'Springfield, IL',
    type: 'full-time'
  },
  {
    id: '2',
    company: 'Roosevelt Middle School',
    position: 'Middle School Science Teacher',
    startDate: '2020-08',
    endDate: '2022-06',
    description: 'Taught physical science and earth science to 6th, 7th, and 8th grade students with focus on hands-on learning and scientific inquiry.',
    responsibilities: [
      'Developed and implemented inquiry-based science curriculum for 120+ middle school students',
      'Organized and supervised science fair competitions, with 85% student participation rate',
      'Created interdisciplinary projects connecting science concepts to real-world applications',
      'Implemented laboratory safety protocols and supervised hands-on experiments',
      'Collaborated with special education team to support students with diverse learning needs',
      'Led professional development workshops on NGSS implementation'
    ],
    technologies: ['Physical Science', 'Earth Science', 'Lab Management', 'NGSS Standards', 'Scientific Method'],
    location: 'Springfield, IL',
    type: 'full-time'
  },
  {
    id: '3',
    company: 'Greenwood Elementary School',
    position: 'Elementary Education Teacher',
    startDate: '2018-08',
    endDate: '2020-06',
    description: 'Fourth-grade classroom teacher responsible for comprehensive instruction across all core subjects with emphasis on literacy and numeracy development.',
    responsibilities: [
      'Provided comprehensive instruction in mathematics, language arts, science, and social studies',
      'Implemented differentiated instruction strategies for students with varying ability levels',
      'Developed and maintained positive relationships with students, parents, and colleagues',
      'Used formative and summative assessments to track student progress and adjust instruction',
      'Participated in grade-level team meetings and school improvement initiatives',
      'Supervised student teachers and provided mentorship in classroom management'
    ],
    technologies: ['Elementary Curriculum', 'Literacy Development', 'Classroom Management', 'Parent Communication'],
    location: 'Springfield, IL',
    type: 'full-time'
  }
]

/**
 * Education data - Academic Background & Certifications
 * Add your educational background and teaching certifications
 */
export const education: Education[] = [
  {
    id: '1',
    institution: 'State University',
    degree: 'Master of Education',
    field: 'Curriculum and Instruction',
    startDate: '2019-08',
    endDate: '2021-05',
    gpa: '3.9/4.0',
    description: 'Specialized in curriculum development and educational leadership with focus on differentiated instruction and assessment strategies.'
  },
  {
    id: '2',
    institution: 'State University',
    degree: 'Bachelor of Science',
    field: 'Mathematics Education',
    startDate: '2015-08',
    endDate: '2019-05',
    gpa: '3.7/4.0',
    description: 'Major in Mathematics with teaching certification. Completed student teaching at diverse school settings with exemplary evaluations.'
  },
  {
    id: '3',
    institution: 'State Department of Education',
    degree: 'Teaching License',
    field: 'Mathematics (Grades 6-12)',
    startDate: '2019-05',
    endDate: '2029-05',
    description: 'Professional teaching license with endorsements in Mathematics and Educational Technology.'
  },
  {
    id: '4',
    institution: 'National Board for Professional Teaching Standards',
    degree: 'National Board Certification',
    field: 'Adolescence and Young Adulthood Mathematics',
    startDate: '2023-01',
    endDate: '2033-01',
    description: 'Achieved National Board Certification demonstrating accomplished teaching practices and student impact.'
  }
]
