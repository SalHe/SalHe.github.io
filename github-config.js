const fs = require("fs");

function read(file, environment) {
    return fs.existsSync(file) ? fs.readFileSync(file).toString() : process.env[environment];
}

// Auto fetch client id/secret from file(for development) or environment variables(for CI/CD).
const clientId = read("./github-client-id", "CLIENT_ID");
const clientSecret = read("./github-client-secret", "CLIENT_SECRET");
fs.writeFileSync(
    "./src/github-client.ts",
    "export default "
    + JSON.stringify({
        clientId,
        clientSecret,
        explain: "Please do not use this client id and secret out of here."
    }));