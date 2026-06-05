import {
  htmlIcon, cssIcon, jsIcon, reactIcon,
  tailwindIcon, nodeIcon, mongoIcon, pythonIcon,
  gitIcon, figmaIcon, djangoIcon, flutterIcon,
  cIcon, cppIcon, javaIcon, mysqlIcon,
  githubIcon, canvaIcon, fastapiIcon, tensorflowIcon,
} from './SkillIcons';

// Skills placed on orbits — orbit 1 = innermost, orbit 6 = outermost
// Angles are randomised across the full 360° to give a natural scattered look
export const skills = [
  // Orbit 1 — innermost
  { icon: tailwindIcon,   name: 'Tailwind',     orbit: 1, angle: 60   },
  { icon: figmaIcon,      name: 'Figma',        orbit: 1, angle: 200  },
  { icon: flutterIcon,    name: 'Flutter',      orbit: 1, angle: 330  },

  // Orbit 2
  { icon: nodeIcon,       name: 'Node.js',      orbit: 2, angle: 30   },
  { icon: mongoIcon,      name: 'MongoDB',      orbit: 2, angle: 165  },
  { icon: djangoIcon,     name: 'Django',       orbit: 2, angle: 290  },

  // Orbit 3
  { icon: reactIcon,      name: 'React',        orbit: 3, angle: 10   },
  { icon: jsIcon,         name: 'JavaScript',   orbit: 3, angle: 130  },
  { icon: pythonIcon,     name: 'Python',       orbit: 3, angle: 250  },

  // Orbit 4
  { icon: htmlIcon,       name: 'HTML5',        orbit: 4, angle: 0    },
  { icon: cssIcon,        name: 'CSS3',         orbit: 4, angle: 95   },
  { icon: gitIcon,        name: 'Git',          orbit: 4, angle: 190  },
  { icon: javaIcon,       name: 'Java',         orbit: 4, angle: 285  },

  // Orbit 5
  { icon: cIcon,          name: 'C',            orbit: 5, angle: 20   },
  { icon: cppIcon,        name: 'C++',          orbit: 5, angle: 110  },
  { icon: mysqlIcon,      name: 'MySQL',        orbit: 5, angle: 200  },
  { icon: fastapiIcon,    name: 'FastAPI',      orbit: 5, angle: 300  },

  // Orbit 6 — outermost
  { icon: githubIcon,     name: 'GitHub',       orbit: 6, angle: 50   },
  { icon: canvaIcon,      name: 'Canva',        orbit: 6, angle: 150  },
  { icon: tensorflowIcon, name: 'TensorFlow',   orbit: 6, angle: 250  },
];

// Categorised showcase for the expanded "Explore Skills" grid
export type SkillCategory = {
  category: string;
  skills: { img: string; name: string }[];
};

export const showcaseCategories: SkillCategory[] = [
  {
    category: 'Languages',
    skills: [
      { img: htmlIcon,       name: 'HTML5'       },
      { img: cssIcon,        name: 'CSS3'        },
      { img: jsIcon,         name: 'JavaScript'  },
      { img: pythonIcon,     name: 'Python'      },
      { img: cIcon,          name: 'C'           },
      { img: cppIcon,        name: 'C++'         },
      { img: javaIcon,       name: 'Java'        },
    ],
  },
  {
    category: 'Frameworks & Libraries',
    skills: [
      { img: reactIcon,      name: 'React'       },
      { img: tailwindIcon,   name: 'Tailwind CSS'},
      { img: nodeIcon,       name: 'Node.js'     },
      { img: djangoIcon,     name: 'Django'      },
      { img: fastapiIcon,    name: 'FastAPI'     },
      { img: flutterIcon,    name: 'Flutter'     },
      { img: tensorflowIcon, name: 'TensorFlow'  },
    ],
  },
  {
    category: 'Databases',
    skills: [
      { img: mongoIcon,      name: 'MongoDB'     },
      { img: mysqlIcon,      name: 'MySQL'       },
    ],
  },
  {
    category: 'Tools & Design',
    skills: [
      { img: gitIcon,        name: 'Git'         },
      { img: githubIcon,     name: 'GitHub'      },
      { img: figmaIcon,      name: 'Figma'       },
      { img: canvaIcon,      name: 'Canva'       },
    ],
  },
];

// Flat list kept for backward compatibility if anything else imports it
export const showcaseSkills = showcaseCategories.flatMap(c => c.skills);
