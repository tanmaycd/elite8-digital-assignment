import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Github, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-neutral-950 text-white py-16">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="text-2xl font-bold inline-block">
              <span className="text-primary">XYZ</span>
              <span className="text-white">_</span>
              <span className="text-white">Digital</span>
            </Link>
            <p className="text-neutral-400 leading-relaxed">
              We create meaningful digital experiences that people love and businesses need.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="#" className="hover:text-primary transition-colors" aria-label="GitHub">
                <Github size={20} />
              </a>
            </div>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="text-lg font-medium mb-6">Navigation</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="text-neutral-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work" className="text-neutral-400 hover:text-primary transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-neutral-400 hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-neutral-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 className="text-lg font-medium mb-6">Contact</h4>
            <ul className="space-y-4 text-neutral-400">
              <li>xyz8digital.com</li>
              <li>+1 (555) 123-4567</li>
              <li>
                123 Digital Avenue
                <br />
                San Francisco, CA 94107
              </li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="text-lg font-medium mb-6">Newsletter</h4>
            <p className="text-neutral-400 mb-4">
              Subscribe to our newsletter to receive updates and creative insights.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Your email"
                className="bg-neutral-800 text-white px-4 py-2 rounded-l-md focus:outline-none w-full"
              />
              <button
                type="submit"
                className="bg-primary hover:bg-primary/90 px-4 py-2 rounded-r-md transition-colors"
                aria-label="Subscribe"
              >
                <ArrowUpRight size={20} />
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-neutral-800 flex flex-col md:flex-row justify-between items-center text-neutral-400 text-sm">
          <p>© {currentYear} XYZ Digital. All rights reserved.</p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Cookies Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;