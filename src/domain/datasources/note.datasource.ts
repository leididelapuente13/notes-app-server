import { NoteEntity } from "../entities";

export abstract class NoteDatasource {
    abstract createNote(): Promise<NoteEntity>;
    abstract getNotes(): Promise<NoteEntity[]>;
    abstract getArchivedNotes(): Promise<NoteEntity[]>;
    abstract getNotesByTag(tag: string): Promise<NoteEntity[]>;
    abstract deleteNote(): Promise<NoteEntity>;
    abstract updateNote(): Promise<NoteEntity>;
    // abstract filterNotes(term: string): Promise<NoteEntity>;
}