import React from 'react';
import Home from '../pages/Home';
import Work from '../pages/Work';
import About from '../pages/About';
import Contact from '../pages/Contact';
import projectImg1 from '../assets/images/matcheron.webp';
import projectImg2 from '../assets/images/next-nannies.webp';
import projectImg3 from '../assets/images/qloud.webp';
import projectImg4 from '../assets/images/sepiolite.webp';
import testimonialImg1 from '../assets/images/asim.jpeg';
import testimonialImg2 from '../assets/images/shayan.jpeg';
import testimonialImg3 from '../assets/images/abubakar.jpeg';
import { FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';
import { FiGithub } from 'react-icons/fi';
import { GrFacebookOption } from 'react-icons/gr';
import { RiGroupLine } from 'react-icons/ri';
import {
  HiOutlineCursorArrowRipple,
  HiOutlineRocketLaunch,
} from 'react-icons/hi2';
import { FaRegHeart, FaCss3, FaSass, FaReact } from 'react-icons/fa';
import { ImHtmlFive2 } from 'react-icons/im';
import { RiBootstrapLine, RiJavascriptLine } from 'react-icons/ri';
import { SiTailwindcss } from 'react-icons/si';
import { PiFigmaLogo } from 'react-icons/pi';

// URLs centralized for easy maintenance
export const urls = {
  linkedin: 'https://www.linkedin.com/in/tahabaigdev',
  github: 'https://github.com/tahabaigdev',
  facebook: 'https://www.facebook.com/tahabaigdev/',
  whatsapp: 'https://wa.me/3272267139',
  email: 'mailto:connectmtb@gmail.com',
};

// Page Routes
export const pageRoutes = [
  { path: '/', element: <Home /> },
  { path: '/work', element: <Work /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
];

// Navigation Links
export const navLinks = [
  { link: '/work', text: '/Work' },
  { link: '/about', text: '/About' },
  { link: '/contact', text: '/Contact' },
];

// Project Data
export const projectsData = [
  {
    link: 'https://matcheron.com/',
    title: 'Matcheron',
    desc: 'Matcheron is a social dating platform that combines innovation and user-friendliness.',
    category: 'Web Development',
    year: '2023',
    marqueeText: [
      'Matcheron Social Dating Site',
      'Matcheron Social Dating Site',
    ],
    imgUrl: projectImg1,
    imgAlt: 'Screenshot of Matcheron social dating site',
  },
  {
    link: 'https://nextnannies.com/',
    title: 'Next Nannies',
    desc: 'Matcheron is a social dating platform that combines innovation and user-friendliness.',
    category: 'Web Development',
    year: '2023',
    marqueeText: [
      'Next Nannies Social Dating',
      'Next Nannies Social Dating',
      'Next Nannies Social Dating',
    ],
    imgUrl: projectImg2,
    imgAlt: 'Screenshot of Matcheron social dating site',
  },
  {
    link: 'https://66c07120d9e6ac420573900f--jade-druid-c97080.netlify.app/',
    title: 'Qloud',
    desc: 'Matcheron is a social dating platform that combines innovation and user-friendliness.',
    category: 'Web Development',
    year: '2023',
    marqueeText: [
      'Qloud Service Provider',
      'Qloud Service Provider',
      'Qloud Service Provider',
    ],
    imgUrl: projectImg3,
    imgAlt: 'Screenshot of Matcheron social dating site',
  },
  {
    link: 'https://66c06a0c5b098b3a1eea1d6f--capable-pie-aef911.netlify.app/',
    title: 'Sepiolite',
    desc: 'Matcheron is a social dating platform that combines innovation and user-friendliness.',
    category: 'Web Development',
    year: '2023',
    marqueeText: [
      'Sepiolite Service Provider',
      'Sepiolite Service Provider',
      'Sepiolite Service Provider',
    ],
    imgUrl: projectImg4,
    imgAlt: 'Screenshot of Matcheron social dating site',
  },
];

// FAQs
export const faqsData = [
  {
    title: 'What technologies do you specialize in?',
    content:
      'I specialize in HTML, CSS, JavaScript, and frameworks like React, using tools like Tailwind CSS for styling and GSAP for animations.',
  },
  {
    title: 'What type of projects have you worked on?',
    content:
      'From personal portfolios to complex dashboards, I have experience in building dynamic websites, integrating animations, and using tools like React Flow.',
  },
  {
    title:
      'Do you work with responsive design and cross-browser compatibility?',
    content:
      'Yes, all my projects are fully responsive and compatible across major browsers, using frameworks like Tailwind CSS for optimization.',
  },
  {
    title: 'Do you work with backend technologies as well?',
    content:
      'While my focus is on frontend, I collaborate with backend developers and integrate APIs, such as the WordPress REST API, for dynamic content.',
  },
  {
    title: 'Can you integrate third-party libraries and APIs into a project?',
    content:
      'Absolutely! I integrate third-party libraries like React Trend and GSAP, and I connect APIs to efficiently display dynamic data.',
  },
];

// Testimonials
export const testimonialsData = [
  {
    imgURL: testimonialImg1,
    title: 'Asim Farooq',
    subTitle: 'XConnIO, Core Developer',
    des: 'Taha developed a clean, functional dashboard for us. His expertise in HTML, CSS, and JavaScript was impressive, with clear communication and a commitment to deadlines.',
  },
  {
    imgURL: testimonialImg2,
    title: 'Shayan Khan',
    subTitle: 'CEO, Spotvision Agency',
    des: 'Taha created a visually appealing website using React. His technical skills and responsiveness made the process smooth and enjoyable.',
  },
  {
    imgURL: testimonialImg3,
    title: 'Abubakar Sheerazi',
    subTitle: 'CEO, Frototype Agency',
    des: 'Taha built a custom React dashboard that exceeded expectations. The intuitive interface has significantly improved our workflow.',
  },
];

// Social Links
export const socialLinks = [
  {
    href: urls.linkedin,
    icon: (
      <FaLinkedinIn className="text-[3rem] text-[#FF6363] transition-all duration-200 md:text-[3.5rem] md:group-hover:text-[4rem]" />
    ),
    bgColor: 'bg-[#1a1a1a]',
  },
  {
    href: urls.github,
    icon: (
      <FiGithub className="text-[3rem] text-[#B978EC] transition-all duration-200 md:text-[3.5rem] md:group-hover:text-[4rem]" />
    ),
    bgColor: 'bg-[#1a1a1a]',
  },
  {
    href: urls.facebook,
    icon: (
      <GrFacebookOption className="text-[3rem] text-[#58A4FF] transition-all duration-200 md:text-[3.5rem] md:group-hover:text-[4rem]" />
    ),
    bgColor: 'bg-[#1a1a1a]',
  },
  {
    href: urls.whatsapp,
    icon: (
      <FaWhatsapp className="text-[3rem] text-[#6CCD6A] transition-all duration-200 md:text-[3.5rem] md:group-hover:text-[4rem]" />
    ),
    bgColor: 'bg-[#1a1a1a]',
  },
];

// Approach
export const approachData = [
  {
    icon: RiGroupLine,
    title: 'Understanding the Requirements',
    content:
      'I start by deeply understanding the project’s goals, ensuring alignment with the overall vision.',
    color: '#3C80DD',
  },
  {
    icon: HiOutlineCursorArrowRipple,
    title: 'User-Centered Design',
    content:
      'I focus on creating responsive interfaces that provide seamless user experiences across all devices.',
    color: '#72B0A5',
  },
  {
    icon: HiOutlineRocketLaunch,
    title: 'Writing Clean, Scalable Code',
    content:
      'I write efficient, maintainable code that ensures both performance and scalability.',
    color: '#C399FE',
  },
  {
    icon: FaRegHeart,
    title: 'Collaborative Development',
    content:
      'I believe in collaborative work, using feedback to refine and enhance the product throughout development.',
    color: '#E86E5C',
  },
];

// Skills
export const skillsData = [
  { icon: ImHtmlFive2, skill: 'HTML', color: '#f06529' },
  { icon: FaCss3, skill: 'CSS', color: '#2965f1' },
  { icon: FaSass, skill: 'Sass', color: '#cc6699' },
  { icon: RiBootstrapLine, skill: 'Bootstrap', color: '#563d7c' },
  { icon: SiTailwindcss, skill: 'Tailwind CSS', color: '#06b6d4' },
  { icon: RiJavascriptLine, skill: 'JavaScript', color: '#f0db4f' },
  { icon: FaReact, skill: 'React', color: '#61DBFB' },
  { icon: FiGithub, skill: 'Git/GitHub', color: '#6cc644' },
  { icon: PiFigmaLogo, skill: 'Figma', color: '#ff7262' },
];

// Experience
export const experienceData = [
  {
    tenure: '2024 - Present',
    category: 'Frontend Developer',
    company: 'Frototype Agency',
  },
  {
    tenure: '2023 - 2024',
    category: 'Frontend Developer',
    company: 'Creative Cycle',
  },
];

// Navigation Social Items
export const navSocialItems = [
  { text: 'LinkedIn', link: urls.linkedin },
  { text: 'GitHub', link: urls.github },
  { text: 'Email', link: urls.email },
];
