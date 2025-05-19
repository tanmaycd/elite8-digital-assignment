import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Section from '../components/ui/Section';
import SectionTitle from '../components/ui/SectionTitle';
import { categories, getProjectsByCategory, Project } from '../data/projects';

const Work = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Update page title
    document.title = 'Our Work | Elite8 Digital';
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Filter projects when category changes
    setFilteredProjects(getProjectsByCategory(activeCategory));
  }, [activeCategory]);

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

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
            <h1 className="mb-6">Our Work</h1>
            <p className="text-xl text-neutral-300 max-w-xl">
              Explore our portfolio of creative projects spanning branding, web design,
              UI/UX, and digital marketing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Filter */}
      <Section className="pt-12 pb-0">
        <div className="container-custom">
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  activeCategory === category.id
                    ? 'bg-primary text-white'
                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </Section>

      {/* Portfolio Grid */}
      <Section className="pt-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <h3 className="text-2xl mb-4">No projects found</h3>
              <p className="text-neutral-600 dark:text-neutral-400">
                We don't have any projects in this category yet.
              </p>
            </div>
          )}
        </div>
      </Section>

      {/* CTA Section */}
      <Section className="bg-neutral-900 text-white">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <h2 className="text-white mb-4">Ready to start your project?</h2>
              <p className="text-neutral-300">
                Let's discuss how we can help you achieve your business goals through strategic design and technology solutions.
              </p>
            </div>
            <Link 
              to="/contact" 
              className="btn bg-white text-primary hover:bg-white/90 whitespace-nowrap"
            >
              Get in touch
            </Link>
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

export default Work;