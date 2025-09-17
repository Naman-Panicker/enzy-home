import React from 'react';
import { Users, Target, Globe, Heart, Leaf, Beaker, ShieldCheck } from 'lucide-react';

const About = () => {
  const founders = [
    {
      name: 'Trinab Goyal',
      role: 'Co-Founder & CEO',
      bio: 'Environmental scientist with 15+ years in sustainable product development',
      image: 'https://images.pexels.com/photos/3783725/pexels-photo-3783725.jpeg?auto=compress&cs=tinysrgb&w=400'
    },
    {
      name: 'Shlok Mittal',
      role: 'Co-Founder & CTO',
      bio: 'Biochemical engineer specializing in enzyme technology and green chemistry',
      image: 'https://images.pexels.com/photos/3777952/pexels-photo-3777952.jpeg?auto=compress&cs=tinysrgb&w=400'
    }
  ];

  const values = [
    {
      icon: Leaf,
      title: 'Sustainability First',
      description: 'Every product we create prioritizes environmental protection and biodegradability'
    },
    {
      icon: Beaker,
      title: 'Innovation',
      description: 'Cutting-edge enzyme technology that delivers superior cleaning performance'
    },
    {
      icon: ShieldCheck,
      title: 'Safety',
      description: 'Non-toxic formulations that are safe for families, pets, and the planet'
    },
    {
      icon: Heart,
      title: 'Care',
      description: 'Genuine commitment to the well-being of our customers and communities'
    }
  ];

  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Trinab and Shlok established EnzyHome with a vision for enzyme-based cleaning'
    },
    {
      year: '2020',
      title: 'First Product Launch',
      description: 'Launched our revolutionary toilet bowl cleaner with 99.5% biodegradability'
    },
    {
      year: '2021',
      title: 'Product Line Expansion',
      description: 'Expanded to full home cleaning range covering kitchen, laundry, and surfaces'
    },
    {
      year: '2022',
      title: 'Certification Achievement',
      description: 'Achieved EPA Safer Choice certification for entire product line'
    },
    {
      year: '2023',
      title: 'Market Recognition',
      description: 'Named "Best Eco-Friendly Brand" by Green Living Magazine'
    },
    {
      year: '2024',
      title: 'Sustainable Impact',
      description: 'Reached milestone of 250,000+ liters of toxic chemicals replaced'
    }
  ];

  const stats = [
    { value: '250K+', label: 'Households Served' },
    { value: '99.5%', label: 'Biodegradability Rate' },
    { value: '15+', label: 'Years of Research' },
    { value: '100%', label: 'Plant-Based Formulas' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              About <span className="bg-gradient-to-r from-enzy-600 to-enzy-300 bg-clip-text text-transparent">
                EnzyHome
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Pioneering the future of home cleaning with enzyme-based solutions that protect 
              your family and preserve our planet for generations to come.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  EnzyHome was born from a simple yet powerful belief: that effective cleaning 
                  shouldn't come at the cost of our health or our planet. Founded by environmental 
                  scientist Trinab Goyal and biochemical engineer Shlok Mittal, our company represents 
                  the convergence of scientific expertise and environmental passion.
                </p>
                <p>
                  After years of research in enzyme technology and sustainable chemistry, our founders 
                  recognized the untapped potential of nature's own cleaning mechanisms. Enzymes, the 
                  biological catalysts that power life itself, could revolutionize how we approach 
                  home cleaning.
                </p>
                <p>
                  Today, EnzyHome stands as a testament to innovation in sustainable living. Our 
                  enzyme-powered formulations deliver superior cleaning performance while maintaining 
                  complete biodegradability and safety for families worldwide.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3962285/pexels-photo-3962285.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Laboratory research"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-br from-enzy-600 to-enzy-300 text-white p-6 rounded-2xl shadow-lg">
                <div className="text-2xl font-bold">5+</div>
                <div className="text-sm">Years of Innovation</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Meet Our Founders</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The visionaries behind EnzyHome's enzyme-powered revolution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {founders.map((founder, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={founder.image}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 text-center">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{founder.name}</h3>
                  <p className="text-enzy-600 font-semibold mb-4">{founder.role}</p>
                  <p className="text-gray-600 leading-relaxed">{founder.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Core Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do at EnzyHome
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-2xl hover:bg-purple-50 transition-colors duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-enzy-600 to-enzy-300 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      {/* <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Journey</h2>
            <p className="text-lg text-gray-600">
              Key milestones in our mission to revolutionize home cleaning
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-0.5 top-0 bottom-0 w-0.5 bg-enzy-300"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  <div className={`w-full md:w-1/2 ${
                    index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
                  }`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg ml-12 md:ml-0">
                      <div className="text-2xl font-bold text-enzy-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-8 h-8 bg-gradient-to-br from-enzy-600 to-enzy-300 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Stats */}
      {/* <section className="py-20 bg-gradient-to-r from-enzy-600 to-enzy-300 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Impact in Numbers</h2>
            <p className="text-xl text-white max-w-2xl mx-auto">
              Measurable progress in our mission to create a cleaner, safer world
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-purple-100 text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Commitment */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Sustainable products"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Commitment</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-enzy-600 to-enzy-300 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Environmental Stewardship</h3>
                    <p className="text-gray-600">We're committed to reducing chemical pollution and protecting ecosystems through biodegradable formulations.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-enzy-600 to-enzy-300 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Community Health</h3>
                    <p className="text-gray-600">Every product is designed with family safety in mind, eliminating harmful chemicals from homes.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-enzy-600 to-enzy-300 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Continuous Innovation</h3>
                    <p className="text-gray-600">Our R&D team constantly explores new enzyme technologies to improve performance and sustainability.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-violet-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Join Our Mission</h2>
          <p className="text-lg text-gray-600 mb-8">
            Be part of the enzyme revolution and help us create a cleaner, safer world for future generations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-enzy-600 to-enzy-300 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transform transition-all duration-300"
            >
              Explore Our Products
            </a>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-enzy-600 text-enzy-600 font-semibold rounded-full hover:bg-enzy-600 hover:text-white transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;