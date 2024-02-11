import fastify from "fastify";
import createPoll from "./routes/createPoll";
import getPoll from "./routes/getPoll";
import createVoteOnPoll from "./routes/voteOnPoll";

class App {
    private app: any
    
    constructor(){
        this.app = fastify();
        this.RegisterRoutes();
    }

    public start(PORT: string | number): void {
        this.app.listen({port: PORT}).then(() => {
            console.log("HTTP server running...");
        });
    };

    public async RegisterRoutes(){
        await this.app.register(createPoll);
        await this.app.register(getPoll);
        await this.app.register(createVoteOnPoll)

    }


}

export { App }