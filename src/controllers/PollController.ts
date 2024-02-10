
import PollValidation from "../validations/PollValidation";
import PollRepository from "../repositories/PollRepository";

class PollController {
    
    private _repository: PollRepository;

    public constructor(repository: PollRepository){     
        this._repository = repository;
    }

    public create = async (request: any, reply: any) => {

    const title = PollValidation.titleIsString(request.body);

    const poll = await this._repository.create(title);

    return reply.status(201).send({ pollId: poll.id });

    }
}

export default PollController;