import { Octokit } from 'octokit';
import { Person } from '../person';

export class Blog {

    private octokit: Octokit;
    private person: Person;

    public constructor(octokit: Octokit, person: Person) {
        this.octokit = octokit;
        this.person = person;
    }

    public async listPost() {
        return (await this.octokit.rest.issues.listForRepo({
            ...this.person.blogRepository,
            state: "open"
        })).data;
    }

};