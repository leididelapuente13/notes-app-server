export interface Note {
    id: string;
    title: string;
    text: string;
    tags: string[];
    is_archived: boolean;
    user_id: string;
    created_at: Date;
    updated_at: Date;
}

export class NoteEntity {

    public id: string;
    public title: string;
    public text: string;
    public tags: string[];
    public is_archived: boolean;
    public user_id: string;
    public created_at: Date;
    public updated_at: Date;


    constructor(note: Note) {
        const {id, title, text, tags, is_archived, user_id, created_at, updated_at} = note;

        this.id = id;
        this.title = title;
        this.text = text;
        this.tags = tags;
        this.is_archived = is_archived;
        this.user_id = user_id;
        this.created_at = created_at;
        this.updated_at = updated_at;
    }

}
