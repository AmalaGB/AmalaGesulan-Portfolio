import { ExternalLink, Github } from "lucide-react";
import {
  FaDatabase,
  FaChartLine,
  FaTruck,
  FaHotel,
  FaWalking,
} from "react-icons/fa";

const Projects = () => {
  const projects = [
    {
      title: "NLP-Based Named Entity Recognition",
      description:
        "Built a domain-specific complaint classifier using SpaCy and hybrid NLP techniques. Achieved a 93% F1-score by combining rule-based patterns with machine learning, automating e-commerce complaint categorization and reducing manual review effort.",
      techStack: [
        "Python",
        "SpaCy",
        "RegEx",
        "Scikit-learn",
        "NLP",
        "Machine Learning",
      ],
      icon: <FaDatabase className="w-6 h-6" />,
      codeLink: "https://github.com/AmalaGB/NLP-Based-Named-Entity-Recognition-",
      liveLink: "#",
    },
    {
      title: "Kafka Data Pipeline for Sports Analytics",
      description:
        "Designed and implemented a real-time streaming pipeline using Apache Kafka. Leveraged topics, partitions, and consumer groups with replication and offset management to ensure fault-tolerant, zero-loss data ingestion.",
      techStack: [
        "Apache Kafka",
        "PySpark",
        "Apache Airflow",
        "Python",
        "Streaming Data",
        "ETL Pipelines",
      ],
      icon: <FaChartLine className="w-6 h-6" />,
      codeLink: "https://github.com/AmalaGB/Kafka-beginning",
      liveLink: "#",
    },
    {
      title: "Pharma Shipment Monitoring System",
      description:
        "Developed an IoT-enabled pharmaceutical shipment monitoring system with real-time dashboards to track shipment conditions and improve compliance visibility across the supply chain.",
      techStack: [
        "IoT",
        "Arduino Cloud",
        "Python",
        "Real-Time Analytics",
        "Dashboards",
      ],
      icon: <FaTruck className="w-6 h-6" />,
      codeLink: "https://github.com/AmalaGB/Pharmaceutical-Shipment-Monitoring",
      liveLink: "#",
    },
    {
      title: "Hotel Management System",
      description:
        "Built a comprehensive hotel management system to handle bookings, customer records, and billing operations. Focused on efficient data handling, modular design, and backend-driven business logic.",
      techStack: [
        "Java",
        "SQL",
        "Backend Development",
        "Database Design",
      ],
      icon: <FaHotel className="w-6 h-6" />,
      codeLink: "#",
      liveLink: "#",
    },
    {
      title: "Gait Identification for Parkinson’s Disease",
      description:
        "Developed a machine learning–based gait analysis system to identify Parkinson’s Disease using walking pattern features extracted from video data, aiming for a low-cost and accessible diagnostic approach.",
      techStack: [
        "Python",
        "Machine Learning",
        "Computer Vision",
        "Deep Learning",
        "Healthcare Analytics",
      ],
      icon: <FaWalking className="w-6 h-6" />,
      codeLink: "#",
      liveLink: "#",
    },
  ];

  return (
    <section id="projects" className="py-12 sm:py-16 lg:py-20 bg-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-emerald-400 mb-4">
            Projects
          </h2>
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-slate-800 rounded-lg p-4 sm:p-6 hover:bg-slate-700 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="text-emerald-400">{project.icon}</div>
                <div className="flex space-x-2">
                  <a
                    href={project.codeLink}
                    className="text-gray-400 hover:hover:bg-teal-400 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.liveLink}
                    className="text-gray-400 hover:hover:bg-teal-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              <h3 className="hover:bg-teal-400 text-lg sm:text-xl font-bold mb-2">
                {project.title}
              </h3>

              <p className="text-gray-300 text-xs sm:text-sm mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-4 sm:mb-6">
                <p className="text-gray-400 text-xs sm:text-sm mb-2">
                  Tech Stack:
                </p>
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-emerald-400 text-[10px] sm:text-xs bg-emerald-400/10 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
