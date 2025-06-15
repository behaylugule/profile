export interface Experience {
  id: string;
  title: string;
  company: string;
  location: string;
  period: string;
  responsibilities: string[];
  achievements?: string[];
  technologies?: string[];
  email?: string;
  website?: string;
}

export const experiences: Experience[] = [
  {
    id: 'nisir',
    title: 'FULL-STACK SOFTWARE DEVELOPER',
    company: 'NISIR IT SOLUTION',
    location: 'Addis Ababa, Ethiopia',
    period: '27/06/2024 - CURRENT',
    responsibilities: [
      'Developing and maintaining enterprise applications',
      'Implementing new features and functionality',
      'Collaborating with cross-functional teams',
      'Writing clean, maintainable, and efficient code'
    ],
    technologies: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL']
  },
  {
    id: 'inspure',
    title: 'FULL STACK SOFTWARE DEVELOPER (REMOTE)',
    company: 'INSPURE COMMUNICATION TECHNOLOGY COMPANY',
    location: 'Addis Ababa, Ethiopia',
    period: '26/06/2023 - 25/06/2024',
    email: 'dong.lei@stellargeneraltrading.com',
    responsibilities: [
      'Developed and maintained web applications',
      'Implemented responsive designs',
      'Integrated third-party APIs',
      'Optimized application performance'
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'TypeScript']
  },
  {
    id: 'etech',
    title: 'FULL-STACK SOFTWARE DEVELOPER',
    company: 'ETECH SHARE COMPANY',
    location: 'Addis Ababa, Ethiopia',
    period: '01/10/2022 - 25/06/2023',
    email: 'info@etechsc.com',
    website: 'https://etechsc.com/',
    responsibilities: [
      'Developed enterprise-level applications',
      'Implemented business logic and workflows',
      'Created and maintained databases',
      'Collaborated with stakeholders'
    ],
    technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker']
  },
  {
    id: 'zuriyanet',
    title: 'FULL-STACK DEVELOPER',
    company: 'ZURIYANET IT SOLUTION',
    location: 'ADDIS ABABA, Ethiopia',
    period: '17/09/2021 - 09/08/2022',
    responsibilities: [
      'Developed web applications',
      'Implemented user interfaces',
      'Created RESTful APIs',
      'Maintained existing applications'
    ],
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript']
  }
]; 