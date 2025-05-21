import Image from "next/image";

const testimonials = [
  {
    name: "Beesters switch",
    position: "Director of AlphaStream Technologies",
    image: "/profile.jpg", // Replace with the actual image path
    feedback:
      "Always come through and easy to work with.",
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
        <div className="flex justify-center gap-4 overflow-x-auto py-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg w-96 flex-shrink-0"
            >
              <p className="text-gray-300 mb-4">{testimonial.feedback}</p>
              <div className="flex items-center gap-3">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full border border-gray-600"
                />
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
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
