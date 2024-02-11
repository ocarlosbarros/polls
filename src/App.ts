import fastify from "fastify";
import cookie from "@fastify/cookie";

import createPoll from "../src/server/http/routes/createPoll";
import getPoll from "../src/server/http/routes/getPoll";
import createVoteOnPoll from "../src/server/http/routes/voteOnPoll";

class App {
    private app: any
    
    constructor(){
        this.app = fastify();
        this.registerRoutes();
        this.config();
    }

    public start(PORT: string | number): void {
        this.app.listen({port: PORT}).then(() => {
            console.log("HTTP server running...");
        });
    };

    private async registerRoutes():Promise<void> {
        await this.app.register(createPoll);
        await this.app.register(getPoll);
        await this.app.register(createVoteOnPoll);
    }

    private config(){
        this.app.register(cookie, {
            secret: "R$v#Fn54!HP$-W*",
            hook: "onRequest",
            parseOptions: {}
        });
    }


}

export { App }