import React, { useState } from 'react';
import {
  FaPython,
  FaGithub,
  FaDocker,
  FaAws
} from 'react-icons/fa';
import {
  SiPostgresql,
  SiMongodb,
  SiApachekafka,
  SiApachespark,
  SiApacheairflow,
  SiTableau,  
  SiGooglecloud
} from 'react-icons/si';
import { BiData } from 'react-icons/bi';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Programming',
    'Data Analytics',
    'Data Engineering',
    'Databases',
    'Cloud & DevOps'
  ];

  const skills = [
    // Programming
    { name: 'Python', category: 'Programming', icon: <FaPython />, bgColor: 'bg-blue-500' },
    { name: 'SQL', category: 'Programming', icon: <BiData />, bgColor: 'bg-gray-600' },

    // Data Analytics
    { name: 'Pandas', category: 'Data Analytics', icon: <BiData />, bgColor: 'bg-purple-500' },
    { name: 'NumPy', category: 'Data Analytics', icon: <BiData />, bgColor: 'bg-indigo-500' },
    { name: 'Scikit-learn', category: 'Data Analytics', icon: <BiData />, bgColor: 'bg-orange-500' },
    { name: 'Tableau', category: 'Data Analytics', icon: <SiTableau />, bgColor: 'bg-blue-600' },
    { name: 'EDA & Data Cleaning', category: 'Data Analytics', icon: <BiData />, bgColor: 'bg-teal-600' },

    // Data Engineering
    { name: 'Apache Kafka', category: 'Data Engineering', icon: <SiApachekafka />, bgColor: 'bg-black' },
    { name: 'PySpark', category: 'Data Engineering', icon: <SiApachespark />, bgColor: 'bg-red-600' },
    { name: 'Apache Airflow', category: 'Data Engineering', icon: <SiApacheairflow />, bgColor: 'bg-sky-600' },
    { name: 'ETL / ELT Pipelines', category: 'Data Engineering', icon: <BiData />, bgColor: 'bg-emerald-600' },

    // Databases
    { name: 'PostgreSQL', category: 'Databases', icon: <SiPostgresql />, bgColor: 'bg-blue-800' },
    { name: 'MongoDB', category: 'Databases', icon: <SiMongodb />, bgColor: 'bg-green-600' },

    // Cloud & DevOps

    { name: 'AWS (EC2, S3)', category: 'Cloud & DevOps', icon: <FaAws />, bgColor: 'bg-orange-400' },
    { name: 'Google Cloud', category: 'Cloud & DevOps', icon: <SiGooglecloud />, bgColor: 'bg-red-500' },
    { name: 'Docker', category: 'Cloud & DevOps', icon: <FaDocker />, bgColor: 'bg-blue-600' },
    { name: 'GitHub', category: 'Cloud & DevOps', icon: <FaGithub />, bgColor: 'bg-gray-900' },
  ];

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter(skill => skill.category === activeCategory);

  return (
    <section id="skills" className="py-16 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-emerald-400 mb-3">
            Technical Skills
          </h2>
          <p className="text-gray-400">
            Data analytics, engineering, and cloud technologies I work with
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? 'bg-emerald-400 text-slate-900'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {filteredSkills.map(skill => (
            <div
              key={skill.name}
              className="flex flex-col items-center p-5 bg-slate-800 rounded-xl hover:bg-slate-700 transition-all hover:scale-105"
            >
              <div
                className={`w-14 h-14 ${skill.bgColor} rounded-xl flex items-center justify-center text-xl text-white mb-3`}
              >
                {skill.icon}
              </div>
              <p className="text-white text-sm font-medium text-center">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
