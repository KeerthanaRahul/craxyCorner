import React from 'react';
import { motion } from 'framer-motion';
import { Coffee, Users, Award } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Coffee className="h-10 w-10 text-secondary-500" />,
      title: ' Mood-Based Menu Experience',
      description: 'We curate your meals based on how youre feeling — happy, stressed, excited, or even lazy — because food should feel just right.'
    },
    {
      icon: <Coffee className="h-10 w-10 text-secondary-500" />,
      title: 'Quality Ingredients',
      description: 'Our ingredients are sustainably sourced, and each dish is made with care by passionate chefs who believe in quality without compromise.'
    },
    {
      icon: <Users className="h-10 w-10 text-secondary-500" />,
      title: 'Community Focus',
      description: 'Whether youre here for work, a quick bite, or conversation, our café is designed to be a welcoming, inclusive space.'
    },
    {
      icon: <Award className="h-10 w-10 text-secondary-500" />,
      title: 'Award Winning',
      description: 'From tech-driven kiosks to mood-responsive menus, we’re proud to be recognized as pioneers in redefining the café experience.'
    }
  ];

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/1813466/pexels-photo-1813466.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
                alt="Cafe interior" 
                className="rounded-lg shadow-medium w-full h-auto"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-medium max-w-xs hidden md:block">
                <p className="font-serif text-primary-800 text-lg italic">
                  "Every mood deserves a meal. That’s the idea we built this café on"
                </p>
                <p className="text-right text-sm text-accent-600 mt-2"> Founder</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Story</h2>
            <p className="mb-6 text-lg">
              At MopdSync Cafe, it all began with a simple yet bold idea — to craft a space where great food, personalized experiences, and a sense of community come together seamlessly.
            </p>
            <p className="mb-10 text-accent-600">
              Since our launch in 2010, we’ve been committed to delivering more than just meals. We believe food should match your mood, and every visit should feel personal. From handpicked ingredients to our intuitive self-ordering kiosks, everything is designed to make your time with us enjoyable, effortless, and uniquely yours.


            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <div key={index} className="flex">
                  <div className="flex-shrink-0 mr-4">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-serif text-xl font-bold text-primary-800 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-accent-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;