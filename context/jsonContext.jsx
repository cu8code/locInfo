import { createContext, useContext } from "react";

export const jsonContext = createContext(null);

export function JsonContext({ children }) {
  const jsonData = {
    profile: {
      img: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg",
      name: "Dani Schwaiger",
      title: "web Developer",
      number: "123-456-7890",
      email: "danidev@gmail.com",
      location: "123 anywhere",
      website: "danidev.com",
      desription:
        "I am a qualified and professional web developer with five years of expirience in database administration and web design.",
    },
    social: [
      {
        type: "instagram",
        name: "dani_dev",
      },
      {
        type: "github",
        name: "dani_dev",
      },
    ],
    education: {
      school: [
        {
          type: "secondary school",
          name: "Really great high school",
          yearStart: 2002,
          yearEnd: 2014,
        },
      ],
      university: [
        {
          type: "bachelor of technology",
          name: "Really great univesity",
          yearStart: 2014,
          yearEnd: 2018,
        },
      ],
    },
    workExperience: [
      {
        type: "Apllications Developer",
        name: "Really great company 1",
        yearStart: 2018,
        yearEnd: 2019,
        description: [
          "database administration and web design",
          "build the logivc fr straming ad-services paltform that scaled",
          "educational instructions and online classroom management",
        ],
      },
      {
        type: "Web content manager",
        name: "Really great company 2",
        yearStart: 2019,
        yearEnd: 2020,
        description: [
          "build the logivc fr straming ad-services paltform that scaled",
          "database administration and web design",
          "educational instructions and online classroom management",
        ],
      },
      {
        type: "Analysis content",
        name: "Really great company 3",
        yearStart: 2020,
        yearEnd: 2021,
        description: [
          "educational instructions and online classroom management",
          "build the logivc fr straming ad-services paltform that scaled",
          "database administration and web design",
        ],
      },
    ],
    skills: [
      "web design",
      "design thinking",
      "wireframe creation",
      "frontend coding",
      "problem sloving",
      "computer literacy",
      "project management tools",
      "strong communications",
    ],
  }
  return (
    <jsonContext.Provider value={jsonData}>
      {children}
    </jsonContext.Provider>
  )
}

export function useJsonContext() {
  return useContext(jsonContext)
}
