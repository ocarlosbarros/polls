import { prisma } from "../lib/prisma";

class VoteOnPollRepository {

    public create = async (vote: any ) => {

        const created = await prisma.vote.create({
            data: {
                sessionId: vote.sessionId,
                pollId: vote.pollId,
                pollOptionId: vote.pollOptionId
            }
        });

        return created;
    }
}

export default VoteOnPollRepository;