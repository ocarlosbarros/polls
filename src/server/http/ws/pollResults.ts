import { FastifyInstance } from "fastify";
import { voting } from "../../../utils/VotingPubSub";
import PollValidation from "../../../validations/PollValidation";

export async function pollResults(app: FastifyInstance){
    app.get('/polls/:pollId/results', { websocket: true }, ( connection, request) => {
        
        //Subscribe only to messages published on the channel as poll ID = pollId
        const pollId = PollValidation.getValidPollIdFromParams(request.params)
        voting.subscribe(pollId, (message) => {
            connection.socket.send(JSON.stringify(message))
        });

    });
}