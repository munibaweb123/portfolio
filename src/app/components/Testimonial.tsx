import Image from "next/image";
import { FaUserCircle } from "react-icons/fa";

const testimonials = [
  {
    name: "Beesters Switch",
    position: "Director of AlphaStream Technologies",
    feedback: "Always come through and easy to work with.",
  },
  {
    name: "Jane Doe",
    position: "CEO of TechWave",
    feedback: "Highly professional and delivers on time. Great experience!",
  },
  {
    name: "John Smith",
    position: "Manager at InnovateX",
    feedback: "Exceptional work and attention to detail. Highly recommended!",
  },
];

const brands = [
  { name: "Cloudinary", logo: "/cloudinary.png" },
  { name: "Appwrite", logo: "/appwrite.png" },
  { name: "Hostinger", logo: "/hostinger.png" },
  { name: "Stream", logo: "/stream.png" },
  { name: "Docker", logo: "/docker.png" },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-900 text-white py-16 px-8 max-w-6xl mx-auto">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          Kind words from <span className="text-purple-400">satisfied clients</span>
        </h2>
        {/* Testimonials Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg flex flex-col items-center"
            >
              <p className="text-gray-300 mb-4">{testimonial.feedback}</p>
              <div className="flex items-center gap-3">
                <FaUserCircle size={50} className="text-gray-600" />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* Brands Section */}
        <div className="flex justify-center items-center gap-6 mt-8 flex-wrap">
          {brands.map((brand, index) => (
            <Image
              key={index}
              src={brand.logo}
              alt={brand.name}
              width={80}
              height={40}
              className="opacity-75 hover:opacity-100 transition"
            />
          ))}
        </div>
      </div>
    </section>
  );
}