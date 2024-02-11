
import PollValidation from "../validations/PollValidation";
import PollRepository from "../repositories/PollRepository";
import { redis } from "../lib/redis";

class PollController {
    
    private _repository: PollRepository;

    public constructor(repository: PollRepository){     
        this._repository = repository;
    }

    public create = async (request: any, reply: any) => {

    const { title, options} = PollValidation.titleIsString(request.body);

    const poll = await this._repository.create({ title, options });

    return reply.status(201).send({ pollId: poll.id });

    }

    public get = async (request: any, reply: any): Promise<string> => {

    const pollId = PollValidation.getValidPollIdFromParams(request.params);
        
        const poll = await this._repository.get(pollId);


        if(!poll){
            return reply.status(404).send({ message: "Poll not found!"});
        }

        /**
         * 0 -1 - Get all options voted
         */
        const result = await redis.zrange(pollId, 0, -1, 'WITHSCORES');

        const votes = result.reduce((obj, line, index) => {
            if(index % 2 == 0){
                const score = result[index + 1];

                Object.assign(obj, { [line]: Number(score) })
            }
            return obj;
        }, {} as Record<string, number>);

        return reply.status(200).send({ 
            poll: {
                id: poll.id,
                title: poll.title,
                options: poll.options.map((option: any) => {
                    return {
                        id: option.id,
                        title: option.title,
                        score: (option.id in votes) ? votes[option.id] : 0
                    }
                })
            }
        });
    }
}

export default PollController;