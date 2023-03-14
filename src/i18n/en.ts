export default {
  email: "Email",
  website: "SalHe's Home",
  blog: "Blog",
  theme: {
    dark: "Dark",
    light: "Light",
  },
  profile: {
    realName: "SalHe Li",
    nickName: "SalHe",
    slogan: "I wanna be free.",
    description:
      "A university student majoring in Computer Science in Wuhan University. Prefer some classic games such as Bomber-Man, Contra and Metal Slug. Dream to be a developer with enthusiasm and without constrain.",
    major: "Computer Science",
    school: "Wuhan University",
    location: "China",
  },
  skills: {
    $: "Skills",
    languages: "Languages",
    platforms: "Platforms",
    frameworks: "Frameworks",
    ides: "IDEs",
    systems: "Systems",
  },
  projects: {
    $: "Projects",
    album: {
      ebuild: {
        name: "ebuild",
        description:
          "A build tool for EPL, based on ECL and E2TXT, purely written in C# (in Go previously). Aimed to automate the building process, assist the VCS/Diff, manage the sources file for EPL. It's well documented and friendly for beginner.",
      },

      "qiaqia-course": {
        name: "Qiaqia Course System",
        description: `This project is for one course in Wuhan University. Although it's a project for study, it's built on many modern technologies.
        Such as web api based on Gin and Golang and on Spring (not completed due to lack of time), web ui based on Vue3/Vuex4/Vite (you can explorer our web ui here ). Besides, Docker deployment is supported.
        If you want to learn more about this project, you can go to its online document.`,
        links: {
          "go-backend": "Backend based on Gin/Gorm",
          "vue3-front-end": "Web UI Source Code(Vue3/Vuex/Vite)",
          "docker-support": "Docker Support",
          "online-document": "Document Online",
          "online-ui": "Web UI Online",
          "spring-backend": "Backend based on Spring(Not completed due to time)",
        },
      },

      animals12: {
        name: "Animals 12",
        description: "A mini chess game for fun, in honor of childhood.",
        links: {
          "online-play": "Play",
        },
      },

      "clever-bar": {
        name: "CleverBar",
        description: "A utility which can quickly toggle Auto Hide Task without opening Taskbar Settings.        ",
      },
    },
  },
};
