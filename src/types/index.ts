export type TagType = "default" | "error" | "info" | "success" | "warning" | "primary";

export interface Skill {
    name: string,
    type?: TagType
};