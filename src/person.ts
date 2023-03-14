import avatarUrl from "./assets/SalHe.png";
import { MessageSchema } from "./i18n";

export type ProjectKeys = keyof MessageSchema["projects"]["album"];

export interface Project {
  key: ProjectKeys;
  url: string;
  type?: "Study";
  tags: string[];
  links?: {
    [key in string]: string;
  };
}

export const projects: Project[] = [
  {
    key: "ebuild",
    url: "https://salhe.github.io/ebuild/",
    tags: ["Build", "Tool", "Automate", "CI"],
  },
  {
    key: "qiaqia-course",
    url: "https://github.com/SE2022-Qiaqia",
    type: "Study",
    tags: ["Gin", "Vue3", "Vite", "Docker", "VuePress"],
    links: {
      "go-backend": "https://github.com/SE2022-Qiaqia/back-end-go",
      "spring-backend": "https://github.com/SE2022-Qiaqia/back-end",
      "vue3-front-end": "https://github.com/SE2022-Qiaqia/front-end",
      "docker-support": "https://github.com/SE2022-Qiaqia/docker",
      "online-document": "https://se2022-qiaqia.github.io/docs/",
      "online-ui": "https://se2022-qiaqia.github.io/front-end",
    },
  },
  {
    key: "animals12",
    url: "https://github.com/SalHe/animals12",
    tags: ["Game", "Chess", "Vue3"],
    links: {
      "online-play": "http://salhe.github.io/animals12",
    },
  },
  {
    key: "clever-bar",
    url: "https://github.com/SalHe/CleverBar",
    tags: ["Tool", "Windows", ".NET"],
  },
];

export const profile = {
  email: "SalHe@qq.com",
  programming: {
    languages: [
      "!C#",
      "!Golang",
      "C/C++",
      "!Java/Kotlin",
      "Javascript/Typescript",
      "Python",
    ],
    platforms: ["!.NET", "!JVM", "Android", "Nodejs"],
    frameworks: [
      "!Vue",
      "!Gin",
      "!Gorm",
      "!ASP.NET Core",
      "Spring+",
      "Jetpack Compose",
      "Flutter",
    ],
    ides: ["!Visual Studio Code", "!IDEA", "Visual Studio"],
    systems: ["Windows", "Linux (Ubuntu)"],
  },
  projects,
  avatarUrl,
  blogRepository: {
    owner: "SalHe",
    repo: "_home",
  },
};

export type Person = typeof profile;
