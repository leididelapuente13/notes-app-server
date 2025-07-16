import { NoteEntity } from '../../domain/entities';
import { NoteRepository } from '../../domain/repositories/note.repository';

export class NoteRepositoryImpl implements NoteRepository {
	createNote(note: NoteEntity): Promise<NoteEntity> {
		console.log(note);
		throw new Error('Method not implemented.');
	}
	getNotes(): Promise<NoteEntity[]> {
		throw new Error('Method not implemented.');
	}
	getArchivedNotes(): Promise<NoteEntity[]> {
		throw new Error('Method not implemented.');
	}
	getNotesByTag(tag: string): Promise<NoteEntity[]> {
		throw new Error('Method not implemented.');
	}
	deleteNote(): Promise<NoteEntity> {
		throw new Error('Method not implemented.');
	}
	updateNote(note: NoteEntity): Promise<NoteEntity> {
		throw new Error('Method not implemented.');
	}
}
