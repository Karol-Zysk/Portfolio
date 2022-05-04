import { AiOutlineAntDesign, AiOutlineApi } from 'react-icons/ai';
import { BsCircleFill } from 'react-icons/bs';
import { FaServer } from 'react-icons/fa';
import { MdDeveloperMode } from 'react-icons/md';
import { RiComputerLine } from 'react-icons/ri';

import { IProject, Service, Skill } from '../../type';

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: 'Frontend Development',
    about:
      'I can build a beautiful and scalable SPA using <b> HTML</b>,<b>CSS</b>   and <b>React.js</b> ',
  },
  {
    Icon: FaServer,
    title: 'Backend  Development',
    about:
      'handle database, server, api using <b>Express </b> & other popular frameworks',
  },
  {
    Icon: AiOutlineApi,
    title: 'API Development',
    about:
      'I can develop robust  REST API using <b>django-rest-api</b>  & <b>Node API</b> ',
  },
  {
    Icon: MdDeveloperMode,
    title: 'Competitive Coder',
    about: 'a daily problem solver in <b>HackerRank</b>  and <b>Leet Code</b> ',
  },
  {
    Icon: AiOutlineAntDesign,
    title: 'UI/UX designer',
    about:
      'stunning user interface designer using <b>Figma</b>  and  <b>Framer</b> ',
  },
  {
    Icon: RiComputerLine,
    title: 'Whatever',
    about:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!',
  },
];

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: 'Python',
    level: '45%',
  },
  {
    Icon: BsCircleFill,
    name: 'Java Script',
    level: '60%',
  },
  {
    Icon: BsCircleFill,
    name: 'React Native',
    level: '80%',
  },
  {
    Icon: BsCircleFill,
    name: 'React',
    level: '70%',
  },
  {
    Icon: BsCircleFill,
    name: 'Django',
    level: '80%',
  },
  {
    Icon: BsCircleFill,
    name: 'Bootstrap',
    level: '80%',
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: 'Figma',
    level: '85%',
  },
  {
    Icon: BsCircleFill,
    name: 'Photoshop',
    level: '45%',
  },
  {
    Icon: BsCircleFill,
    name: 'Illustrator',
    level: '60%',
  },
  {
    Icon: BsCircleFill,
    name: 'Framer',
    level: '45%',
  },
];

export const projects: IProject[] = [
  {
    name: 'Journey Advisor',
    description:
      'This app shows a statistical view about corona virus over the world',
    image_path: '/images/maps.png',
    deployed_url: 'https://covid-19-tracker-by-sumit.web.app/',
    github_url: 'https://github.com/Dey-Sumit/covid-19-tracker',
    category: ['React', 'Typescript'],
    key_techs: [
      'React',
      'Typescript',
      'Google maps API',
      'REST API',
      'Chakra UI',
    ],
  },
  {
    name: 'Strength Bible',
    image_path: '/images/sb.png',
    deployed_url: 'https://visual-algorithm.web.app/',
    github_url: 'https://github.com/Dey-Sumit/algorithm-visualizer',
    category: ['React', 'MongoDB', 'Node'],
    description:
      'An web app which shows how an algorithm (path finding or sorting) works with cool animation',
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
    deployed_url: 'https://dev-talks.herokuapp.com/',
    github_url: 'https://github.com/Dey-Sumit/Dev-talks',
    category: ['React'],
    description:
      'Social Media app for developers who can share project,create posts,etc...',
    key_techs: [
      'React',
      'Styled-Components',
      'React-Router',
      'React-Scroll',
      'REST API',
    ],
  },

  {
    name: 'E-comerce',
    image_path: '/images/ecomerce.png',
    deployed_url: 'https://sumit-chat.netlify.app/',
    github_url: 'https://github.com/Dey-Sumit/chat-app-socket.io-react-node',
    category: ['React', 'Node', 'MongoDB'],
    description:
      'Basic Realtime Chat App where one can create a room can talk to each other',
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
    deployed_url: 'http://sumaxtweetme.pythonanywhere.com/',
    github_url: 'https://github.com/Dey-Sumit/tweetme',
    category: ['React', 'Typescript'],
    description:
      'First Django Project :) | Typical Social Media App where one can post,like ,comment etc',
    key_techs: ['React', 'Typescript', 'REST API', 'Styled-Components'],
  },

  {
    name: 'SmallGym',
    image_path: '/images/smallgym.png',
    deployed_url: '!#',
    github_url: 'https://github.com/Dey-Sumit/color-classification',
    category: ['React'],
    description:
      'Tried ML with JS :) | this app classifies a color using CNN algorithm in browser',
    key_techs: ['React', 'Styled-Components', 'React-Router'],
  },
  {
    name: "Kaja's Vocabulary",
    image_path: '/images/vocab.png',
    deployed_url: 'https://not-utube.web.app/',
    github_url: 'https://github.com/Dey-Sumit/youtube-clone-tutorial-up',
    category: ['JavaScript'],
    description:
      'Full(almost) Functional YouTube replica where one can login with his/her youtube account to enjoy "not-YouTube".User can like a video,comment on a video & Much More ',
    key_techs: ['JavaScript'],
  },
  {
    name: 'Astro',
    image_path: '/images/astro.png',
    deployed_url: 'https://o-my-goal.web.app/',
    github_url: 'https://github.com/Dey-Sumit/football-app',
    category: ['JavaScript'],
    description:
      'o my goal replica where an user can keep an eye on his favorite club.This app will keep providing \n all the statistics of that club.all the fans can also chat ',
    key_techs: ['JavaScript'],
  },
];