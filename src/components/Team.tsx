import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Linkedin, Mail } from 'lucide-react';

export function Team() {
  const team = [
    {
      name: 'Praveen Poonolly',
      title: 'CEO & Founder',
      bio: 'Visionary leader with extensive experience in actuarial services and strategic business development',
      image: 'https://images.unsplash.com/photo-1538978939284-4ecb3fc4ad5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMGV4ZWN1dGl2ZSUyMGluZGlhbnxlbnwxfHx8fDE3NzAxODc0MzR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Deepika Godha',
      title: 'Head of Marketing',
      bio: 'Strategic marketing expert driving brand growth and digital transformation initiatives',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      name: 'Web Designer',
      title: 'India Office',
      bio: 'Creative designer crafting beautiful and intuitive digital experiences',
      image: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    },
    {
      name: 'Social Media Executive',
      title: 'India Office',
      bio: 'Dynamic social media strategist creating engaging content and managing brand presence',
      image: 'https://images.unsplash.com/photo-1708447134640-2b57ad0dd846?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hbmFnZXIlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcwMTg3NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Senior Analyst',
      title: 'India Office',
      bio: 'Data-driven analyst providing insights and supporting actuarial modelling initiatives',
      image: 'https://images.unsplash.com/photo-1622705538993-6070f10a3b26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwYW5hbHlzdCUyMHByb2Zlc3Npb25hbCUyMGluZGlhbnxlbnwxfHx8fDE3NzAxODc2Njd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section id="team" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Our Team
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Meet the experts behind our success
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {team.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-72 overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {member.name}
                </h3>
                <p className="text-sm font-medium text-blue-600 mb-3">
                  {member.title}
                </p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  {member.bio}
                </p>

                {/* Social Links */}
                <div className="flex items-center space-x-3 pt-4 border-t border-gray-100">
                  <button className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white transition-colors duration-300">
                    <Linkedin className="w-4 h-4" />
                  </button>
                  <button className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-100 hover:bg-blue-600 text-gray-600 hover:text-white transition-colors duration-300">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
