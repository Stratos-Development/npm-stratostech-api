const axios = require("axios");

class ApiClient {
    constructor(token) {
        this.client = axios.create({
            baseURL: "https://api.stratostech.xyz/v3/",
            headers: {
                'Content-Type': 'application/json',
                'Authorization': token
            }
        });
        this.image = new ImageEndpoints(this.client);
        this.token = new TokenEndpoints(this.client);
    }

    async get(endpoint) {
        try {
            const response = await this.client.get(endpoint);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    async Advice() {
        return this.get('/advice');
    }

    async DadJoke() {
        return this.get('/dadjoke');
    }

    async DarkJoke() {
        return this.get('/darkjoke');
    }

    async Fml() {
        return this.get('/fml');
    }

    async Insult() {
        return this.get('/insult');
    }

    async Joke() {
        return this.get('/joke');
    }

    async Health() {
        return this.get('/health');
    }

    async Productive() {
        return this.get('/productive');
    }

    async Rfact() {
        return this.get('/rfact');
    }

    handleError(error) {
        console.error('API Request Error:');
        if (error.response) {
            console.error(`Status: ${error.response.status} - ${error.response.data}`);
        } else if (error.request) {
            console.error('No response received from the API.');
        } else {
            console.error(`Error: ${error.message}`);
        }
    }
}

class ImageEndpoints {
    constructor(client) {
        this.client = client;
    }

    async get(endpoint) {
        try {
            const response = await this.client.get(endpoint);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    async EightBall() {
        return this.get('/img/8ball');
    }

    async Meme() {
        return this.get('/img/meme');
    }

    async Roll() {
        return this.get('/img/roll');
    }

    handleError(error) {
        console.error('Image API Request Error:');
        if (error.response) {
            console.error(`Status: ${error.response.status} - ${error.response.data}`);
        } else if (error.request) {
            console.error('No response received from the Image API.');
        } else {
            console.error(`Error: ${error.message}`);
        }
    }
}

class TokenEndpoints {
    constructor(client) {
        this.client = client;
    }

    async get(endpoint) {
        try {
            const response = await this.client.get(endpoint);
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    async list() {
        return this.get('/token/list');
    }

    async Check(key, token, project) {
        try {
            const response = await this.client.post("/token/check", { key, token, project });
            return response.data;
        } catch (error) {
            if (error.code === "ERR_BAD_REQUEST") return "Invalid Request";
            this.handleError(error);
        }
    }

    async Reroll(uuid) {
        try {
            const response = await this.client.post("/token/reroll", { uuid });
            return response.data;
        } catch (error) {
            this.handleError(error);
        }
    }

    handleError(error) {
        console.error('Token API Request Error:');
        if (error.response) {
            console.error(`Status: ${error.response.status} - ${error.response.data}`);
        } else if (error.request) {
            console.error('No response received from the Token API.');
        } else {
            console.error(`Error: ${error.message}`);
        }
    }
}

module.exports = ApiClient;
