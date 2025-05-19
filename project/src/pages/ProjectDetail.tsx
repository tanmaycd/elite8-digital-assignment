import { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Globe } from 'lucide-react';
import Section from '../components/ui/Section';
import { getProjectById, Project, projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<Project | null>(null);
  const [nextProject, setNextProject] = useState<Project | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      const currentProject = getProjectById(id);
      if (currentProject) {
        setProject(currentProject);
        document.title = `${currentProject.title} | XYZ_Digital`;

        // Find next project
        const currentIndex = projects.findIndex(p => p.id === id);
        const nextIndex = (currentIndex + 1) % projects.length;
        setNextProject(projects[nextIndex]);
      } else {
        // Redirect to Work page if project not found
        navigate('/work');
      }
    }
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, [id, navigate]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <main>
      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-20 bg-neutral-900 text-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-4 mb-6"
            >
              <Link
                to="/work"
                className="inline-flex items-center text-neutral-400 hover:text-white transition-colors"
              >
                <ArrowLeft size={16} className="mr-2" />
                <span>Back to All Projects</span>
              </Link>
              <span className="text-neutral-600">•</span>
              <span className="text-primary">{project.category}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              {project.title}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-neutral-300 mb-8"
            >
              {project.fullDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-4 text-sm"
            >
              <div className="px-4 py-2 bg-white/10 rounded-full">
                <span className="text-neutral-400">Client:</span>{' '}
                <span className="text-white">{project.client}</span>
              </div>

              <div className="px-4 py-2 bg-white/10 rounded-full">
                <span className="text-neutral-400">Year:</span>{' '}
                <span className="text-white">{project.year}</span>
              </div>

              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-primary rounded-full text-white hover:bg-primary/90 transition-colors"
                >
                  <Globe size={14} className="mr-2" />
                  <span>Visit Website</span>
                </a>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Images */}
      <Section>
        <div className="container-custom">
          <div className="grid grid-cols-1 gap-8">
            {project.images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="overflow-hidden rounded-xl"
              >
                <img
                  src={image}
                  alt={`${project.title} - Image ${index + 1}`}
                  className="w-full h-auto"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* Project Details */}
      <Section className="bg-neutral-50 dark:bg-neutral-800">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-300 mb-6">
                {project.fullDescription}
              </p>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4">Project Scope</h3>
                <ul className="list-disc list-inside space-y-2 text-neutral-600 dark:text-neutral-300">
                  {project.services.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div>
              <div className="bg-white dark:bg-neutral-700 rounded-xl p-8 shadow-sm">
                <h3 className="text-xl font-bold mb-6">Project Details</h3>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-2">CLIENT</h4>
                    <p className="text-lg">{project.client}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-2">TIMELINE</h4>
                    <p className="text-lg">{project.year}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-2">SERVICES</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, index) => (
                        <span 
                          key={index}
                          className="inline-block px-3 py-1 bg-neutral-100 dark:bg-neutral-600 rounded-full text-sm"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {project.url && (
                    <div>
                      <h4 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-2">WEBSITE</h4>
                      <a 
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline inline-flex items-center"
                      >
                        <span>Visit Website</span>
                        <ArrowRight size={16} className="ml-2" />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Next Project */}
      {nextProject && (
        <Section className="bg-neutral-900 text-white">
          <div className="container-custom">
            <div className="text-center">
              <span className="text-neutral-400 uppercase tracking-wider text-sm">Next Project</span>
              <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-8">{nextProject.title}</h2>
              <Link 
                to={`/work/${nextProject.id}`}
                className="btn bg-white text-primary hover:bg-white/90 inline-flex items-center"
              >
                <span>View Project</span>
                <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </div>
        </Section>
      )}
    </main>
  );
};

export default ProjectDetail;