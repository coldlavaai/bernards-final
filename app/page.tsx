'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Search, Home, Key, Building2, Phone, Mail, MapPin, Star } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function HomePage() {
  const router = useRouter()
  const [postcode, setPostcode] = useState('')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (postcode.trim()) {
      router.push(`/search?postcode=${encodeURIComponent(postcode.trim())}`)
    }
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  const featuredProperties = [
    {
      id: 1,
      type: 'For Sale',
      price: '£425,000',
      address: '23 Marina View, Gunwharf Quays, Portsmouth',
      beds: 2,
      baths: 2,
      sqft: 982,
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      status: 'New Listing'
    },
    {
      id: 2,
      type: 'For Sale',
      price: '£675,000',
      address: '14 Southsea Terrace, Southsea, Portsmouth',
      beds: 4,
      baths: 3,
      sqft: 1850,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      status: ''
    },
    {
      id: 3,
      type: 'To Rent',
      price: '£1,450 pcm',
      address: '8 Park Lane, Fareham, Hampshire',
      beds: 3,
      baths: 2,
      sqft: 1240,
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
      status: ''
    },
    {
      id: 4,
      type: 'For Sale',
      price: '£895,000',
      address: '42 Coastal Road, Lee-on-the-Solent',
      beds: 5,
      baths: 3,
      sqft: 2450,
      image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
      status: 'Price Reduced'
    }
  ]

  return (
    <main className="min-h-screen bg-white">
      {/* Header/Navigation */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center">
              <div className="text-2xl font-bold text-gray-900">
                BERNARDS
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-8">
              <Link href="/search" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Property Search
              </Link>
              <Link href="/selling" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Selling
              </Link>
              <Link href="/landlords" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Landlords
              </Link>
              <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                About Us
              </Link>
              <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-gray-900">
                Contact
              </Link>
              <Button size="sm" className="bg-blue-600 hover:bg-blue-700">
                Book Valuation
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 to-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Find Your Perfect Home in Portsmouth & Hampshire
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-10">
              Expert estate agents serving Portsmouth, Southsea, Fareham, Gosport and surrounding areas since 1990
            </p>

            {/* Search Form */}
            <form onSubmit={handleSearch} className="max-w-2xl mx-auto">
              <div className="flex flex-col sm:flex-row gap-3 p-4 bg-white rounded-lg shadow-lg">
                <div className="flex-1">
                  <Input
                    type="text"
                    placeholder="Enter postcode or location (e.g., PO6 1LZ, Portsmouth)"
                    value={postcode}
                    onChange={(e) => setPostcode(e.target.value)}
                    className="h-12 text-base"
                  />
                </div>
                <Button type="submit" size="lg" className="bg-blue-600 hover:bg-blue-700 h-12 px-8">
                  <Search className="w-5 h-5 mr-2" />
                  Search Properties
                </Button>
              </div>
            </form>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16"
          >
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">4,000+</div>
              <div className="text-gray-600">Properties Sold</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">£235m</div>
              <div className="text-gray-600">Total Sales Value</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">54</div>
              <div className="text-gray-600">Dedicated Team Members</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Properties
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our hand-picked selection of the finest homes available in Portsmouth and Hampshire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property, index) => (
              <motion.div
                key={property.id}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeIn}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group">
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={property.image}
                      alt={property.address}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {property.status && (
                      <Badge className="absolute top-3 left-3 bg-blue-600">
                        {property.status}
                      </Badge>
                    )}
                    <Badge className="absolute top-3 right-3 bg-white text-gray-900">
                      {property.type}
                    </Badge>
                  </div>
                  <CardContent className="p-5">
                    <div className="text-2xl font-bold text-gray-900 mb-3">
                      {property.price}
                    </div>
                    <div className="text-gray-700 font-medium mb-4 line-clamp-2">
                      {property.address}
                    </div>
                    <div className="flex items-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <Home className="w-4 h-4" />
                        {property.beds} beds
                      </div>
                      <div className="flex items-center gap-1">
                        <div className="w-4 h-4">🚿</div>
                        {property.baths} baths
                      </div>
                      <div>{property.sqft} sqft</div>
                    </div>
                    <Button variant="outline" className="w-full mt-4">
                      View Details
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/search">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                View All Properties
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Bernards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Bernards?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're not just estate agents, we're your local property experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Home className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Local Expertise
              </h3>
              <p className="text-gray-600">
                Over 30 years of experience in Portsmouth and Hampshire. We know the market inside out.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Award Winning Service
              </h3>
              <p className="text-gray-600">
                Consistently rated 5 stars by our customers. Your satisfaction is our top priority.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-8 rounded-lg shadow-sm"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Key className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                End-to-End Support
              </h3>
              <p className="text-gray-600">
                From valuation to completion, we're with you every step of the way.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Find Your Dream Home?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free valuation or start your property search today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="outline" className="bg-white text-blue-600 hover:bg-gray-50 border-0">
                Book Free Valuation
              </Button>
              <Link href="/search">
                <Button size="lg" variant="outline" className="bg-transparent text-white border-2 border-white hover:bg-white hover:text-blue-600">
                  Search Properties
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-2xl font-bold text-white mb-4">BERNARDS</div>
              <p className="text-sm mb-4">
                Your trusted estate agent in Portsmouth, Southsea, Fareham and Gosport since 1990
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/search" className="hover:text-white">Property Search</Link></li>
                <li><Link href="/selling" className="hover:text-white">Selling</Link></li>
                <li><Link href="/landlords" className="hover:text-white">Landlords</Link></li>
                <li><Link href="/about" className="hover:text-white">About Us</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/sales" className="hover:text-white">Sales</Link></li>
                <li><Link href="/lettings" className="hover:text-white">Lettings</Link></li>
                <li><Link href="/mortgages" className="hover:text-white">Mortgages</Link></li>
                <li><Link href="/valuations" className="hover:text-white">Valuations</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  023 9200 8575
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  info@bernards.co.uk
                </li>
                <li className="flex items-start gap-2">
                  <MapPin className="w-4 h-4 mt-0.5" />
                  <span>123 High Street<br />Portsmouth, PO1 2EF</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-sm text-center">
            <p>© 2026 Bernards Estate Agents. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
