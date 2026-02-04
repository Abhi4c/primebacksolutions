import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Excellence in Strategic Solutions
          </h2>
          <div className="space-y-6 text-lg text-gray-600">
            <p>
              We work across the following services:
            </p>
            <div className="flex flex-wrap justify-center gap-4 my-8">
              <div className="flex items-center space-x-2 bg-blue-50 px-6 py-3 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-blue-600" />
                <span className="font-medium text-gray-900">Actuarial Support Services</span>
              </div>
              <div className="flex items-center space-x-2 bg-indigo-50 px-6 py-3 rounded-full">
                <CheckCircle2 className="w-5 h-5 text-indigo-600" />
                <span className="font-medium text-gray-900">Digital Marketing & Media Services</span>
              </div>
            </div>
            <p className="text-xl italic text-gray-700 border-l-4 border-blue-600 pl-6 py-4 bg-gray-50 rounded-r-lg">
              "With our excellence in strategic design & planning, I firmly believe that we should be able to achieve your goals."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
