import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Linkedin, Twitter } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import { teamMembers, TeamMember } from '../data/team';

const About = () => {
  useEffect(() => {
    // Update page title
    document.title = 'About Us | Elite8 Digital';
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      {/* Page Header */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-neutral-900 text-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="mb-6">About Us</h1>
            <p className="text-xl text-neutral-300 max-w-xl">
              We're a team of creative professionals passionate about design and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <Section>
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle 
                subtitle="Our Story"
                title="A decade of creative excellence"
              />
              
              <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
                Founded in 2010, Elite8 Digital began as a small design studio with a passion for creating meaningful digital experiences. Over the years, we've grown into a full-service creative agency, working with clients across industries and around the world.
              </p>
              
              <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
                Our mission is simple: to help brands connect with their audiences through thoughtful design and strategic thinking. We believe that great design is more than just aesthetics—it's about solving problems and creating memorable experiences.
              </p>
              
              <p className="text-lg text-neutral-600 dark:text-neutral-300">
                Today, our team of designers, developers, strategists, and project managers collaborate to deliver exceptional results for our clients. We're proud of our work and the relationships we've built along the way.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Our team" 
                className="rounded-xl"
              />
              
              <div className="absolute -bottom-8 -left-8 bg-primary text-white p-6 rounded-xl max-w-[200px]">
                <p className="font-semibold">13+ years of creating digital excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section className="bg-neutral-50 dark:bg-neutral-800">
        <div className="container-custom">
          <SectionTitle 
            subtitle="Our Values"
            title="The principles that guide our work"
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Innovation',
                description: 'We embrace new ideas and technologies to stay ahead of the curve and deliver cutting-edge solutions.',
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 3V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3 12H21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 3L21 12L12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 3L3 12L12 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: 'Collaboration',
                description: 'We believe that the best work comes from open communication and teamwork with our clients and each other.',
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17 8C18.6569 8 20 6.65685 20 5C20 3.34315 18.6569 2 17 2C15.3431 2 14 3.34315 14 5C14 6.65685 15.3431 8 17 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 22C8.65685 22 10 20.6569 10 19C10 17.3431 8.65685 16 7 16C5.34315 16 4 17.3431 4 19C4 20.6569 5.34315 22 7 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 22C18.6569 22 20 20.6569 20 19C20 17.3431 18.6569 16 17 16C15.3431 16 14 17.3431 14 19C14 20.6569 15.3431 22 17 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 8C8.65685 8 10 6.65685 10 5C10 3.34315 8.65685 2 7 2C5.34315 2 4 3.34315 4 5C4 6.65685 5.34315 8 7 8Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M7 16V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M17 16V8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 19H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: 'Excellence',
                description: 'We strive for excellence in everything we do, from the smallest details to the biggest ideas.',
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2V6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 18V22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.93 4.93L7.76 7.76" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.24 16.24L19.07 19.07" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M2 12H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18 12H22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M4.93 19.07L7.76 16.24" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16.24 7.76L19.07 4.93" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: 'Integrity',
                description: 'We operate with honesty and transparency in all our relationships and business dealings.',
                icon: (
                  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.5 9.5L9.5 14.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.5 14.5L9.5 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl bg-white dark:bg-neutral-700 shadow-sm"
              >
                <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section>
        <div className="container-custom">
          <SectionTitle 
            subtitle="Our Team"
            title="Meet the talented people behind our success"
            centered
          />
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {teamMembers.map((member, index) => (
              <TeamMemberCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-neutral-900 text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-white mb-4">Want to join our team?</h2>
              <p className="text-neutral-300">
                We're always looking for talented people to join our team. Check out our current openings or send us your portfolio.
              </p>
            </div>
            <Link 
              to="/contact" 
              className="btn bg-white text-primary hover:bg-white/90 whitespace-nowrap"
            >
              View Positions
            </Link>
          </div>
        </div>
      </Section>
    </main>
  );
};

// Team Member Card Component
const TeamMemberCard = ({ member, index }: { member: TeamMember, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="relative overflow-hidden rounded-xl aspect-[3/4] mb-6">
        <img 
          src={member.image} 
          alt={member.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Social links overlay */}
        <div className="absolute inset-0 bg-primary/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="flex gap-4">
            {member.socials.linkedin && (
              <a 
                href={member.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            )}
            {member.socials.twitter && (
              <a 
                href={member.socials.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
              >
                <Twitter size={20} />
              </a>
            )}
            {member.socials.instagram && (
              <a 
                href={member.socials.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-full bg-white/20 text-white hover:bg-white/40 transition-colors"
              >
                <Instagram size={20} />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
      <p className="text-primary mb-3">{member.role}</p>
      <p className="text-neutral-600 dark:text-neutral-400">{member.bio}</p>
    </motion.div>
  );
};

export default About;