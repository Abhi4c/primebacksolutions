import { motion } from 'motion/react';

export function Clients() {
  const clients = [
    { name: 'Diamondere', logo: 'D', image: '/diamondere-logo-v2.svg' },
    { name: 'Svj', logo: 'S', image: '/svjlogonew.png' },
    { name: 'navaara', logo: 'N', image: '/navaara.png' },
    { name: 'Wimbledon Actuarial Consulting', logo: 'WAC' },
  ];

  return (
    <section id="clients" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Trusted By
          </h2>
          <p className="text-xl text-gray-600">
            Proud to partner with industry leaders
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {clients.map((client, index) => (
            <motion.div
              key={client.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200 flex flex-col items-center justify-center"
            >
              {client.image ? (
                <div className={`flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${client.name === 'Svj' ? 'w-56 h-28' : 'w-32 h-20'}`}>
                  <img 
                    src={client.image} 
                    alt={`${client.name} logo`}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>
              ) : (
                <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-3xl font-bold bg-gradient-to-br from-gray-800 to-gray-950 bg-clip-text text-transparent">{client.logo}</span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
