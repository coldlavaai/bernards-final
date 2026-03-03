'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select } from "@/components/ui/select"
import Link from "next/link"
import { Search, SlidersHorizontal, Heart, Phone, Mail, MapPin, Home, ChevronLeft, ChevronRight } from "lucide-react"
import { useState, useMemo, Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { mockProperties, type Property } from "@/lib/mockProperties"

function SearchContent() {
  const searchParams = useSearchParams()
  const initialPostcode = searchParams.get('postcode') || 'PO6 1LZ'

  const [searchLocation, setSearchLocation] = useState(initialPostcode)
  const [radius, setRadius] = useState('3')
  const [minPrice, setMinPrice] = useState('')
  const [maxPrice, setMaxPrice] = useState('')
  const [minBeds, setMinBeds] = useState('')
  const [propertyType, setPropertyType] = useState('')
  const [sortBy, setSortBy] = useState('newest')
  const [savedProperties, setSavedProperties] = useState<number[]>([])
  const [listingType, setListingType] = useState<'sale' | 'rent'>('sale')

  // Filter and sort properties
  const filteredProperties = useMemo(() => {
    let filtered = mockProperties.filter(p => {
      // Filter by listing type
      if (listingType === 'sale' && p.type !== 'For Sale') return false
      if (listingType === 'rent' && p.type !== 'To Rent') return false

      // Filter by price
      if (minPrice && p.priceValue < parseInt(minPrice)) return false
      if (maxPrice && p.priceValue > parseInt(maxPrice)) return false

      // Filter by bedrooms
      if (minBeds && p.beds < parseInt(minBeds)) return false

      // Filter by property type
      if (propertyType && p.propertyType !== propertyType) return false

      return true
    })

    // Sort
    switch (sortBy) {
      case 'newest':
        return filtered
      case 'price-low':
        return [...filtered].sort((a, b) => a.priceValue - b.priceValue)
      case 'price-high':
        return [...filtered].sort((a, b) => b.priceValue - a.priceValue)
      default:
        return filtered
    }
  }, [minPrice, maxPrice, minBeds, propertyType, sortBy, listingType])

  const toggleSaved = (id: number) => {
    setSavedProperties(prev =>
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    )
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center">
              <div className="text-xl font-bold text-gray-900">BERNARDS</div>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-sm text-gray-600 hover:text-gray-900">Home</Link>
              <Link href="/selling" className="text-sm text-gray-600 hover:text-gray-900">Selling</Link>
              <Link href="/contact" className="text-sm text-gray-600 hover:text-gray-900">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Filters Bar */}
      <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
        <div className="max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Buy/Rent Toggle */}
          <div className="flex items-center gap-2 mb-4">
            <Button
              variant={listingType === 'sale' ? 'default' : 'outline'}
              onClick={() => setListingType('sale')}
              className={listingType === 'sale' ? 'bg-green-600 hover:bg-green-700' : ''}
            >
              For Sale
            </Button>
            <Button
              variant={listingType === 'rent' ? 'default' : 'outline'}
              onClick={() => setListingType('rent')}
              className={listingType === 'rent' ? 'bg-green-600 hover:bg-green-700' : ''}
            >
              To Rent
            </Button>
          </div>

          {/* Search Filters */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex-1 min-w-[250px]">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="text"
                  value={searchLocation}
                  onChange={(e) => setSearchLocation(e.target.value)}
                  placeholder="Search location or postcode"
                  className="pl-10 h-10"
                />
              </div>
            </div>

            <select
              value={radius}
              onChange={(e) => setRadius(e.target.value)}
              className="h-10 px-3 border border-gray-300 rounded-md text-sm bg-white"
            >
              <option value="0">This area only</option>
              <option value="0.25">+ 0.25 miles</option>
              <option value="0.5">+ 0.5 miles</option>
              <option value="1">+ 1 mile</option>
              <option value="3">+ 3 miles</option>
              <option value="5">+ 5 miles</option>
              <option value="10">+ 10 miles</option>
            </select>

            <select
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="h-10 px-3 border border-gray-300 rounded-md text-sm bg-white"
            >
              <option value="">Min price</option>
              <option value="200000">£200,000</option>
              <option value="300000">£300,000</option>
              <option value="400000">£400,000</option>
              <option value="500000">£500,000</option>
              <option value="600000">£600,000</option>
              <option value="700000">£700,000</option>
            </select>

            <select
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="h-10 px-3 border border-gray-300 rounded-md text-sm bg-white"
            >
              <option value="">Max price</option>
              <option value="400000">£400,000</option>
              <option value="500000">£500,000</option>
              <option value="600000">£600,000</option>
              <option value="700000">£700,000</option>
              <option value="800000">£800,000</option>
              <option value="1000000">£1,000,000</option>
            </select>

            <select
              value={minBeds}
              onChange={(e) => setMinBeds(e.target.value)}
              className="h-10 px-3 border border-gray-300 rounded-md text-sm bg-white"
            >
              <option value="">Beds</option>
              <option value="1">1+</option>
              <option value="2">2+</option>
              <option value="3">3+</option>
              <option value="4">4+</option>
              <option value="5">5+</option>
            </select>

            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="h-10 px-3 border border-gray-300 rounded-md text-sm bg-white"
            >
              <option value="">Property type</option>
              <option value="House">House</option>
              <option value="Flat">Flat</option>
              <option value="Bungalow">Bungalow</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
            </select>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="max-w-[1920px] mx-auto">
        <div className="flex">
          {/* Left: Property Listings */}
          <div className="flex-1 px-4 sm:px-6 lg:px-8 py-6">
            {/* Results Header */}
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-xl font-semibold text-gray-900">
                {filteredProperties.length} properties {listingType === 'sale' ? 'for sale' : 'to rent'} in {searchLocation}
              </h1>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="h-9 px-3 border border-gray-300 rounded-md text-sm bg-white"
              >
                <option value="newest">Newest listed</option>
                <option value="price-low">Price (low to high)</option>
                <option value="price-high">Price (high to low)</option>
              </select>
            </div>

            {/* Property Cards */}
            <div className="space-y-4">
              {filteredProperties.map((property) => (
                <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="flex flex-col md:flex-row">
                    {/* Image */}
                    <div className="relative md:w-72 h-56 flex-shrink-0">
                      <img
                        src={property.image}
                        alt={property.address}
                        className="w-full h-full object-cover"
                      />
                      <button
                        onClick={() => toggleSaved(property.id)}
                        className="absolute top-3 right-3 w-8 h-8 bg-white rounded-full flex items-center justify-center hover:bg-gray-100"
                      >
                        <Heart
                          className={`w-4 h-4 ${savedProperties.includes(property.id) ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
                        />
                      </button>
                      <div className="absolute bottom-3 left-3">
                        <Badge className="bg-white text-gray-900 text-xs">
                          {property.images.length} photos
                        </Badge>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="text-2xl font-bold text-gray-900 mb-1">
                            {property.price}
                          </div>
                          <div className="text-gray-700 font-medium mb-2">
                            {property.address}
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                            <div className="flex items-center gap-1">
                              <Home className="w-4 h-4" />
                              {property.beds} bed
                            </div>
                            <div>• {property.baths} bath</div>
                            <div>• {property.propertyType}</div>
                          </div>
                        </div>
                      </div>

                      <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                        {property.description}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                            <span className="text-white text-xs font-bold">B</span>
                          </div>
                          <div className="text-xs text-gray-600">
                            <div className="font-medium text-gray-900">{property.agent}</div>
                            <div>Added on {property.addedOn}</div>
                          </div>
                        </div>

                        <div className="flex items-center gap-2">
                          <Button size="sm" variant="outline" className="text-sm">
                            <Phone className="w-3 h-3 mr-1" />
                            Call
                          </Button>
                          <Button size="sm" variant="outline" className="text-sm">
                            <Mail className="w-3 h-3 mr-1" />
                            Email
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* No Results */}
            {filteredProperties.length === 0 && (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <Home className="w-16 h-16 mx-auto" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No properties found
                </h3>
                <p className="text-gray-600">
                  Try adjusting your filters to see more results
                </p>
              </div>
            )}
          </div>

          {/* Right: Map (sticky) */}
          <div className="hidden lg:block w-[600px] flex-shrink-0">
            <div className="sticky top-32 h-[calc(100vh-8rem)]">
              <div className="relative w-full h-full bg-gray-100 flex items-center justify-center border-l border-gray-200">
                {/* Placeholder map - in production this would be Google Maps or similar */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-green-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center p-8">
                      <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Interactive Map
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Showing {filteredProperties.length} properties near {searchLocation}
                      </p>
                      <div className="space-y-2">
                        {filteredProperties.slice(0, 5).map((property) => (
                          <div
                            key={property.id}
                            className="inline-block bg-white px-3 py-1.5 rounded-full text-sm font-medium text-gray-900 shadow-sm mr-2"
                          >
                            📍 {property.price}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SearchPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    }>
      <SearchContent />
    </Suspense>
  )
}
