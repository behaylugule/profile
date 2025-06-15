export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  image?: string;
  github?: string;
  demo?: string;
  features?: string[];
  challenges?: string[];
  period: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: 'nisir-erp',
    title: 'Nisir ERP Solution',
    description: 'Human Resource Management Module',
    period: '01/07/2024 - CURRENT',
    technologies: ['Java', 'Spring Boot', 'React', 'TypeScript', 'PostgreSQL'],
    features: [
      'Employee management',
      'Leave management',
      'Payroll processing',
      'Performance tracking',
      'Document management'
    ],
    challenges: [
      'Implementing complex business logic',
      'Ensuring data security and privacy',
      'Integrating with existing systems'
    ]
  },
  {
    id: 'ecommerce',
    title: 'e-Commerce Solution',
    description: 'Online shopping platform',
    period: '24/01/2024 - 26/04/2024',
    link: 'https://www.megenagna.com.et/',
    technologies: ['Next.js', 'Node.js', 'MongoDB', 'TypeScript', 'Tailwind CSS'],
    features: [
      'Product catalog',
      'Shopping cart',
      'Payment integration',
      'Order management',
      'User authentication'
    ],
    challenges: [
      'Implementing secure payment processing',
      'Optimizing product search',
      'Managing inventory in real-time'
    ]
  },
  {
    id: 'restaurant-saas',
    title: 'Restaurant SaaS Solution',
    description: 'Software as a Service solution for restaurants',
    period: '16/09/2023 - 14/01/2024',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io'],
    features: [
      'Table management',
      'Order processing',
      'Inventory tracking',
      'Staff management',
      'Analytics dashboard'
    ],
    challenges: [
      'Real-time order updates',
      'Offline functionality',
      'Multi-location support'
    ]
  },
  {
    id: 'hospital-app',
    title: 'Hospital Website and Appointment Application',
    description: 'Healthcare management system',
    period: '26/06/2023 - 09/09/2023',
    link: 'https://www.silkroadhospitaladdis.com/',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Material-UI'],
    features: [
      'Online appointment booking',
      'Doctor profiles',
      'Patient records',
      'Medical history tracking',
      'Emergency contact system'
    ],
    challenges: [
      'HIPAA compliance',
      'Real-time appointment scheduling',
      'Secure patient data handling'
    ]
  },
  {
    id: 'etech-erp',
    title: 'Etech ERP Solution',
    description: 'Enterprise Resource Planning system',
    period: '01/10/2022 - 25/06/2023',
    technologies: ['Java', 'Spring Boot', 'React', 'PostgreSQL', 'Docker'],
    features: [
      'Inventory management',
      'Sales tracking',
      'Financial reporting',
      'Customer relationship management',
      'Supply chain management'
    ],
    challenges: [
      'System integration',
      'Data migration',
      'Performance optimization'
    ]
  }
]; 