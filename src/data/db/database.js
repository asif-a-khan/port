import Mock from "../mock";

const database = {
  information: {
    name: 'Asif Khan',
    aboutContent: "Think of me as Peter Petrelli from the show 'Heroes'. Basically I'm a quick study and can learn anything I need to accomplish my goals. Needless to say, when it comes to developing apps; I promise to deliver and do what excites (:.",
    age: 22,
    phone: '',
    nationality: 'Bengali',
    language: 'English, Bangla, Urdu, Hindi',
    email: '',
    address: 'Toronto',
    freelanceStatus: 'Available',
    socialLinks: {
      facebook: 'https://facebook.com',
      twitter: 'https://twitter.com',
      pinterest: '',
      behance: '',
      linkedin: 'https://www.linkedin.com/in/codedkhan/',
      dribbble: '',
      github: 'https://github.com'
    },
    brandImage: '/images/300.jpg',
    aboutImage: '/images/750.jpg',
    aboutImageLg: '/images/750.jpg',
    cvfile: '/files/asifKhanResume.pdf'
  },
  services: [
    {
      title: "Web Design",
      icon: 'color-pallet',
      details: "Bringing ideas to life using modern design principles. Ensuring the best user experience."
    },
    {
      title: "Web Development",
      icon: 'code',
      details: "Turning stunning designs into responsive and accessible websites. Timeless."
    },
    {
      title: "Mobile Application",
      icon: 'mobile',
      details: "Most digital content is consumed on phones and I will make sure your brand is too."
    }
  ],
  reviews: [
    {
      id: 1,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam, aliquid maxime tempora.",
      author: {
        name: 'Burdette Turner',
        designation: 'Web Developer, Abc Company'
      }
    },
    {
      id: 2,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
      author: {
        name: 'Susan Yost',
        designation: 'Client'
      }
    },
    {
      id: 3,
      content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
      author: {
        name: 'Irving Feeney',
        designation: 'Fiverr Client'
      }
    }
  ],
  skills: [
    {
      title: "HTML5",
      value: 100
    },
    {
      title: "CSS3",
      value: 100
    },
    {
      title: "Javascript",
      value: 100
    },
    {
      title: "jQuery",
      value: 100
    },
    {
      title: "ReactJS",
      value: 100
    },
    {
      title: "Redux",
      value: 100
    },
    {
      title: "React Native",
      value: 100
    },
    {
      title: "Firebase",
      value: 100
    },
    {
      title: "NodeJS",
      value: 100
    },
    {
      title: "ExpressJS",
      value: 100
    },
    {
      title: "MongoDB",
      value: 100
    },
    {
      title: "Python",
      value: 100
    }
  ],
  portfolios: [
    {
      id: 1,
      title: "Pokedex",
      subtitle: "[ HTML5 | CSS3/SASS | JQeury ]",
      imageUrl: "/images/4poke.jpg",
      largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
      url: 'https://calvin-asif-project-4.github.io/calvin-barrett-asif-khan-project-4/',
      github: 'https://github.com/calvin-asif-project-4/calvin-barrett-asif-khan-project-4'
    },
    {
      id: 2,
      title: "Zoltar's Maze",
      subtitle: "[ HTML5 | CSS3/SASS | ES6+ Javascript | ReactJS  ]",
      imageUrl: "/images/4zolt.jpg",
      largeImageUrl:"/images/4zolt.jpg",
      url: 'https://barrie-tenal-prachi-asif-project-6.github.io/barrie-tenal-prachi-asif-project-6/#/',
      github: 'https://github.com/barrie-tenal-prachi-asif-project-6/barrie-tenal-prachi-asif-project-6'
    },
    {
      id: 3,
      title: "Coded Gmail (Desktop)",
      subtitle: "[ HTML5 | CSS3/SASS | ES6+ Javascript | ReactJS | Firebase ]",
      imageUrl: "/images/4gmail.jpg",
      largeImageUrl: "/images/portfolio-image-2.jpg",
      url: 'https://codedgmail.netlify.app/',
      github: 'https://github.com/asif-a-khan/codedGmail'
    },
    {
      id: 4,
      title: "Coded Snaps (Desktop)",
      subtitle: "[ HTML5 | CSS3/SASS | ES6+ Javascript | ReactJS | Firebase ]",
      imageUrl: "/images/4snap.jpg",
      largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
      url: 'https://codedsnaps.netlify.app/',
      github: 'https://github.com/asif-a-khan/codedSnaps'
    },
    {
      id: 5,
      title: "Coded Signal (Mobile) (Contact For Demo)",
      subtitle: "[ ES6+ Javascript | React Native | Firebase ]",
      imageUrl: "/images/4signal.jpg",
      largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
      url: 'https://twitter.com/CodedKhan/status/1356054712068550656?s=20',
      github: 'https://github.com/asif-a-khan/codedSignal'
    },
    {
      id: 6,
      title: "Pendrive",
      subtitle: "Free pendrive mockup design.",
      imageUrl: "/images/slack.jpg",
      largeImageUrl: ["/images/portfolio-image-6-lg.jpg"],
      url: 'https://codedslack.netlify.app/',
      github: 'https://github.com/asif-a-khan/codedSlack'
    },
    // {
    //   id: 7,
    //   title: "Beautiful Pendrive",
    //   subtitle: "Pendrive with great design & flexible.",
    //   imageUrl: "/images/portfolio-image-7.jpg",
    //   largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
    //   url: 'https://twitter.com'
    // },
    // {
    //   id: 8,
    //   title: "Sticker",
    //   subtitle: "Clip sticker mockup design.",
    //   imageUrl: "/images/portfolio-image-8.jpg",
    //   largeImageUrl: ["/images/portfolio-image-8-lg.jpg"]
    // },
    // {
    //   id: 9,
    //   title: "Packet",
    //   subtitle: "Beautiful packet & product design.",
    //   imageUrl: "/images/portfolio-image-9.jpg",
    //   largeImageUrl: ["/images/portfolio-image-9-lg.jpg"]
    // },
    // {
    //   id: 10,
    //   title: "Pen Holder",
    //   subtitle: "A pen holder with beautiful design.",
    //   imageUrl: "/images/portfolio-image-3.jpg",
    //   largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
    //   url: '#'
    // },
    // {
    //   id: 11,
    //   title: "Coffee Mug",
    //   subtitle: "Awesome coffee mug design.",
    //   imageUrl: "/images/portfolio-image-4.jpg",
    //   largeImageUrl: [
    //     "/images/portfolio-image-4-lg.jpg",
    //     "/images/portfolio-image-4-lg2.jpg"
    //   ],
    //   url: 'https://facebook.com'
    // },
    // {
    //   id: 12,
    //   title: "Tea & Coffee Mug",
    //   subtitle: "Beautiful mug with logo.",
    //   imageUrl: "/images/portfolio-image-2.jpg",
    //   url: 'https://pinterest.com'
    // },
    // {
    //   id: 13,
    //   title: "T-shirt Mockup",
    //   subtitle: "A beautiful t-shirt mockup.",
    //   imageUrl: "/images/portfolio-image-1.jpg",
    //   largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
    //   url: 'https://dribbble.com'
    // },
    // {
    //   id: 14,
    //   title: "Mug",
    //   subtitle: "Mug with awesome style",
    //   imageUrl: "/images/portfolio-image-5.jpg",
    //   largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    // },
    // {
    //   id: 15,
    //   title: "Pendrive",
    //   subtitle: "Free pendrive mockup design.",
    //   imageUrl: "/images/portfolio-image-6.jpg",
    //   largeImageUrl: ["/images/portfolio-image-6-lg.jpg"]
    // },
    // {
    //   id: 16,
    //   title: "Beautiful Pendrive",
    //   subtitle: "Pendrive with great design & flexible.",
    //   imageUrl: "/images/portfolio-image-7.jpg",
    //   largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
    //   url: 'https://twitter.com'
    // },
    // {
    //   id: 17,
    //   title: "Sticker",
    //   subtitle: "Clip sticker mockup design.",
    //   imageUrl: "/images/portfolio-image-8.jpg",
    //   largeImageUrl: ["/images/portfolio-image-8-lg.jpg"]
    // },
    // {
    //   id: 18,
    //   title: "Packet",
    //   subtitle: "Beautiful packet & product design.",
    //   imageUrl: "/images/portfolio-image-9.jpg",
    //   largeImageUrl: ["/images/portfolio-image-9-lg.jpg"]
    // },
    // {
    //   id: 19,
    //   title: "T-shirt Mockup",
    //   subtitle: "A beautiful t-shirt mockup.",
    //   imageUrl: "/images/portfolio-image-1.jpg",
    //   largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
    //   url: 'https://dribbble.com'
    // },
    // {
    //   id: 20,
    //   title: "Coffee Mug",
    //   subtitle: "Awesome coffee mug design.",
    //   imageUrl: "/images/portfolio-image-4.jpg",
    //   largeImageUrl: [
    //     "/images/portfolio-image-4-lg.jpg",
    //     "/images/portfolio-image-4-lg2.jpg"
    //   ],
    //   url: 'https://facebook.com'
    // },
    // {
    //   id: 21,
    //   title: "Tea & Coffee Mug",
    //   subtitle: "Beautiful mug with logo.",
    //   imageUrl: "/images/portfolio-image-2.jpg",
    //   url: 'https://pinterest.com'
    // },
    // {
    //   id: 22,
    //   title: "Pen Holder",
    //   subtitle: "A pen holder with beautiful design.",
    //   imageUrl: "/images/portfolio-image-3.jpg",
    //   largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
    //   url: '#'
    // },
    // {
    //   id: 23,
    //   title: "Mug",
    //   subtitle: "Mug with awesome style",
    //   imageUrl: "/images/portfolio-image-5.jpg",
    //   largeImageUrl: ["/images/portfolio-image-5-lg.jpg"]
    // }
  ],
  experience: {
    workingExperience: [
      // {
      //   id: 1,
      //   year: "2020 - 2021",
      //   position: "Frontend Web Developer",
      //   company: "Abc Company",
      //   details: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro."
      // },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2020 - 2021",
        graduation: "Web Development Immersive",
        university: "Juno College of Technology",
        details: "12 week intensive bootcamp focused in react development. Students are expected to develop projects from scratch every week in order to master HTML/CSS/Javascript fundamentals."
      },
      {
        id: 2,
        year: "2018 - Current",
        graduation: "Honours Bachelor of Science (In Progress)",
        university: "University of Toronto",
        details: "4 year honours program majoring in computer science and minoring in statistics. Took a break in my sophomore year to pursue an education in web/native app development."
      },
      {
        id: 3,
        year: "2012 - 2016",
        graduation: "High School",
        university: "Castlebrooke Secondary School",
        details: "Standard secondary school diploma with a focus in: Calculus, physics, chemistry, biology, robotics and computer engineering."
      }
    ]
  },
  blogs: [
    // {
    //   id: 1,
    //   title: 'Markdown & Html supported blog.',
    //   featuredImage: '/images/blog-image-1.jpg',
    //   filesource: '../../blog/markdown-html-supported-blog.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 2,
    //   title: 'Installing NodeJS on your device.',
    //   featuredImage: '/images/blog-image-2.jpg',
    //   filesource: '../../blog/installing-nodejs-on-your-device.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 3,
    //   title: 'UI/UX design starter with Adobe XD.',
    //   featuredImage: '/images/blog-image-3.jpg',
    //   filesource: '../../blog/uiux-design-starter-with-adobe-xd.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 4,
    //   title: 'Boost your post for increasing sales.',
    //   featuredImage: '/images/blog-image-4.jpg',
    //   filesource: '../../blog/boost-your-post-for-increasing-sales.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 5,
    //   title: 'Difference between GatsbyJS & NextJS.',
    //   featuredImage: '/images/blog-image-5.jpg',
    //   filesource: '../../blog/difference-between-gatsbyjs-and-nextjs.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 6,
    //   title: 'How to choose javascript framework for project.',
    //   featuredImage: '/images/blog-image-6.jpg',
    //   filesource: '../../blog/how-to-choose-javascript-framework-for-project.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 7,
    //   title: 'Web automation with python language.',
    //   featuredImage: '/images/blog-image-7.jpg',
    //   filesource: '../../blog/web-automation-with-python-language.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 8,
    //   title: 'Time to use latest technology for creating a website.',
    //   featuredImage: '/images/blog-image-8.jpg',
    //   filesource: '../../blog/time-to-use-latest-technology-for-creating-a-website.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 9,
    //   title: 'Think out of the box.',
    //   featuredImage: '/images/blog-image-9.jpg',
    //   filesource: '../../blog/think-out-of-the-box.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 10,
    //   title: 'Trending designs in 2020.',
    //   featuredImage: '/images/blog-image-1.jpg',
    //   filesource: '../../blog/trending-designs-in-2020.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 11,
    //   title: 'How to get 10k instagram followers?',
    //   featuredImage: '/images/blog-image-2.jpg',
    //   filesource: '../../blog/how-to-get-10k-instagram-followers.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 12,
    //   title: 'What NodeJS can do?',
    //   featuredImage: '/images/blog-image-3.jpg',
    //   filesource: '../../blog/what-nodejs-can-do.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 13,
    //   title: 'Futures of javascript.',
    //   featuredImage: '/images/blog-image-4.jpg',
    //   filesource: '../../blog/future-of-javascript.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 14,
    //   title: 'Popular javascript library in 2020.',
    //   featuredImage: '/images/blog-image-5.jpg',
    //   filesource: '../../blog/popular-javascript-library-in-2020.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // },
    // {
    //   id: 15,
    //   title: 'Promrammers must read books.',
    //   featuredImage: '/images/blog-image-6.jpg',
    //   filesource: '../../blog/programmers-must-read-books.md',
    //   createDay: "20",
    //   createMonth: 'February',
    //   createYear: "2020"
    // }
  ],
  contactInfo: {
    phoneNumbers: ['+012-3456-7891', '+012-3456-7892'],
    emailAddress: ['thecodedkhan@gmail.com', 'asif-khan@viberant.ca'],
    address: "Bayview VIllage, Toronto ON, M2K"
  }
}


Mock.onGet("/api/information").reply(config => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply(config => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply(config => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply(config => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply(config => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply(config => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply(config => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply(config => {
  const response = database.contactInfo;
  return [200, response];
});