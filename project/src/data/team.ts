export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  socials: {
    linkedin?: string;
    twitter?: string;
    instagram?: string;
  };
}

export const teamMembers: TeamMember[] = [
  {
    id: 'ravi-sharma',
    name: 'Ravi Sharma',
    role: 'Product Manager',
    bio: 'Ravi brings over a decade of experience in product development and agile methodologies. He focuses on aligning product vision with customer needs and business goals.',
    image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socials: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'nina-verma',
    name: 'Nina Verma',
    role: 'Lead Designer',
    bio: 'Nina crafts intuitive and elegant design systems. With a background in fine arts and digital media, she ensures a seamless visual experience across platforms.',
    image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socials: {
      linkedin: 'https://linkedin.com/',
      instagram: 'https://instagram.com/'
    }
  },
  {
    id: 'aditya-kapoor',
    name: 'Aditya Kapoor',
    role: 'Frontend Engineer',
    bio: 'Aditya is passionate about building responsive, high-performance web applications. He specializes in React, TypeScript, and modern web architecture.',
    image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socials: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'meera-iyer',
    name: 'Meera Iyer',
    role: 'Content Strategist',
    bio: 'Meera crafts content that resonates with audiences. Her expertise lies in storytelling, SEO, and building cohesive brand narratives across channels.',
    image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socials: {
      linkedin: 'https://linkedin.com/',
      instagram: 'https://instagram.com/'
    }
  },
  {
    id: 'vikram-das',
    name: 'Vikram Das',
    role: 'DevOps Engineer',
    bio: 'Vikram ensures our infrastructure is scalable, secure, and automated. He has hands-on experience with CI/CD pipelines, cloud platforms, and container orchestration.',
    image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socials: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'isha-khanna',
    name: 'Isha Khanna',
    role: 'QA Analyst',
    bio: 'Isha is meticulous in ensuring software quality through rigorous testing practices. She is skilled in both automated and manual testing across different environments.',
    image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socials: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  }
];

