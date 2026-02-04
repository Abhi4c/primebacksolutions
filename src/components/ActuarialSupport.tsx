import { motion } from 'motion/react';
import { Shield, Database, FileBarChart, Cpu, Calculator, CheckCircle2 } from 'lucide-react';

export function ActuarialSupport() {
  const services = [
    {
      icon: Shield,
      text: 'GDPR-compliant data processing and management',
    },
    {
      icon: Calculator,
      text: 'Actuarial modelling and analysis',
    },
    {
      icon: FileBarChart,
      text: 'Reporting and compliance support',
    },
    {
      icon: Cpu,
      text: 'Process automation assistance',
    },
    {
      icon: Database,
      text: 'Specialized actuarial functions (e.g., pricing, reserving)',
    },
    {
      icon: CheckCircle2,
      text: 'Other mutually agreed actuarial tasks',
    },
  ];

  return (
    <section id="actuarial" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Actuarial Support Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            As per Statement of Work dated 1 October 2025
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 sm:p-12 border border-blue-100">
            <p className="text-lg text-gray-700 mb-8">
              Actuarial support services as per Statement of Work dated 1 October 2025, including:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
                  >
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-lg">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium leading-relaxed">
                        {service.text}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
