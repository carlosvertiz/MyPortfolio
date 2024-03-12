export const sections = {
  Home: "Home",
  Experience: "Experience",
  Education: "Education",
  Skills: "Skills",
  Projects: "Projects",
  ContactMe: "Contact",
}

export const data = {
  email:"vertizcar@gmail.com",
  personalIformation : 
  {
    name: "Carlos Vertiz",
    profesion: "Full Stack Developer",
    aboutMe: "As an engineer with extensive computer knowledge, I am constantly immersed in learning and training in new technologies. My experience spans both personal and third-party projects, where I have used a wide range of tools, including JavaScript, Python, and SQL, among others.",
    photo: "/myimagen.jpeg"
  },

  educations : 
  [
    {
      title:"Materials Engineer",
      place:"National University of Litoral",
      dateInt:"2016",
      dateEnd:"2021",
    },
    {
      title:"Agile Methodologies - Scrum Course",
      place: "National Techonological University",
      dateInt: "2023",
      dateEnd: "",
    },
    {
      title:"Google Advanced Data Analytics Professional Certificate",
      place: "Coursera",
      dateInt: "2023",
      dateEnd: "",
    },
    {
      title: "Python course",
      place: "National University of San Martin",
      dateInt: "2020",
      dateEnd: "",
    },
  ],

  experiences:
  [
    {
      title:"Product engineer",
      company:"MECPARTS",
      dateInt:"1/2022",
      dateEnd:"12/2023",
      tasks:["Development, design, improvement, and modification of products.",
            "Applications development and data analysis.",
            "Development and design of tools and die for aluminum casting."]
    },
    {
      title: "Economic feasibility study - Intern",
      company: "Polo Tecnologico Constituyente S.A",
      dateInt: "01/2021",
      dateEnd: "04/2021",
      tasks:["Data acquisition, storage and analysis",
            "Canvas Business Model"]
    },
    {
      title:"Extracurricular Practise",
      company: "Instituto de fisica del Litorial",
      dateInt: "01/2019",
      dateEnd: "01/2020",
      tasks:["Application development using Python, C++, and TCL to automate tasks.",
            "Molecular dynamic simulations"]
    }
    ],

  skills: 
  [
    "JavaScriptIcon",
    "PythonIcon", 
    "HTMLIcon", 
    "CSSIcon", 
    "TailWindIcon", 
    "GitHubIcon", 
    "MySQLIcon",
    "NodeIcon", 
    "ReactIcon",
    "AstroIcon",
    "ScikitLearnIcon",
    "PandasIcon",
    "NumpyIcon",
  ],
  projects : [
    {
      imagen: '/FreeShop.png',
      url:"https://freeshoptribute.netlify.app/",
      title: "FreeShop - eCommerce",
      technologies: ["CSSIcon", "HTMLIcon", "ReactIcon", "NodeIcon", "JavaScriptIcon", "MySQLIcon"],
    },
    {
      imagen: '/PersonalNotebook.png',
      url: "https://thoughtnotebook.netlify.app/",
      title: "Notebook",
      technologies: ["CSSIcon", "HTMLIcon", "ReactIcon", "NodeIcon", "JavaScriptIcon", "MySQLIcon"],
    },
    {
      imagen: '/GameRecomendation.png',
      url: "https://github.com/carlosvertiz/Game-Recommendation-System/blob/main/GameRecomendations_on_Steam.ipynb",
      title: "Game Recomendation System",
      technologies: ["PythonIcon", "ScikitLearnIcon", "PandasIcon"],
    },
    {
      imagen: '/PricesAnalysis.png',
      url: "https://github.com/carlosvertiz/Supermarket_prices_DataAnalysis/blob/main/Supermarkets_comparitive_analysis.ipynb",
      title: "Market Prices Analysis",
      technologies: ["PythonIcon", "PandasIcon", "NumpyIcon"],
    },
  ],

}