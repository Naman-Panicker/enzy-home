import Link from "next/link";
import { ArrowRight, Leaf, ShieldCheck, Heart, Star, CheckCircle } from 'lucide-react';
import { Topbar } from "@/components/Topbar";


export default function Home() {
  
    const products = [
    {
      id: 'toilet-cleaner',
      name: 'Toilet Cleaner',
      image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['99.9% germ elimination', 'Biodegradable formula', 'Fresh enzyme scent']
    },
    {
      id: 'glass-cleaner',
      name: 'Glass Cleaner',
      image: 'https://images.pexels.com/photos/4239140/pexels-photo-4239140.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Streak-free shine', 'Safe for all surfaces', 'Plant-based ingredients']
    },
    {
      id: 'handwash',
      name: 'Hand Wash',
      image: 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Gentle on skin', 'Antibacterial protection', 'Natural moisturizers']
    },
    {
      id: 'dishwash',
      name: 'Dish Wash',
      image: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Cuts through grease', 'Gentle on hands', 'Eco-friendly formula']
    },
    {
      id: 'laundry',
      name: 'Laundry Detergent',
      image: 'https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Deep stain removal', 'Fabric care enzymes', 'Hypoallergenic']
    },
    {
      id: 'odour-control',
      name: 'Odour Control',
      image: 'https://images.pexels.com/photos/4239119/pexels-photo-4239119.jpeg?auto=compress&cs=tinysrgb&w=400',
      features: ['Neutralizes odours', 'Long-lasting freshness', 'Pet-safe formula']
    }
  ];

  const values = [
    { icon: Leaf, title: 'Sustainability', description: 'Biodegradable formulas that protect our planet' },
    { icon: ShieldCheck, title: 'Innovation', description: 'Advanced enzyme technology for superior cleaning' },
    { icon: Heart, title: 'Care', description: 'Safe for your family, pets, and the environment' },
    { icon: Star, title: 'Integrity', description: 'Transparent ingredients and honest practices' }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Eco-conscious Mom',
      content: 'Finally found cleaning products that work amazing and are safe for my kids and pets!',
      rating: 5
    },
    {
      name: 'Mike Chen',
      role: 'Green Living Advocate',
      content: 'EnzyHome has transformed how we clean. Powerful results without harsh chemicals.',
      rating: 5
    },
    {
      name: 'Lisa Rodriguez',
      role: 'Health Professional',
      content: 'I recommend EnzyHome to all my patients concerned about toxic exposure in their homes.',
      rating: 5
    }
  ];

  const impactMetrics = [
    { value: '250K+', label: 'Liters of toxic chemicals replaced' },
    { value: '50K+', label: 'Households served' },
    { value: '99.5%', label: 'Biodegradability rate' },
    { value: '100%', label: 'Customer satisfaction' }
  ];

  return (
    <div className="pt-16">

      <Topbar/>
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-white flex items-center">
        <div className="absolute inset-0 bg-gradient-to-r from-enzy-600/5 to-enzy-300/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Redefining Clean,
                  <span className="block bg-gradient-to-r from-enzy-600 to-enzy-300 bg-clip-text text-transparent">
                    The Enzyme Way
                  </span>
                </h1>
                <p className="text-xl text-gray-600 mt-6 leading-relaxed">
                  Safe, effective, and eco-friendly solutions for a healthier home. 
                  Experience the power of enzyme-based cleaning that protects your family and planet.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-enzy-600 to-enzy-300 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transform transition-all duration-300 group"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
                <Link
                  href="/sustainability"
                  className="inline-flex items-center px-8 py-4 border-2 border-enzy-600 text-enzy-600 font-semibold rounded-full hover:bg-enzy-600 hover:text-white transition-all duration-300"
                >
                  Explore Our Solutions
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl overflow-hidden bg-gradient-to-br from-purple-100 to-violet-100 p-8">
                <img
                  src="https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="EnzyHome Products"
                  className="w-full h-full object-cover rounded-2xl shadow-2xl"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-br from-enzy-600 to-enzy-300 rounded-full flex items-center justify-center shadow-xl">
                <div className="text-white text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm">Eco-Safe</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded with a vision for safe, plant-enzyme cleaning solutions, EnzyHome combines 
              sustainability, performance, and elegance to revolutionize how we care for our homes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-2xl hover:bg-purple-50 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-br from-enzy-600 to-enzy-300 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Highlights */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Featured Products</h2>
            <p className="text-xl text-gray-600">
              Discover our complete range of enzyme-powered cleaning solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{product.name}</h3>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <CheckCircle className="w-4 h-4 text-enzy-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/products/${product.id}`}
                    className="inline-flex items-center text-enzy-300 font-semibold hover:text-enzy-600 transition-colors duration-200 group"
                  >
                    View Product
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-r from-enzy-600 to-enzy-300 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">Our Environmental Impact</h2>
            <p className="text-xl text-white max-w-3xl mx-auto">
              Every EnzyHome product sold helps create a cleaner, safer world for future generations
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl lg:text-5xl font-bold mb-2">{metric.value}</div>
                <div className="text-white text-sm lg:text-base">{metric.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why EnzyHome */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose EnzyHome?</h2>
            <p className="text-xl text-gray-600">
              Experience the difference of enzyme-powered cleaning
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Chemical vs Enzyme */}
            <div className="bg-gradient-to-br from-red-50 to-orange-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Chemical Cleaners</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  Harsh toxic ingredients
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  Harmful to skin and respiratory system
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  Non-biodegradable pollutants
                </li>
                <li className="flex items-center text-gray-700">
                  <div className="w-2 h-2 bg-red-400 rounded-full mr-3"></div>
                  Unsafe around pets and children
                </li>
              </ul>
            </div>

            <div className="bg-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Enzyme Cleaners</h3>
              <ul className="space-y-4">
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-enzy-600 mr-3" />
                  100% biodegradable formulation
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-enzy-600 mr-3" />
                  Non-toxic and gentle on skin
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-enzy-600 mr-3" />
                  Eco-friendly and sustainable
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-enzy-600 mr-3" />
                  Safe for pets and family
                </li>
                <li className="flex items-center text-gray-700">
                  <CheckCircle className="w-5 h-5 text-enzy-600 mr-3" />
                  Superior cleaning power
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">
              Join thousands of families who've made the switch to enzyme cleaning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-enzy-600 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-enzy-600 to-enzy-300 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Cleaning Routine?</h2>
          <p className="text-xl text-purple-100 mb-8">
            Join thousands of families who've discovered the power of enzyme-based cleaning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="inline-flex items-center px-8 py-4 bg-white text-enzy-600 font-semibold rounded-full hover:shadow-xl hover:scale-105 transform transition-all duration-300 group"
            >
              Shop Our Products
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-enzy-600 transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
