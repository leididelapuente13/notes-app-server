import { NoteEntity } from '../entities';

export abstract class NoteRepository {
	abstract createNote(note: NoteEntity): Promise<NoteEntity>;
	abstract getNotes(): Promise<NoteEntity[]>;
	abstract getArchivedNotes(): Promise<NoteEntity[]>;
	abstract getNotesByTag(tag: string): Promise<NoteEntity[]>;
	abstract deleteNote(): Promise<NoteEntity>;
	abstract updateNote(note: NoteEntity): Promise<NoteEntity>;
	// abstract filterNotes(term: string): Promise<NoteEntity>;
}
