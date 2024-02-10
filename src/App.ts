import fastify from "fastify";
import PollController from "./controllers/PollController";
import PollRepository from "./repositories/PollRepository";
import createPoll from "./routes/createPoll";

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
    }


}

export { App }