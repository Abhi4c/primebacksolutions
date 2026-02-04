import { motion } from 'motion/react';
import { Sparkles, BarChart3, FileText } from 'lucide-react';

export function SocialMedia() {
  const deliverables = [
    {
      icon: Sparkles,
      title: 'Social Media Content Creation, Design, Management',
      description: 'End-to-end content creation and design with strategic management across all platforms',
    },
    {
      icon: BarChart3,
      title: 'Social Media Monitoring and Analytics',
      description: 'Comprehensive tracking, analysis, and reporting to measure campaign performance',
    },
  ];

  return (
    <section id="social-media" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Social Media Deliverables
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive social media solutions tailored to your brand
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {deliverables.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200"
                >
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Proposal Note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-center shadow-xl"
          >
            <div className="flex items-center justify-center w-14 h-14 bg-white/20 backdrop-blur-sm rounded-xl mx-auto mb-4">
              <FileText className="w-7 h-7 text-white" />
            </div>
            <p className="text-white text-lg font-medium">
              PFA a proposal outlining the commercials for the deliverables discussed.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
