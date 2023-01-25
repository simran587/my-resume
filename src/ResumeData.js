import homeImage from "./assets/profile-pic.jpg";
// Header section
const headerIds = [
  "home",
  "profile",
  "education",
  "skills",
  "experience",
  "projects",
  
];
const HeaderLinks = [
  {
    linkText: "Home",
    linkID: "home",
    boxIcon: "bx-home",
  },
  {
    linkText: "Profile",
    linkID: "profile",
    boxIcon: "bx-user",
  },
  {
    linkText: "Education",
    linkID: "education",
    boxIcon: "bx-book",
  },
  {
    linkText: "Skills",
    linkID: "skills",
    boxIcon: "bx-receipt",
  },
  {
    linkText: "Experience",
    linkID: "experience",
    boxIcon: "bx-briefcase-alt",
  },
  {
    linkText: "Projects",
    linkID: "Projects",
    boxIcon: "bx-award",
  },
];

//  Left Section Content //
// Home section
const homeData = {
  homeImage,
  homeTitle1: "Simran",
  homeTitle2: "Zaveri",
  homeProfession: "Student",
  homeInformation: [
    {
      text: " Tucker, GA",
      icon: "bx-map",
    },
    {
      text: "simranzaveri97@gmail.com",
      icon: "bx-envelope",
    },
    {
      text: " +1(470)-699-5974",
      icon: "bx-phone",
    },
  ],
};

//  Social Links
const socialLinks = {
  title: "Social",
  links: [
    {
      link: "https://github.com/simran587",
      text: "Simran Zaveri",
      icon: "bxl-gitHub",
    },
    
    {
      link: "https://www.linkedin.com/in/simran-zaveri",
      text: "Simran Zaveri",
      icon: "bxl-linkedin-square",
    },
  ],
};

// Profile Section
const profileData = {
  title: "Profile",
  descriptions: [
    `I am a hard-working, motivated, quick learner with passion for Computer Science. I am looking for an 
    opportunity where I can advance myself, implement my skills, and gain more knowledge, while also being willing to 
    contribute to a team environment and demonstrating positive work ethics that will lead to professional and personal 
    growth. `],
};

// Education Section
const educationData = {
  title: "Education",
  educations: [
    {
      title: "B.S Computer Science, Spring 2023. GPA: 3.70/4.0",
      studies: "Georgia State University",
      year: "2021 - Present",
      line: true,
    },
    {
      title: "A.S Computer Science, 2021. GPA: 3.66/4.0",
      studies: "Georgia State University - Perimeter College",
      year: "2019 - 2021",
      line: false,
    },
  ],
};

// Skills section
const skillsData = {
  title: "Skills",
  
  skills: [
    [`Html`, `Css`, `Javascript` , 'Problem-Solving' ],
    [`React`, `Java`, `Python`, 'Stong Communication'],
  
  ],
};
const logoText = "Simran.";
const menuIcon = "bx-grid-alt";

// comment section




// Right Section Content //

// Projects Data
const projectsData = {
  title: "Projects",
  projects: [
    {
      describe:
     <><li> Created a map API centered website Food Oasis https://simran587.github.io/Food-Oasis/ </li><li> Built a calculator using HTML, CSS, and JavaScript https://simran587.github.io/Calculator/ </li></>
      
    },
  ],
  
};

//  Experience section
const experienceData = {
  title: "Experience",
  experiences: [
    {
      title: " Georgia State University, Dunwoody, Georgia ",
      company: "Student IT Asistant at Creation and Tech Lab, August 2022 - PRESENT",
      describe:
      <><li>  Successfully diagnose and resolve computer hardware and software issues for faculty, staffs, and student  </li>
        <li>  Assist in updating website(s) using standard technologies such as HTML and CSS  </li></> ,
      line: true,
    },
    {
      title: "EINC Biz, Remote",
      company: " Software Developer intern, August 2022 – October 2022",
      describe: 
      <><li> Designed and developed efficient code using React, JavaScript, HTML and CSS </li>
        <li> Created flowcharts and test cases that outlined the steps for a new system and helped to increase the productivity by 10%  </li>
        <li> Worked directly with software engineering team to implement new software  </li></>,
      line: true,
    },

    {
      title: "Georgia State University, Atlanta, Georgia",
      company: "Supplemental Instruction Leader, June 2021-July 2021",
      describe:
        <> <li> Coordinated with teacher and attended weekly meetings </li>
        <li>  Delivered 10+ hours of supplemental instruction per week, resulting in 5% increase in final grade averages for students </li></>,
      line: false,
    },
  ],
};

//  Languages section
const languageData = {
  title: "Languages",
  languages: ["English", "Hindi", "Spanish"],
};



// INTERESTS section
const interestsData = {
  title: "INTERESTS",
  interests: [
    {
      icon: "bxs-plane-alt",
      text: "Travel",
    },
    {
      icon: "bx-fridge",
      text: "Food",
    },
    {
      icon: "bx-heart",
      text: "Hiking",
    },
  ],
};
export {
  HeaderLinks,
  logoText,
  menuIcon,
  homeData,
  socialLinks,
  profileData,
  educationData,
  skillsData,
  projectsData,
  experienceData,
  languageData,
  interestsData,
  headerIds
  
};