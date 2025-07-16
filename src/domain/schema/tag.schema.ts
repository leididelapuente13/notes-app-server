import z from 'zod';
import { TagEntity } from '../entities';

export const TagSchema = z.object({
	name: z.string({ message: 'It should be a string' }).min(1, { message: 'This is required' }),
});

export const validateTag = (tag: TagEntity) => TagSchema.safeParse(tag);
