import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'Services', id: 'services' },
    { name: 'Actuarial', id: 'actuarial' },
    { name: 'Social Media', id: 'social-media' },
    { name: 'Work', id: 'work' },
    { name: 'Team', id: 'team' },
    { name: 'Clients', id: 'clients' },
    { name: 'Contact', id: 'contact' },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg">
                <span className="text-white text-xl font-bold">P</span>
              </div>
              <span className="text-xl font-semibold">Primeback Solutions Pvt Ltd</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
              Your professional partner in actuarial support and digital marketing services. 
              Delivering excellence through strategic design and planning.
            </p>
            <div className="flex items-center space-x-2 text-gray-400">
              <span className="font-medium">Email:</span>
              <a 
                href="mailto:Info@primebacksolutions.com"
                className="hover:text-blue-400 transition-colors"
              >
                Info@primebacksolutions.com
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {navLinks.slice(0, 4).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">More</h3>
            <ul className="space-y-3">
              {navLinks.slice(4).map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-gray-400 hover:text-blue-400 transition-colors text-left"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-gray-700 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © {currentYear} Primeback Solutions Pvt Ltd. All rights reserved.
            </p>
            <div className="flex items-center space-x-4">
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 text-gray-400 hover:text-white transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
