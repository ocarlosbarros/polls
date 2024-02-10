import { z } from "zod";

export default abstract class PoolValidation {

    static titleIsString = (request: any): any => {
        
        const createPollBody = z.object({
            title: z.string()
        });
        
        const { title } = createPollBody.parse(request);
        
        return title;

    }
}