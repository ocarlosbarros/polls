import fastify from "fastify";
import PoolController from "./controllers/PoolController";
import PoolRepository from "./repositories/PoolRepository";

class App {
    private app: any
    
    constructor(){
        this.app = fastify();
        this.RegisterRoutes();
    }

    public start(PORT: string | number): void {
        this.app.listen(PORT).then(() => {
            console.log("HTTP server running...");
        });
    };

    public RegisterRoutes(){
        const poolRepository = new PoolRepository();
        const poolController = new PoolController(poolRepository);
        this.app.post('/polls', poolController.create)
    }


}

export { App }