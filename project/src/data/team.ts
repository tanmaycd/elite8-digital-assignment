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
    id: 'alex-rivera',
    name: 'Alex Rivera',
    role: 'Creative Director',
    bio: 'Alex has over 15 years of experience in design leadership, having worked with brands like Nike, Apple, and Sony. He leads our creative vision and ensures every project meets the highest standards of innovation and quality.',
    image: 'https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socials: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/',
      instagram: 'https://instagram.com/'
    }
  },
  {
    id: 'sarah-kim',
    name: 'Sarah Kim',
    role: 'UX Director',
    bio: 'Sarah specializes in creating user-centered digital experiences that balance business goals with user needs. Her background in psychology and human-computer interaction informs her thoughtful approach to every design challenge.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socials: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  },
  {
    id: 'marcus-johnson',
    name: 'Marcus Johnson',
    role: 'Technical Director',
    bio: 'Marcus bridges the gap between design and development, ensuring our creative visions are technically feasible and flawlessly executed. He has expertise in front-end technologies and a passion for animation and interactive experiences.',
    image: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socials: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/',
      instagram: 'https://instagram.com/'
    }
  },
  {
    id: 'elena-rodriguez',
    name: 'Elena Rodriguez',
    role: 'Brand Strategist',
    bio: 'Elena helps our clients define their brand positioning and messaging. With a background in marketing and communications, she excels at identifying unique brand opportunities and crafting compelling brand narratives.',
    image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socials: {
      linkedin: 'https://linkedin.com/',
      instagram: 'https://instagram.com/'
    }
  },
  {
    id: 'jason-patel',
    name: 'Jason Patel',
    role: 'Motion Designer',
    bio: 'Jason specializes in bringing designs to life through animation and motion. His work spans UI animation, explainer videos, and immersive digital experiences that create memorable brand moments.',
    image: 'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socials: {
      linkedin: 'https://linkedin.com/',
      instagram: 'https://instagram.com/'
    }
  },
  {
    id: 'maya-wilson',
    name: 'Maya Wilson',
    role: 'Project Manager',
    bio: 'Maya ensures our projects run smoothly from kickoff to delivery. Her organizational skills and attention to detail keep our team on track while her client communication skills ensure transparency throughout the process.',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    socials: {
      linkedin: 'https://linkedin.com/',
      twitter: 'https://twitter.com/'
    }
  }
];