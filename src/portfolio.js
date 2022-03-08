const header = {
  // all the properties are optional - can be left empty or deleted
  // homepage: 'https://rajshekhar26.github.io/cleanfolio',
  title: 'CC.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Chao Chen',
  role: 'Junior Software Developer',
  description:
    'I am a recent graduate and I am looking for Junior software engineering roles. I am familiar with Java, JavaScript, and Python, but I am open to any opportunies.',
  resume: 'https://example.com',
  social: {
    linkedin: 'https://linkedin.com',
    github: 'https://github.com',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'GLM Application',
    description:
      'An Android application that manages grocery lists',
    stack: ['Android Studio', 'Java', 'SQLite'],
    sourceCode: 'https://github.com/cchen26/Grocery-List-Manager',
    livePreview: 'https://github.com/cchen26/Grocery-List-Manager',
  },
  {
    name: 'Project 2',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
  {
    name: 'Project 3',
    description:
      'Amet asperiores et impedit aliquam consectetur? Voluptates sed a nulla ipsa officia et esse aliquam',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com',
    livePreview: 'https://github.com',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Java',
  'Android',
  'Eclipse',
  'OOP',
  'JavaScript',
  'React.js',
  'Node.js',
  'REST APIs',
  'HTML',
  'CSS',
  'Python',
  'C++',
  'TSQL',
  'Git',
  'Linux',
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'chaochen234@gmail.com',
}

export { header, about, projects, skills, contact }
