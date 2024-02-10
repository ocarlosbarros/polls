
import PoolValidation from "../validations/PoolValidation";
import PoolRepository from "../repositories/PoolRepository";

class PoolController {
    
    private _repository: PoolRepository;

    public constructor(repository: PoolRepository){     
        this._repository = repository;
    }

    public create = async (request: any, reply: any) => {

    const title = PoolValidation.titleIsString(request.body);

    const poll = await this._repository.create(title);

    return reply.status(201).send({ pollId: poll.id });

    }
}

export default PoolController;