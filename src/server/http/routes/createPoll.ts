import { FastifyInstance } from "fastify";
import PollRepository from "../../../repositories/PollRepository";
import PollController from "../../../controllers/PollController";

export default async function createPoll(app: FastifyInstance){
    const poolRepository = new PollRepository();
    const poolController = new PollController(poolRepository);
    
    app.post('/polls', poolController.create)

}