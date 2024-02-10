import { IPoll } from "../Interfaces/IPoll";
import { prisma } from "../lib/prisma";

class PollRepository {
    
    public async create(poll: IPoll): Promise<any> {
        
        const created = await prisma.poll.create({
            data: {
                title: poll.title,
                options: {
                    createMany: {
                        data: poll.options.map(option => {
                            return { title: option }
                        }),
                    }
                }
            }
        });
        return created;
    }
}

export default PollRepository;