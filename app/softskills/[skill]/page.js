"use client"
import { useRouter } from "next/navigation";

const skillsContent = {
  communication: {
    title: "Communication",
    description:
      "Master the art of effective communication to express yourself clearly and persuasively.",
  },
  teamwork: {
    title: "Teamwork & Collaboration",
    description: "Learn how to work efficiently with others and achieve collective goals.",
  },
  "problem-solving": {
    title: "Problem-Solving",
    description: "Sharpen your problem-solving skills to tackle challenges confidently.",
  },
  // Add other skill descriptions
};

export default function SkillDetail() {
  const router = useRouter();
  const { skill } = router.query;

  const skillData = skillsContent[skill] || { title: "Skill Not Found", description: "" };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-extrabold text-gray-900 mb-6">{skillData.title}</h1>
        <p className="text-lg text-gray-700">{skillData.description}</p>
        {/* You can add more content like quizzes, assessments, etc. */}
      </div>
    </div>
  );
}
