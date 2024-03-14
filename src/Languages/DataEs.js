export const sections = {
  Home: "Home",
  Experience: "Experiencia",
  Education: "Educación",
  Skills: "Habilidades",
  Projects: "Proyectos",
  ContactMe: "Contacto"
}

export const data = {
  email:"vertizcar@gmail.com",
  personalIformation : 
  {
    name: "Carlos Vertiz",
    profesion: "Programador Full Stack",
    aboutMe: `Soy un ingeniero con amplio conocimiento informático. Estoy constantemente profundizando mis conocimientos y aprendiendo nuevas tecnologías. Mi experiencia abarca desde proyectos personales hasta proyectos de terceros, donde he utilizado una gran variedad de herramientas, incluyendo JavaScript, Python y MySQL.`,
    photo: "/myimagen.jpeg"
  },

  educations : 
  [
    {
      title:"Ingeniero en materiales",
      place:"Universidad Nacional del Litoral",
      dateInt:"2016",
      dateEnd:"2021",
    },
    {
      title:"Curso de Metodologias agiles - Scrum",
      place: "Universidad Tecnológica Nacional",
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
      title: "Curso de Python",
      place: "Universidad Nacional de San Martin",
      dateInt: "2020",
      dateEnd: "",
    },
  ],

  experiences:
  [
    {
      title:"Ingeniero de Producto",
      company:"MECPARTS",
      dateInt:"1/2022",
      dateEnd:"12/2023",
      tasks:["Diseño, desarrollo, mejora e implementacion de productos.",
            "Desarrollo de programas y analisis de datos.",
            "Desarrollo y diseño de herramientas y de matrices para colada de aluminio."]
    },
    {
      title: "Estudio de factibilidad económica - Pasante",
      company: "Polo Tecnologico Constituyente S.A",
      dateInt: "01/2021",
      dateEnd: "04/2021",
      tasks:["Adquisicion de datos, almacenamiento y analisis",
            "Canvas Business Model"]
    },
    {
      title:"Practica extracurricular",
      company: "Instituto de fisica del Litorial",
      dateInt: "01/2019",
      dateEnd: "01/2020",
      tasks:["Desarrollo de aplicaciones con Python, C++ y TCL para automatizar tareas",
            "Simulaciones computacionales de dinámica molecular"]
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
      title: "FreeShop - comercio virtual",
      technologies: ["CSSIcon", "HTMLIcon", "ReactIcon", "NodeIcon", "JavaScriptIcon", "MySQLIcon"],
      links:[
        {name:"Frontend", link:"https://github.com/carlosvertiz/FreeShop-Frontend"},
        {name:"Backend", link:"https://github.com/carlosvertiz/FreeShop-Backend"},
       ],
    },
    {
      imagen: '/PersonalNotebook.png',
      url: "https://thoughtnotebook.netlify.app/",
      title: "Notebook",
      technologies: ["CSSIcon", "HTMLIcon", "ReactIcon", "NodeIcon", "JavaScriptIcon", "MySQLIcon"],
      links:[{name:"Frontend", link:"https://github.com/carlosvertiz/ThoughtPage-Frontend"},{name:"Backend", link:"https://github.com/carlosvertiz/ThoughtPage-Backend"}],
    },
    {
      imagen: '/GameRecomendation.png',
      url: "https://github.com/carlosvertiz/Game-Recommendation-System/blob/main/GameRecomendations_on_Steam.ipynb",
      title: "Sistema de recomendación de juegos",
      technologies: ["PythonIcon", "ScikitLearnIcon", "PandasIcon"],
      links:[{name:"Code", link:"https://github.com/carlosvertiz/Game-Recommendation-System"}],
    },
    {
      imagen: '/PricesAnalysis.png',
      url: "https://github.com/carlosvertiz/Supermarket_prices_DataAnalysis/blob/main/Supermarkets_comparitive_analysis.ipynb",
      title: "Análisis de precios de mercado",
      technologies: ["PythonIcon", "PandasIcon", "NumpyIcon"],
      links:[{name:"Code", link:"https://github.com/carlosvertiz/Supermarket_prices_DataAnalysis"}]
    },
  ],

}