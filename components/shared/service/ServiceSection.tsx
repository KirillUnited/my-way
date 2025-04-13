import Image from 'next/image'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  description: string
  image: string
  price: string
}

const ServiceCard = ({ title, description, image, price }: ServiceCardProps) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative h-48 w-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <p className="text-primary font-bold text-lg">{price}</p>
      </div>
    </motion.div>
  )
}

const ServiceSection = () => {
  const services = [
    {
      title: "Full Body Laser Hair Removal",
      description: "Permanent hair reduction using advanced laser technology for smooth, hair-free skin.",
      image: "/images/full-body.jpg",
      price: "Starting from $299"
    },
    {
      title: "Facial Hair Removal",
      description: "Gentle and precise laser treatment for unwanted facial hair.",
      image: "/images/facial.jpg", 
      price: "Starting from $99"
    },
    {
      title: "Brazilian Laser Treatment",
      description: "Professional and comfortable intimate area hair removal.",
      image: "/images/brazilian.jpg",
      price: "Starting from $159"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Experience the latest in laser hair removal technology with our range of specialized treatments
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServiceSection
