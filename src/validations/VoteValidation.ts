import { z } from 'zod';
export default abstract class VoteValidation {
 
    public static ValidateVote(request: any){
        
        const voteOnPollBody = z.object({
            pollOptionId: z.string().uuid()
        });

        const voteOnPollParams = z.object({
            pollId: z.string().uuid(),
        })

        const { pollId } = voteOnPollParams.parse(request.params);
        const { pollOptionId } = voteOnPollBody.parse(request.body);

        return { pollId, pollOptionId }

        
    }
}

