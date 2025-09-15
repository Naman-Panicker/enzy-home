import React from 'react';
import { Leaf, Droplets, Recycle, Globe, ChevronDown, CheckCircle, ArrowRight } from 'lucide-react';

const Sustainability = () => {
  const environmentalBenefits = [
    {
      icon: Droplets,
      title: 'Water Conservation',
      description: 'Enzyme cleaners require 40% less water for effective cleaning compared to traditional chemicals',
      metric: '2.5M Liters',
      subtext: 'Water saved annually'
    },
    {
      icon: Leaf,
      title: 'Biodegradable Formula',
      description: 'Our products break down completely within 28 days, leaving no harmful residues',
      metric: '99.5%',
      subtext: 'Biodegradability rate'
    },
    {
      icon: Recycle,
      title: 'Reduced Carbon Footprint',
      description: 'Plant-based ingredients and efficient production reduce CO₂ emissions by 60%',
      metric: '500 Tons',
      subtext: 'CO₂ prevented yearly'
    },
    {
      icon: Globe,
      title: 'Ecosystem Protection',
      description: 'Non-toxic formulas protect aquatic life and soil health in our watersheds',
      metric: '250K+',
      subtext: 'Liters of toxins replaced'
    }
  ];

  const enzymeComparison = [
    {
      category: 'Environmental Impact',
      traditional: {
        title: 'Traditional Chemicals',
        points: [
          'Persistent environmental pollutants',
          'Toxic to aquatic ecosystems',
          'Non-biodegradable compounds',
          'High carbon footprint production'
        ]
      },
      enzyme: {
        title: 'Enzyme Technology',
        points: [
          '99.5% biodegradable formulation',
          'Safe for all ecosystems',
          'Naturally occurring ingredients',
          'Low-impact manufacturing'
        ]
      }
    },
    {
      category: 'Health & Safety',
      traditional: {
        title: 'Traditional Chemicals',
        points: [
          'Harsh fumes and vapors',
          'Skin and eye irritation',
          'Respiratory health concerns',
          'Toxic if ingested'
        ]
      },
      enzyme: {
        title: 'Enzyme Technology',
        points: [
          'No harmful fumes or vapors',
          'Gentle on skin and eyes',
          'Safe to breathe around',
          'Non-toxic formulation'
        ]
      }
    },
    {
      category: 'Performance',
      traditional: {
        title: 'Traditional Chemicals',
        points: [
          'Aggressive cleaning action',
          'May damage surfaces over time',
          'Requires multiple products',
          'Harsh on fabrics and materials'
        ]
      },
      enzyme: {
        title: 'Enzyme Technology',
        points: [
          'Targeted cleaning action',
          'Preserves surface integrity',
          'Multi-purpose effectiveness',
          'Fabric and surface friendly'
        ]
      }
    }
  ];

  const certifications = [
    {
      name: 'EPA Safer Choice',
      description: 'Certified by the EPA as safer for human health and the environment',
      logo: '🏛️'
    },
    {
      name: 'USDA BioPreferred',
      description: 'Contains verified bio-based content from renewable resources',
      logo: '🌱'
    },
    {
      name: 'Cradle to Cradle Certified',
      description: 'Designed for circular economy with safe, renewable materials',
      logo: '♻️'
    },
    {
      name: 'Green Seal Certified',
      description: 'Meets stringent environmental and health standards',
      logo: '✅'
    }
  ];

  const sustainabilityGoals = [
    {
      year: '2025',
      title: 'Carbon Neutral Operations',
      description: 'Achieve net-zero carbon emissions across all manufacturing and operations',
      progress: 78,
      status: 'On Track'
    },
    {
      year: '2026',
      title: '100% Renewable Energy',
      description: 'Power all facilities with renewable energy sources',
      progress: 65,
      status: 'In Progress'
    },
    {
      year: '2027',
      title: 'Zero Waste to Landfill',
      description: 'Eliminate all manufacturing waste going to landfills',
      progress: 45,
      status: 'Planned'
    },
    {
      year: '2030',
      title: '1 Million Homes Impact',
      description: 'Help 1 million households transition to enzyme-based cleaning',
      progress: 25,
      status: 'Long-term'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our Commitment to <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                Sustainability
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Discover how enzyme technology is revolutionizing home cleaning while protecting 
              our planet's future. Every EnzyHome product represents a step toward a cleaner, 
              healthier world.
            </p>
            <div className="flex justify-center">
              <div className="bg-white p-6 rounded-2xl shadow-lg">
                <div className="text-3xl font-bold text-emerald-600">99.5%</div>
                <div className="text-gray-600">Biodegradable</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Environmental Benefits */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Environmental Impact</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Measurable benefits of choosing enzyme-based cleaning solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {environmentalBenefits.map((benefit, index) => (
              <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 hover:shadow-lg transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{benefit.description}</p>
                <div className="text-2xl font-bold text-emerald-600 mb-1">{benefit.metric}</div>
                <div className="text-xs text-gray-500">{benefit.subtext}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How Enzymes Work */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">The Science Behind Enzymes</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Understanding how nature's own cleaning mechanisms work to deliver superior results
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Target Recognition</h3>
              <p className="text-gray-600">
                Enzymes specifically identify and bind to organic stains, oils, and proteins - 
                the root cause of most cleaning challenges.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Molecular Breakdown</h3>
              <p className="text-gray-600">
                Once attached, enzymes break down complex molecules into simple, water-soluble 
                compounds that rinse away easily.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl text-white font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Natural Decomposition</h3>
              <p className="text-gray-600">
                After cleaning, enzymes naturally biodegrade, leaving no harmful residues in 
                your home or the environment.
              </p>
            </div>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Enzyme Types in Our Products</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Proteases:</span> Break down protein-based stains like blood and food
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Lipases:</span> Target fats, oils, and greasy residues
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Amylases:</span> Remove starch and carbohydrate-based soils
                    </div>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                    <div>
                      <span className="font-semibold">Cellulases:</span> Restore fabric softness and remove trapped dirt
                    </div>
                  </li>
                </ul>
              </div>
              <div className="text-center">
                <img
                  src="https://images.pexels.com/photos/3938023/pexels-photo-3938023.jpeg?auto=compress&cs=tinysrgb&w=500"
                  alt="Enzyme science"
                  className="rounded-2xl shadow-lg mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Enzyme vs Traditional Cleaners</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See how enzyme technology compares to conventional chemical cleaning
            </p>
          </div>

          <div className="space-y-12">
            {enzymeComparison.map((section, index) => (
              <div key={index} className="bg-gradient-to-br from-gray-50 to-emerald-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">{section.category}</h3>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {/* Traditional */}
                  <div className="bg-red-50 border border-red-200 p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <div className="w-3 h-3 bg-red-400 rounded-full mr-3"></div>
                      {section.traditional.title}
                    </h4>
                    <ul className="space-y-3">
                      {section.traditional.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start text-gray-700">
                          <div className="w-2 h-2 bg-red-400 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Enzyme */}
                  <div className="bg-emerald-50 border border-emerald-200 p-6 rounded-xl">
                    <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                      <CheckCircle className="w-5 h-5 text-emerald-500 mr-3" />
                      {section.enzyme.title}
                    </h4>
                    <ul className="space-y-3">
                      {section.enzyme.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-start text-gray-700">
                          <CheckCircle className="w-4 h-4 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Trusted Certifications</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Third-party validated sustainability and safety standards
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{cert.logo}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainability Goals */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our 2030 Sustainability Goals</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Ambitious targets for environmental impact and social responsibility
            </p>
          </div>

          <div className="space-y-8">
            {sustainabilityGoals.map((goal, index) => (
              <div key={index} className="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 items-center">
                  <div className="text-center lg:text-left">
                    <div className="text-2xl font-bold text-emerald-600 mb-1">{goal.year}</div>
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                      goal.status === 'On Track' ? 'bg-green-100 text-green-800' :
                      goal.status === 'In Progress' ? 'bg-blue-100 text-blue-800' :
                      goal.status === 'Planned' ? 'bg-yellow-100 text-yellow-800' :
                      'bg-purple-100 text-purple-800'
                    }`}>
                      {goal.status}
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{goal.title}</h3>
                    <p className="text-gray-600">{goal.description}</p>
                  </div>
                  
                  <div className="text-center lg:text-right">
                    <div className="inline-block">
                      <div className="text-2xl font-bold text-gray-900 mb-2">{goal.progress}%</div>
                      <div className="w-32 h-2 bg-gray-200 rounded-full mx-auto lg:mx-0">
                        <div
                          className="h-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"
                          style={{ width: `${goal.progress}%` }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Take Action */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join the Enzyme Revolution</h2>
          <p className="text-xl text-emerald-100 mb-8">
            Every EnzyHome product you choose is a vote for a cleaner, healthier planet. 
            Make the switch today and be part of the solution.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">1 Bottle</div>
              <div className="text-emerald-100 text-sm">Replaces 5 toxic cleaners</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">28 Days</div>
              <div className="text-emerald-100 text-sm">Complete biodegradation</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold mb-1">0 Harm</div>
              <div className="text-emerald-100 text-sm">To you or the environment</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-white text-emerald-600 font-semibold rounded-full hover:shadow-xl hover:scale-105 transform transition-all duration-300 group"
            >
              Shop Sustainable Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </a>
            <a
              href="/about"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-emerald-600 transition-all duration-300"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Sustainability;