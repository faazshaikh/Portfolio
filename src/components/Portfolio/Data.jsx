import Work1 from "../../assets/work1.jpg";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Work4 from "../../assets/work4.jpg";
import Work5 from "../../assets/work5.jpg";
import QuranMemorizationPic from "../../assets/Quranmemorizationpic.png";
import BookMatePhoto from "../../assets/bookmatephoto.png";
import NewMoviePic from "../../assets/newmoviepic.jpg";
import UKResHashIndex from "../../assets/ukreshashindex.jpg";
import NewMatrixPic from "../../assets/newwwmatrixpicnew.jpg";
import RockPaperScissorsPic from "../../assets/rockpapersispic.jpg";
import FrontlinePic from "../../assets/imageforfrontline.png";

export const projectsData = [
  {
    id: 1,
    image: FrontlinePic,
    title: "Frontline - DeltaHacks 12",
    category: "web",
    description: "A touchless triage platform that transforms 10-second camera clips into instant biometric analysis and visual injury detection. Combines Presage biometric sensing with Gemini Vision AI to generate ER-ready incident reports, real-time vitals monitoring, and an ElevenLabs-powered voice operator for step-by-step first aid guidance. Built as a full-stack emergency response system that reduces diagnosis and handoff time by 10%.",
    technologies: ["React", "C++", "Node.js", "Gemini API", "ElevenLabs", "Presage"],
    github: "https://github.com/faazshaikh/deltahacks-12",
    devpost: "https://devpost.com/software/frontline-noyxp0?ref_content=my-projects-tab&ref_feature=my_projects",
    hackathonWinner: true,
  },
  {
    id: 2,
    image: QuranMemorizationPic,
    title: "Quran Memorization App",
    category: "web",
    description: "A web-based Quran memorization platform built with React that helps students memorize, review and track their progress. It features an intuitive interface, spaced-repetition review system, performance analytics, and mobile-friendly design to support long-term retention and seamless learning.",
    technologies: ["React", "JavaScript", "Node.js", "CSS", "HTML"],
    github: "https://github.com/faazshaikh/Quran-Memorization-App",
  },
  {
    id: 3,
    image: BookMatePhoto,
    title: "BookMate",
    category: "web",
    description: "A booking platform for residential and commercial cleaning services, providing an intuitive interface for users to schedule and manage appointments seamlessly. Built with a modern web stack for efficient booking management.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/zshan-dev/bangyourhead",
  },
  {
    id: 4,
    image: NewMoviePic,
    title: "Movie Recommendation System",
    category: "app",
    description: "An intelligent movie recommendation system built in Java that uses algorithms to suggest personalized movie recommendations based on user preferences and ratings. Implements efficient data structures for fast lookups and recommendation generation.",
    technologies: ["Java", "Data Structures", "Algorithms"],
    github: "https://github.com/faazshaikh/movie-recommendation-system",
  },
  {
    id: 5,
    image: UKResHashIndex,
    title: "UK Residential Property Sales Indexing",
    category: "app",
    description: "A high-performance hash table indexing system implemented in C for fast lookup of large CSV datasets from UK Land Registry. Compares linear vs. indexed search, analyzes load factors, and demonstrates memory efficiency using dynamic allocation, hashing, and linked-list collision handling.",
    technologies: ["C", "Data Structures", "Algorithms", "Hash Tables"],
    github: "https://github.com/faazshaikh/Indexing-UK-Residential-Property-Sales-With-Hash-Tables",
  },
  {
    id: 6,
    image: RockPaperScissorsPic,
    title: "Rock Paper Scissors",
    category: "web",
    description: "An interactive rock paper scissors game built with modern web technologies. Features a clean user interface and smooth gameplay experience.",
    technologies: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
    github: "https://github.com/faazshaikh/rock-paper-scissors",
  },
  {
    id: 7,
    image: NewMatrixPic,
    title: "Matrix Solver",
    category: "app",
    description: "A matrix solver application that performs various matrix operations and calculations. Implements efficient algorithms for matrix computations and linear algebra operations.",
    technologies: ["C", "Makefile", "Algorithms", "Linear Algebra", "Data Structures"],
    github: "https://github.com/faazshaikh/matrix-solver",
  },
];

// projects
export const projectsNav = [
  {
    name: "all",
  },
  {
    name: "web",
  },
  {
    name: "app",
  },
];
