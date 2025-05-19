export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  fullDescription: string;
  image: string;
  images: string[];
  client: string;
  year: number;
  services: string[];
  url?: string;
  featured?: boolean;
}

export const projects: Project[] = [
  {
    id: 'cosmic-branding',
    title: 'Cosmic Brand Identity',
    category: 'Branding',
    description: 'A complete brand identity design for a modern tech startup.',
    fullDescription: 'Cosmic is a revolutionary AI-powered analytics platform that needed a brand identity as innovative as their technology. We developed a comprehensive brand system including logo, typography, color palette, and application guidelines. The identity balances technological precision with human creativity, perfectly positioning them in the competitive tech market.',
    image: 'https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/6476260/pexels-photo-6476260.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6476197/pexels-photo-6476197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6476254/pexels-photo-6476254.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    client: 'Cosmic AI',
    year: 2024,
    services: ['Brand Strategy', 'Logo Design', 'Visual Identity', 'Brand Guidelines'],
    url: 'https://cosmicai.com',
    featured: true
  },
  {
    id: 'bloom-interface',
    title: 'Bloom Interface Design',
    category: 'UI/UX',
    description: 'User interface and experience design for a wellness application.',
    fullDescription: 'Bloom is a wellness and meditation app that required an interface as calming and intuitive as the experience it offers. We created a user-centered design with careful attention to accessibility, visual hierarchy, and microinteractions. The result is an app experience that feels natural and effortless, encouraging regular engagement with the platform.',
    image: 'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/5082579/pexels-photo-5082579.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5082588/pexels-photo-5082588.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5082581/pexels-photo-5082581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    client: 'Bloom Wellness',
    year: 2023,
    services: ['UX Research', 'UI Design', 'Interaction Design', 'Prototyping'],
    featured: true
  },
  {
    id: 'horizon-website',
    title: 'Horizon Photography',
    category: 'Web Design',
    description: 'A stunning portfolio website for a photography collective.',
    fullDescription: 'Horizon is a photography collective that showcases breathtaking landscape photography from around the world. We designed and developed a portfolio website that puts the imagery front and center, with thoughtful interactions that enhance rather than distract from the visual experience. The site features a custom image gallery, smooth transitions, and responsive design that works beautifully across all devices.',
    image: 'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/3075993/pexels-photo-3075993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4195327/pexels-photo-4195327.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/2834917/pexels-photo-2834917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    client: 'Horizon Collective',
    year: 2023,
    services: ['Web Design', 'Front-end Development', 'CMS Integration', 'SEO Optimization'],
    url: 'https://horizoncollective.com',
    featured: false
  },
  {
    id: 'pulse-motion',
    title: 'Pulse Motion Graphics',
    category: 'Motion',
    description: 'Animated brand elements and explainer videos for a fintech company.',
    fullDescription: 'Pulse, a next-generation payment processing platform, needed to explain their complex technology in an engaging, accessible way. We created a suite of motion graphics including an explainer video, animated logo, UI animations, and social media assets. The motion language we developed communicates speed, security, and simplicity—the core attributes of their brand.',
    image: 'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/325185/pexels-photo-325185.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/3844790/pexels-photo-3844790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    client: 'Pulse Payments',
    year: 2024,
    services: ['Motion Design', 'Animation', 'Storyboarding', 'Sound Design'],
    featured: true
  },
  {
    id: 'verde-packaging',
    title: 'Verde Sustainable Packaging',
    category: 'Packaging',
    description: 'Eco-friendly packaging design for an organic food brand.',
    fullDescription: 'Verde is committed to sustainable, organic food products, and needed packaging that reflected these values. We designed a packaging system using 100% recyclable materials with minimal environmental impact. The design uses earthy colors, natural textures, and clear information hierarchy to communicate the brand\'s commitment to health and sustainability.',
    image: 'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/4065876/pexels-photo-4065876.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5946083/pexels-photo-5946083.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5946073/pexels-photo-5946073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    client: 'Verde Organics',
    year: 2022,
    services: ['Packaging Design', 'Sustainable Materials Research', 'Production Supervision'],
    featured: false
  },
  {
    id: 'metro-campaign',
    title: 'Metro Digital Campaign',
    category: 'Digital',
    description: 'A cross-platform digital marketing campaign for an urban fashion brand.',
    fullDescription: 'Metro needed to launch their new line of urban streetwear with maximum impact across digital channels. We created a comprehensive campaign including social media content, digital ads, landing pages, and email sequences. The campaign featured bold typography, street photography, and interactive elements that resonated with their target audience.',
    image: 'https://images.pexels.com/photos/5119168/pexels-photo-5119168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    images: [
      'https://images.pexels.com/photos/5119168/pexels-photo-5119168.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6626903/pexels-photo-6626903.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ],
    client: 'Metro Streetwear',
    year: 2023,
    services: ['Digital Strategy', 'Content Creation', 'Ad Design', 'Campaign Analytics'],
    featured: false
  }
];

export const categories = [
  { id: 'all', name: 'All' },
  { id: 'branding', name: 'Branding' },
  { id: 'ui-ux', name: 'UI/UX' },
  { id: 'web-design', name: 'Web Design' },
  { id: 'motion', name: 'Motion' },
  { id: 'packaging', name: 'Packaging' },
  { id: 'digital', name: 'Digital' }
];

export const getFeaturedProjects = (): Project[] => {
  return projects.filter(project => project.featured);
};

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};

export const getProjectsByCategory = (category: string): Project[] => {
  if (category === 'all') return projects;
  return projects.filter(project => 
    project.category.toLowerCase() === category.toLowerCase()
  );
};