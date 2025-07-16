import { NoteDatasource } from '../../domain/datasources/note.datasource';
import { NoteEntity } from '../../domain/entities';

export class NoteDatasourceImpl implements NoteDatasource {
	createNote(note: NoteEntity): Promise<NoteEntity> {
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
