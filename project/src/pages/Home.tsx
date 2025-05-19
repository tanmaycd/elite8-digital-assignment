import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import { getFeaturedProjects, Project } from '../data/projects';

const Home = () => {
  useEffect(() => {
    // Update page title
    document.title = 'XYZ Digital - Creative Agency';
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const featuredProjects = getFeaturedProjects();
  
  return (
    <main>
      {/* Hero Section */}
      <section className="min-h-screen pt-32 pb-16 md:pt-40 md:pb-20 relative overflow-hidden">
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.19, 1, 0.22, 1] }}
            className="max-w-4xl mx-auto text-center"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              We create <span className="text-primary">powerful</span> digital experiences
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-xl md:text-2xl text-neutral-600 dark:text-neutral-300 mb-12 max-w-2xl mx-auto"
            >
              XYZ Digital is a creative agency that combines strategy, design, and technology to build brands that stand out in the digital landscape.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row justify-center items-center gap-4"
            >
              <Link to="/work" className="btn btn-primary flex items-center gap-2">
                <span>See our work</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get in touch
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div 
            className="absolute top-1/4 right-[15%] w-64 h-64 rounded-full bg-primary/20 blur-3xl"
            animate={{ 
              x: [0, 30, 0],
              y: [0, -30, 0],
            }}
            transition={{ 
              duration: 8, 
              repeat: Infinity,
              ease: "easeInOut" 
            }}
          />
          <motion.div 
            className="absolute bottom-1/4 left-[10%] w-72 h-72 rounded-full bg-secondary/20 blur-3xl"
            animate={{ 
              x: [0, -20, 0],
              y: [0, 40, 0],
            }}
            transition={{ 
              duration: 10, 
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </div>
      </section>

      {/* About Section */}
      <Section className="bg-neutral-50 dark:bg-neutral-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <SectionTitle 
                subtitle="About us"
                title="We transform ideas into exceptional digital experiences"
              />
              
              <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-8">
                XYZ Digital is a creative agency that specializes in branding, web design, UI/UX, and digital marketing. With a team of experienced designers, developers, and strategists, we create compelling digital experiences that help our clients succeed in today's competitive landscape.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-10">
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-primary mb-2">15+</span>
                  <span className="text-neutral-600 dark:text-neutral-300">Years Experience</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-primary mb-2">200+</span>
                  <span className="text-neutral-600 dark:text-neutral-300">Projects Completed</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-4xl font-bold text-primary mb-2">50+</span>
                  <span className="text-neutral-600 dark:text-neutral-300">Happy Clients</span>
                </div>
              </div>
              
              <Link to="/about" className="link-underline inline-flex items-center text-lg font-medium">
                <span>Learn more about us</span>
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
            
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="rounded-xl overflow-hidden aspect-[4/3]"
              >
                <img 
                  src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Our team collaborating" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="absolute -bottom-10 -right-10 bg-white dark:bg-neutral-900 p-6 rounded-xl shadow-xl max-w-[200px]"
              >
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary mb-4">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="font-medium">Creating transformative digital experiences since 2010</p>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* Services Section */}
      <Section>
        <div className="container-custom">
          <SectionTitle 
            subtitle="Our Services"
            title="We offer a full range of creative services"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Brand Strategy & Identity',
                description: 'We help you define your brand\'s positioning, messaging, and visual identity to stand out in your market.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 9.5V14.5C2 16 3 17 4.5 17H19.5C21 17 22 16 22 14.5V9.5C22 8 21 7 19.5 7H4.5C3 7 2 8 2 9.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 12C12.8284 12 13.5 11.3284 13.5 10.5C13.5 9.67157 12.8284 9 12 9C11.1716 9 10.5 9.67157 10.5 10.5C10.5 11.3284 11.1716 12 12 12Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M18.5 9.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5.5 9.5V14.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: 'Web Design & Development',
                description: 'We create stunning, responsive websites that deliver exceptional user experiences across all devices.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 9C2 7.89543 2.89543 7 4 7H20C21.1046 7 22 7.89543 22 9V17C22 18.1046 21.1046 19 20 19H4C2.89543 19 2 18.1046 2 17V9Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8 12L6 14L8 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 12L18 14L16 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14 10L10 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: 'UI/UX Design',
                description: 'We design intuitive, engaging user interfaces and experiences that keep users coming back for more.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.02 5.97C2.75 7.65 2 9.74 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M5 12C5 15.87 8.13 19 12 19C15.87 19 19 15.87 19 12C19 8.13 15.87 5 12 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 16C14.21 16 16 14.21 16 12C16 9.79 14.21 8 12 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: 'Digital Marketing',
                description: 'We develop comprehensive digital marketing strategies to increase your brand visibility and drive conversions.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 19C3.9 19 3 18.1 3 17V7C3 5.9 3.9 5 5 5H19C20.1 5 21 5.9 21 7V17C21 18.1 20.1 19 19 19H5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M12 9V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9 12H15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: 'Motion Design & Animation',
                description: 'We bring brands to life through captivating motion graphics, animations, and video content.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 2H15C20 2 22 4 22 9V15C22 20 20 22 15 22H9C4 22 2 20 2 15V9C2 4 4 2 9 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M9.1 12L7.12 9.86C6.5 9.21 6.51 8.2 7.14 7.57L10.99 3.96C11.41 3.56 12.09 3.81 12.16 4.38L12.99 11.3C13.05 11.74 12.7 12.15 12.25 12.17L9.93 12.25C9.56 12.27 9.24 12.18 9.1 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M14.9 12L16.88 14.14C17.5 14.79 17.49 15.8 16.86 16.43L13.01 20.04C12.59 20.44 11.91 20.19 11.84 19.62L11.01 12.7C10.95 12.26 11.3 11.85 11.75 11.83L14.07 11.75C14.44 11.73 14.76 11.82 14.9 12Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              },
              {
                title: 'Content Strategy & Creation',
                description: 'We develop engaging content that tells your brand story and resonates with your target audience.',
                icon: (
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M16 2V5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M3.5 9.09H20.5" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z" stroke="currentColor" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.6947 13.7H15.7037" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M15.6947 16.7H15.7037" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.9955 13.7H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M11.9955 16.7H12.0045" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.29431 13.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M8.29431 16.7H8.30329" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                )
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-neutral-800 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow group"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <p className="text-neutral-600 dark:text-neutral-400 mb-6">{service.description}</p>
                <Link to="/contact" className="flex items-center text-primary font-medium group-hover:underline">
                  <span>Learn more</span>
                  <ArrowRight size={16} className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Featured Projects Section */}
      <Section className="bg-neutral-100 dark:bg-neutral-800/50">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <SectionTitle 
              subtitle="Featured Work"
              title="Recent projects we're proud of"
            />
            <Link to="/work" className="btn btn-outline mt-6 md:mt-0">
              View all projects
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project: Project, index: number) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-primary text-white">
        <div className="container-custom">
          <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-white mb-6"
            >
              Ready to elevate your brand with exceptional digital experiences?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-white/80 text-xl mb-10 max-w-2xl"
            >
              Let's discuss how we can help you achieve your business goals through strategic design and technology solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Link 
                to="/contact" 
                className="btn bg-white text-primary hover:bg-white/90 transition-colors"
              >
                Get in touch
              </Link>
            </motion.div>
          </div>
        </div>
      </Section>
    </main>
  );
};

// Project Card Component
const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/work/${project.id}`} className="block relative overflow-hidden rounded-xl aspect-[4/3]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/70 opacity-80 z-10" />
        
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        <div className="absolute bottom-0 left-0 w-full p-6 z-20">
          <span className="inline-block px-3 py-1 text-xs rounded-full bg-white/20 backdrop-blur-sm text-white mb-3">
            {project.category}
          </span>
          <h3 className="text-xl md:text-2xl font-medium text-white mb-2">{project.title}</h3>
          <div className="flex items-center text-white/80">
            <span className="mr-2">View project</span>
            <ArrowUpRight size={16} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Home;