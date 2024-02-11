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

    public getUserPreviousVote = async (userVoteInfo: any) => {
        const userPreviousVote = await prisma.vote.findUnique({
            where: {
                sessionId_pollId: {
                    pollId: userVoteInfo.pollId,
                    sessionId: userVoteInfo.sessionId,
                }
            }
        })

        return userPreviousVote;
    }

    public deleteVote = async (id: number) => {
        const voteDeleted = await prisma.vote.delete({
            where: {
                id,
            }
        })

        return voteDeleted;
    }
}

export default VoteOnPollRepository;