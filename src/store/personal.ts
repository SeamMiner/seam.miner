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
      id: "wp",
    },
    {
      description:
        "Typing School is minimalistic keyboard trainer to practice touch typing skill.",
      specialty: "Front-end, programming",
      img: "TS.svg",
      dateStart: "2020",
      type: "Long-time project",
      link: "https://typing.school/",
      id: "ts",
    },
    {
      description: "Typing School Promo Website",
      specialty: "Front-end, programming",
      img: "TS.svg",
      dateStart: "2020",
      type: "Long-time project",
      link: "https://seamminer.github.io/ts_front_only/",
      id: "tsOld",
    },
    {
      description: "Leaders of Digitals: Final 2021",
      specialty: "Front-end, programming",
      img: "LOD.svg",
      dateStart: "2021",
      dateEnd: "2021",
      type: "Hackathon",
      link: "https://github.com/dipuzyrev/tim",
      id: "LODFinal",
    },
    {
      description: "Leaders of Digitals: Helath and Science",
      specialty: "Front-end, programming",
      img: "LOD.svg",
      dateStart: "2021",
      dateEnd: "2021",
      type: "Hackathon",
      link: "https://github.com/dipuzyrev/mbp",
      id: "LODHS",
    },
    {
      description:
        "VK Hackathon «Vezdekod»: Prize-winning place in the 2-week hackathon of the social network Vkontakte.",
      specialty: "Front-end, Back-end",
      img: "VK.svg",
      dateStart: "2020",
      dateEnd: "2020",
      type: "Hackathon",
      id: "VK",
    },
    {
      description:
        "Hackathon «MIET University»: 1st place in the 48-hour hackathon of MIET University in the case of HERE technologies",
      specialty: "Front-end, programming",
      img: "MIET.svg",
      dateStart: "2020",
      dateEnd: "2020",
      type: "Hackathon",
      id: "MIET",
    },
  ],
};

const personalModule = {
  namespaced: true,

  state: personalState,
};

export { personalModule };
