import { Plugin } from "vite";
import fs from "fs";

function readFromFileOrEnvironment(file: string, environment: string) {
    return fs.existsSync(file) ? fs.readFileSync(file).toString() : process.env[environment];
}

// Auto fetch client id/secret from file(for development) or environment variables(for CI/CD).
const globalClientId = readFromFileOrEnvironment("./github-client-id", "CLIENT_ID");
const globalClientSecret = readFromFileOrEnvironment("./github-client-secret", "CLIENT_SECRET");
const githubClientModuleId = "github-client";

export default function configGithubClientPlugin(clientConfig?: { clientId?: string; clientSecret?: string }): Plugin {
    return {
        name: "config-github-client",
        resolveId(id) {
            if (id === githubClientModuleId) return githubClientModuleId;
        },
        load(id) {
            if (id === githubClientModuleId) {
                return "export default "
                    + JSON.stringify({
                        clientId: clientConfig?.clientId || globalClientId,
                        clientSecret: clientConfig?.clientSecret || globalClientSecret,
                        explain: "Please do not use this client id and secret out of here."
                    });
            }
        }
    }
}