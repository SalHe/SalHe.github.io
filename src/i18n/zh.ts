export default {
  email: "邮箱",
  website: "SalHe 的主页",
  blog: "博客",
  theme: {
    dark: "暗夜",
    light: "白天",
  },
  profile: {
    realName: "SalHe Li",
    nickName: "SalHe",
    slogan: "我希望能做一些喜欢做的事情。",
    description:
      "对新鲜技术保持好奇心，善于学习新东西，能解决学习、实践中遇到的问题。（由于这份简历/主页已公开在互联网上，所以不便在此写上真实中文名。）",
    major: "计算机科学与技术",
    school: "武汉大学",
    location: "现居武汉",
  },
  skills: {
    $: "技能",
    languages: "编程语言",
    platforms: "平台",
    frameworks: "框架",
    ides: "IDE",
    systems: "操作系统",
  },
  projects: {
    $: "作品/项目",
    types: {
      study: "学习",
    },
    album: {
      ebuild: {
        name: "ebuild",
        description:
          "一个针对EPL基于ECL和E2TXTA的工具，使用C#实现（最初版本使用GO语言实现）。旨在使得EPL的构建过程自动化、辅助开发者VCS/Diff工作、管理EPL源代码。该项目文档齐全、对新手友好。",
      },

      "qiaqia-course": {
        name: "Qiaqia选课系统",
        description: `该项目是一个课程设计项目。尽管其出于学习目的，但是仍然使用了现代的开发技术。比如：基于Gin、Go语言的Web API服务，基于Spring的Web API服务实现(由于课程时间问题，暂未完成)、以及基于Vue3/Vuex4/Vite(当时Pinia还处于试验阶段)。您在线可以访问Web UI。另外，还提供Docker Compose一键部署支持。更详细内容可以参见在线文档。`,
        links: {
          "go-backend": "Go后端实现(Gin/Gorm/PostgreSQL/...)",
          "vue3-front-end": "Vue前端实现(Vue3/Vuex/Vite)",
          "docker-support": "Docker支持",
          "online-document": "在线文档",
          "online-ui": "在线Web UI",
          "spring-backend": "Spring后端实现(时间问题，未完成)",
        },
      },

      animals12: {
        name: "十二金鸡",
        description: "是一款以十二只动物为主题的棋类小游戏",
        links: {
          "online-play": "在线游玩",
        },
      },

      "clever-bar": {
        name: "CleverBar",
        description: "一个Windows平台上快速切换是否自动隐藏任务栏的小工具。",
      },

      homepage: {
        name: "个人主页",
        description: "一款基于Vue3的开源个人主页，同时可作为简历使用。",
      },
    },
  },
};
