import type { Note } from "../NoteForm/NoteForm";

interface NoteListProps {
  notes: Note[];
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
            <li key={note.id} className="p-4 bg-white rounded shadow">
              <h4 className="text-lg font-bold">{note.title}</h4>
              <p className="text-sm text-gray-600">Priority: {note.priority}</p>
              <p className="text-sm text-gray-600">Category: {note.category}</p>
              <p className="mt-2">{note.description}</p>
              <button
                className="mt-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
                onClick={() => deleteNote(note.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NoteList;
