NOTE TAKING APP

ENTITIES

- note
  - id
  - title
  - text
  - tags[]
  - is_archived
  - updated_at
  - created_at
  - user_id

- user
  - id
  - email
  - password

- tag
  - id
  - name

RELATIONSHIPS

- one note can have only one user
- one user can have many notes

- one note can have many tags
- one tag can have many notes
