import avatarUrl from "./assets/SalHe.png";

export const profile = {
    realName: "SalHe Li",
    nickName: "SalHe",
    slogan: "I wanna be free.",
    description: "A university student majoring in Computer Science in Wuhan University. Prefer some classic games such as Bomber-Man, Contra and Metal Slug. Dream to be a developer with enthusiasm and without constrain.",
    major: "Computer Science",
    school: "Wuhan University",
    email: "SalHe@qq.com",
    programming: {
        languages: ["C#", "C/C++", "Java", "Kotlin", "Javascript", "Typescript", "Golang", "Python"],
        platforms: ["Android", "Nodejs", ".NET", "JVM"],
        frameworks: ["Vue", "Spring+", "Jetpack Compose"],
        ides: ["Visual Studio Code", "IDEA", "Visual Studio"],
        systems: ["Windows", "Linux (Ubuntu)"]
    },
    avatarUrl,
    blogRepository: {
        owner: "SalHe",
        repo: "_home"
    }
};

export type Person = typeof profile;
