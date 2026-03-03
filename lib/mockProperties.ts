export interface Property {
  id: number
  price: string
  priceValue: number
  address: string
  beds: number
  baths: number
  sqft: number
  type: 'For Sale' | 'To Rent'
  propertyType: 'House' | 'Flat' | 'Bungalow' | 'Detached' | 'Semi-Detached' | 'Terraced'
  image: string
  images: string[]
  description: string
  agent: string
  addedOn: string
  features: string[]
  lat: number
  lng: number
  distance?: string
}

export const mockProperties: Property[] = [
  {
    id: 1,
    price: '£425,000',
    priceValue: 425000,
    address: '23 Marina View, Gunwharf Quays, Portsmouth PO6 1LZ',
    beds: 2,
    baths: 2,
    sqft: 982,
    type: 'For Sale',
    propertyType: 'Flat',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80'
    ],
    description: 'A stunning two-bedroom apartment located in the heart of Gunwharf Quays with spectacular harbour views. This modern property features an open-plan living area, contemporary kitchen, and access to secure parking.',
    agent: 'Bernards Estate Agents',
    addedOn: '2 days ago',
    features: [
      'Harbour views',
      'Secure parking',
      'Modern kitchen',
      'Open-plan living',
      'Balcony',
      'EPC Rating: B'
    ],
    lat: 50.7967,
    lng: -1.1089,
    distance: '0.1 miles'
  },
  {
    id: 2,
    price: '£675,000',
    priceValue: 675000,
    address: '14 Southsea Terrace, Southsea, Portsmouth PO6 2DE',
    beds: 4,
    baths: 3,
    sqft: 1850,
    type: 'For Sale',
    propertyType: 'Terraced',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
    ],
    description: 'Beautiful Victorian terrace house in the desirable Southsea area. Period features throughout with modern conveniences. Large garden and close to seafront.',
    agent: 'Bernards Estate Agents',
    addedOn: '1 week ago',
    features: [
      'Period features',
      'Large garden',
      'Close to seafront',
      'Modernised throughout',
      'Off-street parking',
      'EPC Rating: C'
    ],
    lat: 50.7889,
    lng: -1.0778,
    distance: '0.3 miles'
  },
  {
    id: 3,
    price: '£1,450 pcm',
    priceValue: 1450,
    address: '8 Park Lane, Fratton, Portsmouth PO6 3AB',
    beds: 3,
    baths: 2,
    sqft: 1240,
    type: 'To Rent',
    propertyType: 'Semi-Detached',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80'
    ],
    description: 'Spacious three-bedroom semi-detached house available to rent. Well-maintained property with modern bathroom and kitchen. Private garden and driveway.',
    agent: 'Bernards Estate Agents',
    addedOn: '3 days ago',
    features: [
      'Driveway',
      'Private garden',
      'Modern kitchen',
      'Close to amenities',
      'Available now',
      'EPC Rating: C'
    ],
    lat: 50.7956,
    lng: -1.0634,
    distance: '0.5 miles'
  },
  {
    id: 4,
    price: '£895,000',
    priceValue: 895000,
    address: '42 Coastal Road, Lee-on-the-Solent, Hampshire PO6 4XY',
    beds: 5,
    baths: 3,
    sqft: 2450,
    type: 'For Sale',
    propertyType: 'Detached',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80'
    ],
    description: 'Impressive five-bedroom detached family home with stunning sea views. Spacious accommodation over three floors with integral double garage and landscaped gardens.',
    agent: 'Bernards Estate Agents',
    addedOn: '2 weeks ago',
    features: [
      'Sea views',
      'Double garage',
      'Landscaped gardens',
      'Three floors',
      'Luxury finish',
      'EPC Rating: B'
    ],
    lat: 50.8023,
    lng: -1.2011,
    distance: '1.2 miles'
  },
  {
    id: 5,
    price: '£325,000',
    priceValue: 325000,
    address: '17 Windsor Road, Baffins, Portsmouth PO6 5TH',
    beds: 3,
    baths: 1,
    sqft: 1100,
    type: 'For Sale',
    propertyType: 'Terraced',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80'
    ],
    description: 'Well-presented three-bedroom terraced house in popular residential area. Good-sized rooms throughout, rear garden, and close to local schools and shops.',
    agent: 'Bernards Estate Agents',
    addedOn: '5 days ago',
    features: [
      'Three bedrooms',
      'Rear garden',
      'Close to schools',
      'Well presented',
      'Chain free',
      'EPC Rating: D'
    ],
    lat: 50.8134,
    lng: -1.0456,
    distance: '0.7 miles'
  },
  {
    id: 6,
    price: '£550,000',
    priceValue: 550000,
    address: '9 Elmwood Avenue, Milton, Portsmouth PO6 6GH',
    beds: 4,
    baths: 2,
    sqft: 1680,
    type: 'For Sale',
    propertyType: 'Semi-Detached',
    image: 'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1605146769289-440113cc3d00?w=800&q=80'
    ],
    description: 'Extended four-bedroom semi-detached house in sought-after Milton location. Features include modern kitchen/diner, conservatory, driveway and rear garden.',
    agent: 'Bernards Estate Agents',
    addedOn: '1 week ago',
    features: [
      'Extended',
      'Modern kitchen',
      'Conservatory',
      'Driveway',
      'Rear garden',
      'EPC Rating: C'
    ],
    lat: 50.7834,
    lng: -1.0389,
    distance: '0.9 miles'
  },
  {
    id: 7,
    price: '£795,000',
    priceValue: 795000,
    address: '31 Highland Road, Eastney, Portsmouth PO6 7JK',
    beds: 4,
    baths: 3,
    sqft: 2100,
    type: 'For Sale',
    propertyType: 'Detached',
    image: 'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=800&q=80'
    ],
    description: 'Stunning four-bedroom detached house close to seafront. Beautifully presented throughout with high-spec kitchen, separate utility, and landscaped rear garden.',
    agent: 'Bernards Estate Agents',
    addedOn: '4 days ago',
    features: [
      'Close to seafront',
      'High-spec kitchen',
      'Utility room',
      'Landscaped garden',
      'Garage',
      'EPC Rating: B'
    ],
    lat: 50.7812,
    lng: -1.0312,
    distance: '0.6 miles'
  },
  {
    id: 8,
    price: '£1,200 pcm',
    priceValue: 1200,
    address: '52 Victoria Grove, Copnor, Portsmouth PO6 8LM',
    beds: 2,
    baths: 1,
    sqft: 850,
    type: 'To Rent',
    propertyType: 'Flat',
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&q=80'
    ],
    description: 'Modern two-bedroom ground floor flat in residential area. Features include fitted kitchen, bathroom with shower, allocated parking space.',
    agent: 'Bernards Estate Agents',
    addedOn: '1 day ago',
    features: [
      'Ground floor',
      'Allocated parking',
      'Modern kitchen',
      'Available immediately',
      'No chain',
      'EPC Rating: C'
    ],
    lat: 50.8223,
    lng: -1.0534,
    distance: '1.1 miles'
  },
  {
    id: 9,
    price: '£385,000',
    priceValue: 385000,
    address: '26 Cambridge Road, North End, Portsmouth PO6 9NP',
    beds: 3,
    baths: 2,
    sqft: 1150,
    type: 'For Sale',
    propertyType: 'Semi-Detached',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80'
    ],
    description: 'Charming three-bedroom semi-detached house with off-road parking. Recently renovated with new kitchen and bathroom. Good-sized garden to rear.',
    agent: 'Bernards Estate Agents',
    addedOn: '6 days ago',
    features: [
      'Recently renovated',
      'New kitchen',
      'New bathroom',
      'Off-road parking',
      'Good-sized garden',
      'EPC Rating: C'
    ],
    lat: 50.8156,
    lng: -1.0678,
    distance: '0.8 miles'
  },
  {
    id: 10,
    price: '£1,650 pcm',
    priceValue: 1650,
    address: '14 The Marina, Port Solent, Portsmouth PO6 0QR',
    beds: 3,
    baths: 2,
    sqft: 1320,
    type: 'To Rent',
    propertyType: 'Flat',
    image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&q=80'
    ],
    description: 'Luxury three-bedroom apartment in prestigious Port Solent marina. Features two balconies with water views, parking, and access to boardwalk with restaurants.',
    agent: 'Bernards Estate Agents',
    addedOn: '3 days ago',
    features: [
      'Marina views',
      'Two balconies',
      'Secure parking',
      'Boardwalk access',
      'Luxury finish',
      'EPC Rating: B'
    ],
    lat: 50.8345,
    lng: -1.1023,
    distance: '1.5 miles'
  },
  {
    id: 11,
    price: '£465,000',
    priceValue: 465000,
    address: '78 Kingston Crescent, North End, Portsmouth PO6 9ST',
    beds: 3,
    baths: 2,
    sqft: 1380,
    type: 'For Sale',
    propertyType: 'Semi-Detached',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80'
    ],
    description: 'Beautifully presented three-bedroom extended semi-detached house. Open-plan kitchen/dining room, modern bathroom, landscaped garden and driveway.',
    agent: 'Bernards Estate Agents',
    addedOn: '1 week ago',
    features: [
      'Extended',
      'Open-plan living',
      'Modern throughout',
      'Driveway',
      'Landscaped garden',
      'EPC Rating: C'
    ],
    lat: 50.8189,
    lng: -1.0623,
    distance: '0.4 miles'
  },
  {
    id: 12,
    price: '£625,000',
    priceValue: 625000,
    address: '5 Osborne Road, Southsea, Portsmouth PO6 2UH',
    beds: 4,
    baths: 2,
    sqft: 1780,
    type: 'For Sale',
    propertyType: 'Terraced',
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800&q=80'
    ],
    description: 'Impressive four-bedroom Victorian terrace on popular Osborne Road. Retains many original features, spacious rooms, courtyard garden. Walking distance to seafront.',
    agent: 'Bernards Estate Agents',
    addedOn: '5 days ago',
    features: [
      'Victorian features',
      'Spacious rooms',
      'Close to seafront',
      'Courtyard garden',
      'Osborne Road location',
      'EPC Rating: D'
    ],
    lat: 50.7867,
    lng: -1.0823,
    distance: '0.2 miles'
  }
]
