import { z } from "zod";

export default abstract class PollValidation {

    static titleIsString = (request: any): any => {
        
        const createPollBody = z.object({
            title: z.string(),
            options:z.array(z.string()),
        });
        
        const poll = createPollBody.parse(request);
        
        return poll;

    }

    static getValidPollIdFromParams = (request: any): string => {
        
        const getPollParams = z.object({
            pollId: z.string().uuid(),
        });
        
        const { pollId }  = getPollParams.parse(request);
        
        return pollId;

    }
}