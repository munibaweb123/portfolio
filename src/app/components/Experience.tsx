import Image from "next/image";
import { FaPaintBrush, FaChalkboard } from "react-icons/fa";

const experiences = [
  {
    title: "Graphic Designer",
    description: "Worked on various design projects, including branding and marketing materials.",
    icon: <FaPaintBrush size={50}/>, // Replace with actual image path
  },
  {
    title: "Teaching",
    description: "Teach matric class specially maths and computer science",
    icon: <FaChalkboard size={50}/>, // Replace with actual image path
  },
  
];

export default function WorkExperience() {
  return (
    <section className="bg-gray-900 text-white py-16 px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">
          My <span className="text-purple-400">work experience</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-2xl p-6 shadow-lg flex items-center gap-4"
            >
              <div className="text-purple-400">
                {experience.icon}
              </div>
              <div>
                <p className="font-semibold text-lg">{experience.title}</p>
                <p className="text-gray-400 text-sm">{experience.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
