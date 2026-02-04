import { motion } from 'motion/react';
import { 
  Lightbulb, 
  FileEdit, 
  Rocket, 
  BarChart, 
  Calculator,
  ArrowRight
} from 'lucide-react';

export function Work() {
  const deliverables = [
    {
      icon: Lightbulb,
      title: 'Strategy + Planning',
      description: 'Comprehensive strategic planning and roadmap development',
    },
    {
      icon: FileEdit,
      title: 'Design + Content',
      description: 'Creative design and compelling content creation',
    },
    {
      icon: Rocket,
      title: 'Execution + Ads',
      description: 'Campaign execution and paid advertising management',
    },
    {
      icon: BarChart,
      title: 'Reporting + Analytics',
      description: 'Data-driven insights and performance reporting',
    },
    {
      icon: Calculator,
      title: 'Actuarial Modelling + Compliance Support',
      description: 'Expert actuarial analysis and regulatory compliance',
    },
  ];

  const process = [
    { label: 'Discover', color: 'from-blue-500 to-blue-600' },
    { label: 'Plan', color: 'from-indigo-500 to-indigo-600' },
    { label: 'Create', color: 'from-purple-500 to-purple-600' },
    { label: 'Execute', color: 'from-pink-500 to-pink-600' },
    { label: 'Measure', color: 'from-orange-500 to-orange-600' },
    { label: 'Optimise', color: 'from-blue-600 to-indigo-600' },
  ];

  return (
    <section id="work" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Deliverables
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            End-to-end solutions delivered with precision and excellence
          </p>
        </motion.div>

        {/* Deliverables Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-20">
          {deliverables.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-gradient-to-br from-gray-50 to-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 text-center"
              >
                <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Process
          </h3>
          
          {/* Desktop Timeline */}
          <div className="hidden md:flex items-center justify-between">
            {process.map((step, index) => (
              <div key={step.label} className="flex items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg mb-3`}>
                    <span className="text-white font-bold text-lg">{index + 1}</span>
                  </div>
                  <span className="text-sm font-semibold text-gray-900">{step.label}</span>
                </motion.div>
                {index < process.length - 1 && (
                  <ArrowRight className="w-6 h-6 text-gray-400 mx-2" />
                )}
              </div>
            ))}
          </div>

          {/* Mobile Timeline */}
          <div className="md:hidden space-y-4">
            {process.map((step, index) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-center space-x-4"
              >
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <span className="text-white font-bold">{index + 1}</span>
                </div>
                <span className="text-base font-semibold text-gray-900">{step.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
