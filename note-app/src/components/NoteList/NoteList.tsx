import Note, { type NoteProps } from "../Note/Note";

interface NoteListProps {
  notes: NoteProps[];
  deleteNote: (id: number) => void;
}

const NoteList = ({ notes, deleteNote }: NoteListProps) => {
  return (
    <div className="mt-6">
      <h3 className="text-xl font-semibold mb-4">Notes List</h3>
      {notes.length === 0 ? (
        <p className="text-gray-500">No notes available</p>
      ) : (
        <ul className="space-y-4">
          {notes.map((note) => (
            <Note key={note.id} {...note} deleteNote={deleteNote} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default NoteList;
