'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

const skillsContent = {
  communication: {
    title: "Communication",
    description: "Master the art of effective communication to express yourself clearly and persuasively.",
  },
  teamwork: {
    title: "Teamwork & Collaboration",
    description: "Learn how to work efficiently with others and achieve collective goals.",
  },
  "problem-solving": {
    title: "Problem-Solving",
    description: "Sharpen your problem-solving skills to tackle challenges confidently.",
  },
  "emotional-intelligence": {
    title: "Emotional Intelligence",
    description: "Understand and manage your emotions to build better relationships.",
  },
  leadership: {
    title: "Leadership",
    description: "Develop leadership skills to inspire and guide teams.",
  },
};

const SkillContent = ({ skill }) => {
  const skillData = skillsContent[skill];

  if (!skillData) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold">{skillData.title}</h1>
      <p className="mt-4 text-lg">{skillData.description}</p>
      <Link href="/softskills" className="mt-6 inline-block text-blue-500 hover:underline">
        Back to Skills
      </Link>
    </div>
  );
};

const SkillDetail = () => {
  const searchParams = useSearchParams();
  const skill = searchParams.get('id');

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {skill ? <SkillContent skill={skill} /> : <div>Loading...</div>}
    </Suspense>
  );
};

export default SkillDetail;
