'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you for your message! We\'ll get back to you soon.')
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <main className="min-h-screen bg-white">
      {/* Header */}
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
              <Link href="/contact" className="text-sm font-medium text-blue-600 hover:text-blue-700">
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
      <section className="bg-gradient-to-br from-blue-50 to-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our friendly team is here to help with all your property needs. Contact us today for expert advice.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5 }}
            >
              <Card className="text-center h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Phone</h3>
                  <p className="text-gray-600 mb-2">Call us during office hours</p>
                  <a href="tel:02392008575" className="text-blue-600 font-semibold text-lg hover:text-blue-700">
                    023 9200 8575
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Card className="text-center h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mail className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Email</h3>
                  <p className="text-gray-600 mb-2">Send us an email anytime</p>
                  <a href="mailto:info@bernards.co.uk" className="text-blue-600 font-semibold text-lg hover:text-blue-700">
                    info@bernards.co.uk
                  </a>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card className="text-center h-full">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MapPin className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Visit Us</h3>
                  <p className="text-gray-600 mb-2">Our office location</p>
                  <p className="text-gray-900 font-semibold">
                    123 High Street<br />
                    Portsmouth<br />
                    PO1 2EF
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Contact Form & Map Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and one of our team members will get back to you within 24 hours.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Smith"
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="07700 900000"
                    className="h-12"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your property requirements..."
                    required
                    rows={6}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  />
                </div>

                <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 h-12">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Office Info & Map */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Visit Our Office
              </h2>

              <div className="mb-6">
                <div className="flex items-start gap-3 mb-4">
                  <Clock className="w-5 h-5 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">Opening Hours</h3>
                    <div className="space-y-1 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span className="font-medium">9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span className="font-medium">9:00 AM - 4:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span className="font-medium">Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-gray-100 rounded-lg h-96 flex items-center justify-center">
                <div className="text-center p-8">
                  <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Find Us Here
                  </h3>
                  <p className="text-gray-600 mb-4">
                    123 High Street<br />
                    Portsmouth, PO1 2EF
                  </p>
                  <Button variant="outline" size="sm">
                    Get Directions
                  </Button>
                </div>
              </div>

              <div className="mt-6 p-6 bg-blue-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">Free Property Valuation</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Thinking of selling or letting? Get a free, no-obligation valuation from our expert team.
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 w-full">
                  Book Free Valuation
                </Button>
              </div>
            </motion.div>
          </div>
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
