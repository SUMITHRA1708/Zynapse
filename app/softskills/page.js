import Link from "next/link";

export default function SoftSkills() {
  const skills = [
    { name: "Communication", url: "/softskills/communication" },
    { name: "Teamwork & Collaboration", url: "/softskills/teamwork" },
    { name: "Problem-Solving", url: "/softskills/problem-solving" },
    { name: "Emotional Intelligence", url: "/softskills/emotional-intelligence" },
    { name: "Leadership", url: "/softskills/leadership" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-8">Explore Soft Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => (
            <Link key={index} href={skill.url}>
              <p className="block p-6 bg-white shadow rounded-lg hover:shadow-lg transition">
                <h2 className="text-xl font-semibold text-gray-800">{skill.name}</h2>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
