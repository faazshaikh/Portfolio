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

export const projectsData = [
  {
    id: 1,
    image: QuranMemorizationPic,
    title: "Quran Memorization App",
    category: "web",
    description: "A web-based Quran memorization platform built with React that helps students memorize, review and track their progress. It features an intuitive interface, spaced-repetition review system, performance analytics, and mobile-friendly design to support long-term retention and seamless learning.",
    technologies: ["React", "JavaScript", "Node.js", "CSS", "HTML"],
    github: "https://github.com/faazshaikh/Quran-Memorization-App",
  },
  {
    id: 2,
    image: BookMatePhoto,
    title: "BookMate",
    category: "web",
    description: "A booking platform for residential and commercial cleaning services, providing an intuitive interface for users to schedule and manage appointments seamlessly. Built with a modern web stack for efficient booking management.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
    github: "https://github.com/zshan-dev/bangyourhead",
  },
  {
    id: 3,
    image: NewMoviePic,
    title: "Movie Recommendation System",
    category: "app",
    description: "An intelligent movie recommendation system built in Java that uses algorithms to suggest personalized movie recommendations based on user preferences and ratings. Implements efficient data structures for fast lookups and recommendation generation.",
    technologies: ["Java", "Data Structures", "Algorithms"],
    github: "https://github.com/faazshaikh/movie-recommendation-system",
  },
  {
    id: 4,
    image: UKResHashIndex,
    title: "UK Residential Property Sales Indexing",
    category: "app",
    description: "A high-performance hash table indexing system implemented in C for fast lookup of large CSV datasets from UK Land Registry. Compares linear vs. indexed search, analyzes load factors, and demonstrates memory efficiency using dynamic allocation, hashing, and linked-list collision handling.",
    technologies: ["C", "Data Structures", "Algorithms", "Hash Tables"],
    github: "https://github.com/faazshaikh/Indexing-UK-Residential-Property-Sales-With-Hash-Tables",
  },
  {
    id: 5,
    image: RockPaperScissorsPic,
    title: "Rock Paper Scissors",
    category: "web",
    description: "An interactive rock paper scissors game built with modern web technologies. Features a clean user interface and smooth gameplay experience.",
    technologies: ["HTML", "CSS", "JavaScript", "DOM Manipulation"],
    github: "https://github.com/faazshaikh/rock-paper-scissors",
  },
  {
    id: 6,
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
