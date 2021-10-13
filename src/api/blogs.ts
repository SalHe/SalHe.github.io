import { Octokit } from 'octokit';
import { Person } from '../person';
import { GetResponseDataTypeFromEndpointMethod } from "@octokit/types";

const temp = new Octokit();
export type Post = GetResponseDataTypeFromEndpointMethod<typeof temp.rest.issues.get>;

export class Blog {

    private octokit: Octokit;
    private person: Person;

    public constructor(octokit: Octokit, person: Person) {
        this.octokit = octokit;
        this.person = person;
    }

    public async listPost(): Promise<Post[]> {
        return (await this.octokit.rest.issues.listForRepo({
            ...this.person.blogRepository,
            state: "open"
        })).data;
    }

    public async getPostDetails(issusNumber: number): Promise<Post> {
        return (await this.octokit.rest.issues.get({
            ...this.person.blogRepository,
            issue_number: issusNumber
        })).data;
    }

};