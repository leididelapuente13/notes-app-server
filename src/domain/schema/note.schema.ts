import z from 'zod'
import { NoteEntity } from '../entities'
import { TagSchema } from './tag.schema';

const NoteSchema = z.object({
    title: z.string({message: 'It should be a string'}).min(1, {message: 'The title is rewuired'}),
    text: z.string({message: 'It should be a string'}).min(1, {message: 'The text is rewuired'}),
    tags: z.array(TagSchema).min(1, {message: 'At least one tag is required'}),
    is_archived: z.boolean(),
    user_id: z.string(),
    created_at: z.string(),
})

export const validateNoteCreation = (note: NoteEntity) => NoteSchema.safeParse(note);

export const validateNoteUpdate = (note: NoteEntity)=> NoteSchema.partial().safeParse(note);