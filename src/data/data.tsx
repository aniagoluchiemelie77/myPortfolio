import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
//import InstagramIcon from '../components/Icon/InstagramIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import StackOverflowIcon from '../components/Icon/StackOverflowIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1a.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2a.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3a.jpg';
//import porfolioImage4 from '../images/portfolio/portfolio-4a.jpg';
//import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6a.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7a.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8a.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9a.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10a.jpg';
//import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic1.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Chiemelie Aniagolu`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I'm a Nigerian based <strong className="text-stone-100">Full Stack Software Engineer</strong>, currently working
        as a freelancer on <strong className="text-stone-100">Upwork.com</strong> helping people build modern,
        web/mobile applications.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://docs.google.com/document/d/16j2nfWu-QlU6v4LW905hXlNHOkJILy_J/edit?usp=sharing&ouid=106918311828747581427&rtpof=true&sd=true',
      text: 'My Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `I'm a full‑stack developer with 4+ years of experience, skilled in JavaScript, HTML, CSS, React, React Native, Next.js, Node.js, and Express.js. I focus on building scalable, user‑centric web and mobile applications with emphasis on improving user experience and web responsiveness.`,
  aboutItems: [
    {label: 'Location', text: 'Warri Delta State, Nigeria', Icon: MapIcon},
    {label: 'Age', text: '23', Icon: CalendarIcon},
    {label: 'Nationality', text: 'Nigerian / Igbo', Icon: FlagIcon},
    {label: 'Interests', text: 'Programming, History, Football', Icon: SparklesIcon},
    {label: 'Study', text: 'Federal University of Petroleum Resources Effurun, Delta State', Icon: AcademicCapIcon},
    {label: 'Employment', text: 'Upwork, inc.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {
        name: 'English',
        level: 10,
      },
      {
        name: 'Chinese',
        level: 2,
      },
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 10,
      },
      {
        name: 'Typescript',
        level: 9,
      },
      {
        name: 'Next.js',
        level: 7,
      },
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Node.js',
        level: 9,
      },
      {
        name: 'Express.js',
        level: 9,
      },
      {
        name: 'Rust',
        level: 5,
      },
      {
        name: 'Golang',
        level: 9,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'React Native',
        level: 10,
      },
      {
        name: 'Flutter',
        level: 6,
      },
      {
        name: 'Swift',
        level: 5,
      },
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Sample Mortgage calculator App',
    description:
      'A web application that allows users to calculate their monthly mortgage payments based on loan amount, interest rate, and loan term.',
    url: 'https://mortgagecalculator1.netlify.app/',
    image: porfolioImage1,
  },
  {
    title: 'iCampus backend scripts',
    description: 'A github repository that contains backend scripts for iCampus edtech web and mobile platform.',
    url: 'https://github.com/aniagoluchiemelie77/iCampus-backendscripts.git',
    image: porfolioImage2,
  },
  {
    title: 'Profile card component',
    description: 'A responsive profile card component built with React and Tailwind CSS.',
    url: 'https://profilecardcomponent1.netlify.app/',
    image: porfolioImage3,
  },
  {
    title: 'Sample PHP Blog Website',
    description:
      'A dynamic blog website built with PHP and MySQL, allowing users to create, edit, and delete blog posts.',
    url: 'https://blog.uniquetechcontentwriter.com/',
    image: porfolioImage6,
  },
  {
    title: 'Music Player sample App',
    description: 'A web application that allows users to play, pause, and skip music tracks from a playlist.',
    url: 'https://media-player-upt.netlify.app/',
    image: porfolioImage7,
  },
  {
    title: 'Food Delivery sample app',
    description: 'A web application that allows users to order, edit, view and pay for food, in real-time.',
    url: 'https://product-cart-functionality.netlify.app/',
    image: porfolioImage8,
  },
  {
    title: 'Sample Javascript Calculator Website',
    description: 'A web application that allows users to perform basic arithmetic operations.',
    url: 'https://javascriptcalculator-1.netlify.app/',
    image: porfolioImage9,
  },
  {
    title: 'iCampus edTech Platform',
    description: 'A Mobile and Web application for educational institutions.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'October 2027',
    location: 'Federal University of Petroleum Resources Effurun',
    title: 'Bachelors Degree in Petroleum Engineering',
    content: <p>Describe your experience at school, what you learned, what useful skills you have acquired etc.</p>,
  },
  {
    date: 'April 2025',
    location: 'Udemy Online Courses',
    title: 'Full Stack React Native: Advanced & Practical Projects by Niraj Dhungana',
    content: <p>Interesting course on React Native development.</p>,
  },
  {
    date: 'February 2024',
    location: 'Udemy Online Courses',
    title: 'The Complete JavaScript course 2024: From Zero to Expert by Jonas Schmedtmann ',
    content: <p>Advanced Javascript course.</p>,
  },
  {
    date: 'March 2023',
    location: 'Udemy Online Courses',
    title: 'Advanced CSS and SASS: Flexbox, Grid, Animations and More by Jonas Schmedtmann ',
    content: <p>Advanced Styling and Animations course.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'March 2023 - Present',
    location: 'www.uniquetechcontentwriter.com',
    title: 'IT Admin and developer',
    content: (
      <p>
        Management of company IT infrastructure (cpanel) and development of company website using HTML, CSS, JavaScript,
        and React.js.
      </p>
    ),
  },
  {
    date: 'April 2025 - August 2025',
    location: 'FlexiSAF Edusoft Limited',
    title: 'Intern Frontend Developer',
    content: (
      <p>
        Collaborated in a team to design and build digital solutions, strengthening analytical and project management
        skills applicable to engineering workflows.
      </p>
    ),
  },
  {
    date: 'March 2023 - Present',
    location: 'www.upwork.com',
    title: 'Verified Freelance Full-stack Software Engineer',
    content: (
      <p>
        Carrying out freelance projects as a full-stack software engineer on Upwork, delivering high-quality web and
        mobile applications to clients worldwide.
      </p>
    ),
  },
  {
    date: 'December 2024 - Present',
    location: 'Leventis Tech Services',
    title: 'Senior Full Stack Software Engineer',
    content: (
      <p>
        Managing and leading the development of scalable mobileand web applications (iCampus edTech), ensuring optimal
        performance and user experience.
      </p>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'Diamaka Aniagolu',
      text: 'Working with Chiemelie has been nothing short of inspiring. His dedication, creativity, and attention to detail consistently shine through in everything he does. He approaches every project with a thoughtful mindset, a strong work ethic, and a genuine passion for delivering quality results. Beyond his technical abilities, Chiemelie brings a calm, collaborative energy that makes working with him both productive and enjoyable. I’m incredibly proud of the professional he has become, and I have no doubt he will continue to excel and make a meaningful impact wherever he goes.',
      image: 'https://res.cloudinary.com/dbdw3zftx/image/upload/v1749839456/uploads/66b7323d0d49dcake42.jpg',
    },
    {
      name: 'Prof. Ofualagba .G',
      text: 'Chiemelie is someone who brings clarity, dedication, and genuine passion to every project he works on. His ability to understand complex ideas, communicate effectively, and deliver high‑quality results makes him an exceptional collaborator. He consistently demonstrates reliability, creativity, and a strong commitment to growth. Anyone who works with him will immediately notice his professionalism and the positive energy he brings to a team..',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Anthonia Aniagolu (Ph.D)',
      text: 'Chiemelie has always carried himself with a quiet strength and a heart full of determination. Watching him grow into the thoughtful, hardworking young man he is today has been one of my greatest joys. He approaches every challenge with patience, humility, and a genuine desire to do his best. His dedication, kindness, and willingness to keep learning make him someone anyone would be blessed to work with. I am incredibly proud of the person he is becoming and the passion he brings into everything he does..',
      image: 'https://res.cloudinary.com/dbdw3zftx/image/upload/v1769350525/Mum_fbofja.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description:
    'Whether you have a question or just want to say hi, I am always open to discussing new projects, creative ideas, or opportunities to be part of your visions.',
  items: [
    {
      type: ContactType.Email,
      text: 'chiboyaniagolu3@gmail.com',
      href: 'mailto:chiboyaniagolu3@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Warri Delta State, Nigeria',
      href: 'https://www.google.ca/maps/place/Victoria,+BC/@48.4262362,-123.376775,14z',
    },
    {
      type: ContactType.LinkedIn,
      text: 'Chiemeie Aniagolu',
      href: 'https://linkedin.com/in/i-am-aniagolu',
    },
    {
      type: ContactType.Github,
      text: 'Aniagolu Chiemelie',
      href: 'https://github.com/aniagoluchiemelie77',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/aniagoluchiemelie77'},
  {
    label: 'Stack Overflow',
    Icon: StackOverflowIcon,
    href: 'https://stackoverflow.com/users/22118314/chiemelie-aniagolu',
  },
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://linkedin.com/in/i-am-aniagolu'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://x.com/vik_chiboy'},
];
