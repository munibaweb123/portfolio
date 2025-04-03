import Image from "next/image";

const experiences = [
  {
    title: "Frontend Engineer Intern",
    description: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
    icon: "/frontend-intern.svg", // Replace with actual image path
  },
  {
    title: "Mobile App Dev - JSM Tech",
    description: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
    icon: "/mobile-app.svg", // Replace with actual image path
  },
  {
    title: "Freelance App Dev Project",
    description: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
    icon: "/freelance-app.svg", // Replace with actual image path
  },
  {
    title: "Lead Frontend Developer",
    description: "Developed and maintained user-facing features using modern frontend technologies.",
    icon: "/lead-frontend.svg", // Replace with actual image path
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
              <Image
                src={experience.icon}
                alt={experience.title}
                width={50}
                height={50}
              />
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
