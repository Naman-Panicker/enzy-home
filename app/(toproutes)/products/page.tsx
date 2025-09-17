import React from 'react';
import  Link  from 'next/link';
import { ArrowRight, CheckCircle, Droplets, Sparkles, Home, Car, Shirt, RefreshCw } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      id: 'toilet-bathroom',
      name: 'Toilet & Bathroom Care',
      icon: Home,
      description: 'Deep cleaning solutions for bathrooms',
      products: ['Toilet Bowl Cleaner', 'Bathroom Surface Cleaner', 'Tile & Grout Cleaner']
    },
    {
      id: 'kitchen-dish',
      name: 'Kitchen & Dish Care',
      icon: Sparkles,
      description: 'Grease-cutting kitchen essentials',
      products: ['Dish Washing Liquid', 'Kitchen Degreaser', 'Countertop Cleaner']
    },
    {
      id: 'laundry',
      name: 'Laundry Solutions',
      icon: Shirt,
      description: 'Fabric care and stain removal',
      products: ['Laundry Detergent', 'Stain Remover', 'Fabric Softener']
    },
    {
      id: 'surface-care',
      name: 'Surface Care',
      icon: RefreshCw,
      description: 'Multi-surface cleaning solutions',
      products: ['Glass Cleaner', 'All-Purpose Cleaner', 'Wood Polish']
    },
    {
      id: 'air-odour',
      name: 'Air & Odour Control',
      icon: Droplets,
      description: 'Freshening and odour elimination',
      products: ['Air Freshener', 'Odour Eliminator', 'Pet Odour Control']
    },
    {
      id: 'specialty',
      name: 'Specialty Cleaners',
      icon: Car,
      description: 'Specialized cleaning solutions',
      products: ['Hand Wash', 'Car Cleaner', 'Carpet Cleaner']
    }
  ];

  const featuredProducts = [
    {
      id: 'toilet-cleaner',
      name: 'Enzyme Toilet Bowl Cleaner',
      image: 'https://images.pexels.com/photos/4239091/pexels-photo-4239091.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: '$12.99',
      originalPrice: '$15.99',
      category: 'Toilet & Bathroom Care',
      rating: 4.8,
      reviews: 324,
      features: [
        '99.9% germ elimination',
        'Biodegradable formula',
        'Fresh enzyme scent',
        'Safe for septic systems'
      ],
      badge: 'Best Seller'
    },
    {
      id: 'glass-cleaner',
      name: 'Crystal Clear Glass Cleaner',
      image: 'https://images.pexels.com/photos/4239140/pexels-photo-4239140.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: '$9.99',
      category: 'Surface Care',
      rating: 4.9,
      reviews: 189,
      features: [
        'Streak-free shine',
        'Safe for all glass surfaces',
        'Plant-based ingredients',
        'Ammonia-free formula'
      ]
    },
    {
      id: 'handwash',
      name: 'Gentle Care Hand Wash',
      image: 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: '$7.99',
      category: 'Specialty Care',
      rating: 4.7,
      reviews: 256,
      features: [
        'Gentle on sensitive skin',
        'Antibacterial protection',
        'Natural moisturizers',
        'Dermatologist tested'
      ]
    },
    {
      id: 'dishwash',
      name: 'Power Dish Washing Liquid',
      image: 'https://images.pexels.com/photos/4239013/pexels-photo-4239013.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: '$11.99',
      category: 'Kitchen Care',
      rating: 4.8,
      reviews: 412,
      features: [
        'Cuts through tough grease',
        'Gentle on hands',
        'Concentrated formula',
        'Pleasant citrus scent'
      ],
      badge: 'New'
    },
    {
      id: 'laundry-detergent',
      name: 'Ultra Clean Laundry Detergent',
      image: 'https://images.pexels.com/photos/5591581/pexels-photo-5591581.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: '$16.99',
      originalPrice: '$19.99',
      category: 'Laundry Care',
      rating: 4.9,
      reviews: 378,
      features: [
        'Deep stain removal',
        'Fabric care enzymes',
        'Works in cold water',
        'Hypoallergenic formula'
      ]
    },
    {
      id: 'odour-eliminator',
      name: 'Fresh Air Odour Eliminator',
      image: 'https://images.pexels.com/photos/4239119/pexels-photo-4239119.jpeg?auto=compress&cs=tinysrgb&w=500',
      price: '$8.99',
      category: 'Air Care',
      rating: 4.6,
      reviews: 167,
      features: [
        'Neutralizes tough odours',
        'Long-lasting freshness',
        'Pet and child safe',
        'Natural enzyme action'
      ]
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-violet-50 to-fuchsia-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-enzy-600 to-enzy-300 bg-clip-text text-transparent">
                Products
              </span>
            </h1>
            <p className="text-xl text-gray-800 max-w-3xl mx-auto mb-8">
              Discover our complete range of enzyme-powered cleaning solutions designed to keep your home 
              spotless while protecting your family and the environment.
            </p>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-lg text-gray-600">Find the perfect enzyme solution for every cleaning need</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category) => (
              <div key={category.id} className="bg-gradient-to-br from-gray-50 to-purple-50 p-6 rounded-2xl hover:shadow-lg transition-all duration-300 group cursor-pointer">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-enzy-600 to-enzy-300 rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                    <category.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{category.name}</h3>
                </div>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <ul className="space-y-1 text-sm text-gray-500">
                  {category.products.map((product, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-1 h-1 bg-enzy-500 rounded-full mr-2"></div>
                      {product}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600">Our most popular enzyme-powered cleaning solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group">
                {product.badge && (
                  <div className="absolute top-4 left-4 z-10">
                    <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                      product.badge === 'Best Seller' 
                        ? 'bg-enzy-500 text-white' 
                        : 'bg-orange-500 text-white'
                    }`}>
                      {product.badge}
                    </span>
                  </div>
                )}
                
                <div className="aspect-square overflow-hidden relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <div className="p-6">
                  <div className="text-sm text-enzy-600 font-medium mb-2">{product.category}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{product.name}</h3>
                  
                  <div className="flex items-center mb-3">
                    <div className="flex text-yellow-400 mr-2">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-sm ${i < Math.floor(product.rating) ? 'fill-current' : 'text-gray-300'}`}>
                          ★
                        </span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">({product.reviews} reviews)</span>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {product.features.slice(0, 3).map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-enzy-500 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                      )}
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Link
                      href={`/products/${product.id}`}
                      className="flex-1 bg-gradient-to-r from-enzy-600 to-enzy-300 text-white py-3 px-4 rounded-lg text-center font-medium hover:shadow-lg hover:scale-105 transform transition-all duration-200"
                    >
                      View Details
                    </Link>
                    <button className="px-4 py-3 border border-enzy-600 text-enzy-600 rounded-lg hover:bg-enzy-500 hover:text-white transition-colors duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-enzy-600 to-enzy-300 rounded-3xl p-8 lg:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Why Choose EnzyHome Products?</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Biodegradable formulas',
                    'Non-toxic ingredients',
                    'Safe for pets & children',
                    'Powerful enzyme action',
                    'Eco-friendly packaging',
                    'Satisfaction guaranteed'
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-enzy-300 mr-3" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="text-center lg:text-right">
                <div className="inline-block bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <div className="text-4xl font-bold mb-2">100%</div>
                  <div className="text-purple-50">Satisfaction Guarantee</div>
                  <p className="text-sm text-purple-50 mt-2">
                    Try any EnzyHome product risk-free for 30 days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Can't Find What You're Looking For?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is here to help you find the perfect enzyme solution for your specific needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-enzy-600 to-enzy-300 text-white font-semibold rounded-full hover:shadow-xl hover:scale-105 transform transition-all duration-300 group"
          >
            Contact Our Experts
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Products;