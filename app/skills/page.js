'use client';

import Link from 'next/link';
import { useRouter, useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Suspense } from 'react'

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

export default function SkillDetail() {
  const router = useSearchParams();
  const skill = router.get('id'); 

  const [skillData, setSkillData] = useState(null);

  useEffect(() => {
    if (skill) {
      setSkillData(skillsContent[skill]);
    }
  }, [skill]);

  if (!skillData) return <div>Loading...</div>;

  return (
  <Suspense>
    <div className="min-h-screen bg-gray-50 p-6">
    <h1 className="text-3xl font-bold">{skillData.title}</h1>
    <p className="mt-4 text-lg">{skillData.description}</p>
    <Link href="/softskills" className="mt-6 inline-block text-blue-500 hover:underline">
      Back to Skills
    </Link>
  </div>
  </Suspense>
  );
}
