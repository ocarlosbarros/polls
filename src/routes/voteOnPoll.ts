import { FastifyInstance } from "fastify";
import VoteOnPollController from "../controllers/VoteOnPollController";
import VoteOnPollRepository from "../repositories/VoteOnPollRepository";

export default async function createVoteOnPoll(app: FastifyInstance){
    const voteOnPollRepository = new VoteOnPollRepository;
    const voteOnPollController = new VoteOnPollController(voteOnPollRepository);
    
    app.post('/polls/:pollId/votes', voteOnPollController.create)

}