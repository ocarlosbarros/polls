import VoteOnPollRepository from "../repositories/VoteOnPollRepository";

class VoteOnPollController {

    private _repository: VoteOnPollRepository;

    public constructor(repository: VoteOnPollRepository){     
        this._repository = repository;
    }

    public create = async (request: any, reply: any) => {
    }
}

export default VoteOnPollController;