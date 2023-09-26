import { nanoid } from 'nanoid'
import { type Resume } from 'shared/lib/resume/type'

export const resume: Resume = {
    firstName: 'Viktor',
    lastName: 'Dzyuba',
    position: 'Full Stack Developer',
    email: 'viktan13@gmail.com',
    address: 'Palatine, IL',
    linkedIn: 'https://www.linkedin.com/in/viktor-dzyuba',
    summary: 'Full stack developer with 5 years of experience in designing, building, and maintaining web applications.\n' +
        'Managed projects from initial planning through deployment and maintenance.\n' +
        'Adept at keeping pace with the latest industry advances through continued learning and up-skilling.\n' +
        'Utilized modern technologies and best practices to build innovative solutions that create value for\n' +
        'organizations.\n' +
        'Initiated and implemented the creation of custom roles and permissions for the application to improve\n' +
        'the product accessibility and security.\n' +
        'Executed a seamless migration from Rest API architecture to Apollo GraphQL, significantly\n' +
        'improving development efficiency, code generation, and operational speed.\n' +
        'Knowledgeable in Agile development methodologies and test-driven development.\n' +
        'Known for strong analytical abilities, collaboration skills, and commitment to writing clean,\n' +
        'maintainable, and well-tested code.',
    skillsPage: {
        intro: 'I excel in JavaScript, the cornerstone of modern web development. Proficient in React, I build dynamic and interactive user interfaces. I leverage Redux to efficiently manage complex application states. My expertise extends to Next.js for server-rendered React applications. I am skilled in working with RESTful and GraphQL APIs. My stack is always evolving, and I\'m dedicated to learning beyond my work environment.',
        skills: [
            {
                id: nanoid(),
                skill: 'Javascript',
                range: 90,
                color: 'rgba(199, 152, 34, 0.91)',
                icon: 'RiJavascriptLine',
                moduleSpecifier: 'react-icons/ri'
            },
            {
                id: nanoid(),
                skill: 'Typescript',
                range: 75,
                color: 'blue',
                icon: 'BiLogoTypescript',
                moduleSpecifier: 'react-icons/bi'
            },
            {
                id: nanoid(),
                skill: 'React',
                range: 80,
                color: 'cornflowerblue',
                icon: 'FaReact',
                moduleSpecifier: 'react-icons/fa'
            },
            {
                id: nanoid(),
                skill: 'Mongo',
                range: 70,
                color: 'green',
                icon: 'SiMongodb',
                moduleSpecifier: 'react-icons/si'
            },
            {
                id: nanoid(),
                skill: 'NodeJS',
                range: 65,
                color: 'darkgreen',
                icon: 'GrNode',
                moduleSpecifier: 'react-icons/gr'
            },
            {
                id: nanoid(),
                skill: 'Express',
                range: 80,
                color: 'black',
                icon: 'SiExpress',
                moduleSpecifier: 'react-icons/si'
            },
            {
                id: nanoid(),
                skill: 'CSS',
                range: 75,
                color: 'darkblue',
                icon: 'BsFiletypeCss',
                moduleSpecifier: 'react-icons/bs'
            },
            {
                id: nanoid(),
                skill: 'HTML',
                range: 85,
                color: 'darkred',
                icon: 'AiFillHtml5',
                moduleSpecifier: 'react-icons/ai'
            },
            {
                id: nanoid(),
                skill: 'Apollo GraphQL',
                range: 85,
                color: 'rgb(205,56,205)',
                icon: 'GrGraphQl',
                moduleSpecifier: 'react-icons/gr'
            }
        ]
    },
    experience: {
        companies: [
            {
                name: 'Hertz Services Inc',
                location: 'San Jose, CA',
                position: 'Full Stack Developer',
                start: {
                    month: 'November',
                    year: '2021'
                },
                stillWorking: true,
                achievements: [
                    'Developing and maintaining web applications using JavaScript, TypeScript, React, UmiJS\n' +
                    'framework, Node.js, Apollo GraphQL, Express.js, Material UI, CSS, MongoDB, Lodash, Yup\n' +
                    'validator, React-hook-form, Bcrypt.',
                    'Implemented automated testing procedures using Jest and React Testing Library. Developed and\n' +
                    'maintained unit tests to ensure code quality.',
                    'Reduced server requests by 40% using Apollo GraphQL caching feature.',
                    'Collaborated with other developers on fixing critical bugs and resolving complex application\n' +
                    'issues.',
                    'Refactored code in the process of transition from RESTful API requests to Apollo GraphQL for\n' +
                    'improving data efficiency and flexibility.',
                    'Initiated and implemented the infinite scroll feature combined with the virtualization\n' +
                    'technology to dynamically display the rapidly increasing number of users.',
                    'Integrated Google Maps API to enable Google autocomplete functionality and reduce\n' +
                    'address entry errors by 15%',
                    'Created a reusable library of components and UI web pages using JavaScript web\n' +
                    'technologies, specializing in ReactJS, resulting in a 40% reduction in development\n' +
                    'time',
                    'Constantly collaborating with colleagues to achieve higher standards, resulting in more robust\n' +
                    'and sustainable codebases.',
                    'Mentored 2 junior front-end developers and helped them become productive team members\n' +
                    'within 3 months.',
                    'Consistently delivering features aligned to business needs and technical specifications.'
                ]
            },
            {
                name: 'DigitalVertex Enterprises',
                location: 'Atlanta, GA',
                position: 'Front-End Developer',
                start: {
                    month: 'July',
                    year: '2018'
                },
                end: {
                    month: 'November',
                    year: '2021'
                },
                stillWorking: false,
                achievements: [
                    'Contributed extensive improvements to core framework codebase addressing bugs, defects, and\n' +
                    'technical debt.',
                    'Implemented user authentication and registration using JWT, encrypted user\n' +
                    'passwords with Bcrypt for enhanced security',
                    'Developed custom React hooks that promote clean, maintainable, and reusable code. Extracted\n' +
                    'complicated logic into reusable hooks with well-defined interfaces. This abstraction reduced\n' +
                    'redundant code and improved overall readability.',
                    'Added unit tests for all new features; consistently maintaining company standard of 80% test\n' +
                    'coverage for all projects.',
                    'Reliably met all sprint goals and deadlines, shipping defect-free code aligned to project\n' +
                    'specifications. My solutions adhered to established quality standards and technical\n' +
                    'requirements while upholding coding best practices.'
                ]
            }
        ]
    },
    education: [
        {
            university: 'Chernivtsi National University',
            degree: 'Master\'s Degree',
            country: 'Ukraine'
        }
    ]
}
