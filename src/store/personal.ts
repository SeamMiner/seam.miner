const personalState = {
  skills: [
    "TypeScript",
    "Vue 2/3",
    "Vuex",
    "Sass",
    "Django",
    "Node.js",
    "Mongo DB",
  ],
  links: {
    GitHub: "https://github.com/SeamMiner",
    Telegram: "https://t.me/SeamMiner",
    Mail: "mailto:niatit130@gmail.com",
    Upwork: "https://www.upwork.com/freelancers/~01a9e70f463182bc82",
  },
  projects: [
    {
      description: "Web Paint is a minimalistic graphics editor on the web.",
      specialty: "Front-end, programming",
      img: "WP.svg",
      dateStart: "2021",
      type: "Long-time project",
      link: "https://webpaint.app/",
      id: "wp"
    },
    {
      description:
        "Typing School is minimalistic keyboard trainer to practice touch typing skill.",
      specialty: "Front-end, programming",
      img: "TS.svg",
      dateStart: "2020",
      type: "Long-time project",
      link: "https://typing.school/",
      id: "ts"
    },
    {
      description: "Leaders of Digitals: Final 2021",
      specialty: "Front-end, programming",
      img: "LOD.svg",
      dateStart: "2021",
      dateEnd: "2021",
      type: "Hackathon",
      link: "https://github.com/dipuzyrev/tim",
      id: "LODFinal"
    },
    {
      description: "Leaders of Digitals: Helath and Science",
      specialty: "Front-end, programming",
      img: "LOD.svg",
      dateStart: "2021",
      dateEnd: "2021",
      type: "Hackathon",
      link: "https://github.com/dipuzyrev/mbp",
      id: "LODHS"
    },
  ],
};

const personalModule = {
  namespaced: true,

  state: personalState,
};

export { personalModule };
