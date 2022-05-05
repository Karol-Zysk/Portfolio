import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { BiGame } from 'react-icons/bi';
import { BsCircleFill } from 'react-icons/bs';
import { FaRegQuestionCircle, FaServer } from 'react-icons/fa';
import { RiComputerLine } from 'react-icons/ri';
import { SiFrontendmentor } from 'react-icons/si';

import { IProject, Service, Skill } from '../../type';

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about: 'I can build a beautiful and scalable SPA using  <b>React.js</b>  ',
  },
  {
    Icon: FaServer,
    title: 'Backend  Development',
    about:
      'Despite the lack of experience, projects using <b>NodeJS</b> interested me very much and I know that I will develop them in the future.',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about: 'Working with <b>API</b> is not work for me, but <b>FUN</b> ',
  },
  {
    Icon: FaRegQuestionCircle,
    title: 'Problem Solver',
    about:
      'Ask how many nights turned into mornings because I <b>had to</b> solve the problem. ',
  },
  {
    Icon: AiOutlineAntDesign,
    title: 'UI/UX design',
    about:
      'Most of the graphics I use I create or edit myself using<b>Photoshop</b>  and  <b>Gimp</b> ',
  },
  {
    Icon: SiFrontendmentor,
    title: 'Contract',
    about: 'Give me a chance and I guarantee you will be satisfied.',
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: 'JavaScript',
    level: '60%',
  },
  {
    Icon: BsCircleFill,
    name: 'React',
    level: '69%',
  },
  {
    Icon: BsCircleFill,
    name: 'TypeScript',
    level: '50%',
  },
  {
    Icon: BsCircleFill,
    name: 'NodeJS',
    level: '30%',
  },
  {
    Icon: BsCircleFill,
    name: 'MongoDB',
    level: '35%',
  },
  {
    Icon: BsCircleFill,
    name: 'NextJS',
    level: '30%',
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: 'Styled-Components',
    level: '75%',
  },
  {
    Icon: BsCircleFill,
    name: 'Gimp',
    level: '65%',
  },
  {
    Icon: BsCircleFill,
    name: 'Figma',
    level: '40%',
  },
  {
    Icon: BiGame,
    name: 'Starcraft 2',
    level: '55%',
  },
  {
    Icon: BiGame,
    name: 'Heroes of Might and Magic III',
    level: '85%',
  },
];

export const projects: IProject[] = [
  {
    name: 'Journey Advisor',
    description:
      'Designate a travel route by car, and the application will calculate when you will get there and what the travel costs will be. Already have all the information? Export them to pdf! Easy!',
    image_path: '/images/maps.png',
    deployed_url: 'https://admirable-mochi-c1e6c8.netlify.app/',
    github_url: 'https://github.com/Karol-Zysk/React-Jurney',
    category: ['React'],
    key_techs: [
      'React',
      'Typescript',
      'Google maps API',
      'REST API',
      'Chakra UI',
      'Styled-Components',
    ],
  },
  {
    name: 'Strength Bible',
    image_path: '/images/sb.png',
    deployed_url: 'https://romantic-ardinghelli-a492fd.netlify.app',
    github_url: 'https://github.com/Karol-Zysk/Strenght-Training-Atlas',
    category: ['React', 'MongoDB', 'Node'],
    description:
      'My first major project in React  when I started writing it, I knew the basics of React. It took me 2 months to develop the project. During this time, I have learned a lot. A page with a dose of knowledge about strength training. Contacts allows you to contact personal trainers via email. Basic contains basic types of strength training with information. Exercises includes many exercises with animation and description. ',
    key_techs: [
      'React',
      'MongoDB',
      'Node',
      'Express',
      'REST API',
      'EmailJS',
      'CSS-Modules',
      'jwt-token',
    ],
  },

  {
    name: 'Kurpie Page',
    image_path: '/images/Kurpie.png',
    deployed_url: 'https://euphonious-tanuki-81762a.netlify.app/',
    github_url: 'https://github.com/Karol-Zysk/Kurpie.com',
    category: ['React'],
    description:
      'Website dedicated to and promoting Kurpie - the region I come from.',
    key_techs: ['React', 'Styled-Components', 'React-Router', 'React-Scroll'],
  },

  {
    name: 'E-comerce',
    image_path: '/images/ecomerce.png',
    deployed_url: 'https://incredible-macaron-c5e6b1.netlify.app/',
    github_url: 'https://github.com/Karol-Zysk/E-Comerce',
    category: ['React', 'Node', 'MongoDB'],
    description:
      'Electronics store project. Created mainly to learn about React Redux in practice.',
    key_techs: [
      'React',
      'Node',
      'Express',
      'MongoDB',
      'Redux',
      'Styled-Components',
      'React-Router',
    ],
  },

  {
    name: 'IT Quiz',
    image_path: '/images/quiz.png',
    deployed_url: 'https://stellar-basbousa-9e821f.netlify.app/',
    github_url: 'https://github.com/Karol-Zysk/React-Typescript-QUIZ--learning',
    category: ['React', 'Typescript', 'MongoDB', 'Node'],
    description:
      'First Typescript / React Project | Computer / Programming quiz with the option of adding the best results.',
    key_techs: ['React', 'Typescript', 'REST API', 'Styled-Components'],
  },

  {
    name: 'SmallGym',
    image_path: '/images/smallgym.png',
    deployed_url: 'https://inquisitive-scone-a3752c.netlify.app/',
    github_url: 'https://github.com/Karol-Zysk/small-gym',
    category: ['React'],
    description:
      'Small Gym Web Page Project. First project with styled components. They are my favorite tool at the moment.',
    key_techs: ['React', 'Styled-Components', 'React-Router'],
  },
  {
    name: 'AgeOfEmpires unit Calculator',
    image_path: '/images/aoe.png',
    deployed_url: 'https://dancing-sprite-c7b78c.netlify.app/',
    github_url: 'https://github.com/Karol-Zysk/Wololo-AoE',
    category: ['React', 'Typescript'],
    description:
      'Age of Empires Units Calculator. If you want to know how many volutes you can buy for a given amount of resources => check!',
    key_techs: ['React', 'Styled-Components', 'TypeScript', 'REST API'],
  },
  {
    name: "Kaja's Vocabulary",
    image_path: '/images/vocab.png',
    deployed_url: 'https://mystifying-neumann-8a322b.netlify.app/',
    github_url: 'https://github.com/Karol-Zysk/Vocabulary-GIT',
    category: ['JavaScript'],
    description:
      "I'm ashamed of the code but this is one of my first projects using JavaScript. I started writing it after the first JavaScript course, and the project was inspired by a gift my daughter got for her first birthday - 'Talking Dictionary'",
    key_techs: ['JavaScript'],
  },
  {
    name: 'Astro',
    image_path: '/images/astro.png',
    deployed_url: 'https://pensive-elion-2a1fee.netlify.app/',
    github_url: 'https://github.com/Karol-Zysk/Astro-Stats',
    category: ['JavaScript'],
    description:
      'One of the first projects after completing the first JavaScript course. If you are curious how much you would weigh on the planets of the solar system, the sun or a black hole => check.',
    key_techs: ['JavaScript', 'TypeScript'],
  },
];
