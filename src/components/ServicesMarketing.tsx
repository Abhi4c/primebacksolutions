import { motion } from 'motion/react';
import { 
  Palette, 
  FileText, 
  Share2, 
  Mail, 
  Users, 
  Search, 
  Target, 
  Camera 
} from 'lucide-react';

export function ServicesMarketing() {
  const services = [
    {
      icon: Palette,
      title: 'Design Services',
      description: 'Creative visual design solutions that capture your brand essence and engage your audience',
    },
    {
      icon: FileText,
      title: 'Content Creation',
      description: 'Compelling content that tells your story and resonates with your target audience',
    },
    {
      icon: Share2,
      title: 'Social Media Strategy, Design, Execution & Ads',
      description: 'End-to-end social media management from strategy development to paid advertising campaigns',
    },
    {
      icon: Mail,
      title: 'Email Marketing',
      description: 'Targeted email campaigns that drive engagement and convert leads into customers',
    },
    {
      icon: Users,
      title: 'Influencer Marketing',
      description: 'Strategic partnerships with influencers to amplify your brand reach and credibility',
    },
    {
      icon: Search,
      title: 'Search Engine Optimization',
      description: 'Optimize your online presence to rank higher and attract organic traffic',
    },
    {
      icon: Target,
      title: 'Search Engine Marketing / Google Ads',
      description: 'Data-driven paid search campaigns that deliver measurable ROI',
    },
    {
      icon: Camera,
      title: 'Shoot Production',
      description: 'Professional photo and video production with internal & external photographers',
    },
  ];

  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Marketing & Media Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions to elevate your brand and drive growth
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-white p-6 rounded-2xl shadow-sm transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl mb-4">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
