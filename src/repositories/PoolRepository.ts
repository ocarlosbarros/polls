import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

class PoolRepository {
    
    public async create(title: string): Promise<any> {
        
        const poll = await prisma.poll.create({
            data: {
                title
            }
        });

        return poll;

    }
}

export default PoolRepository;