import type { Note } from "../NoteForm/NoteForm";

const NoteList = ({ notes }: { notes: Note[] }) => {
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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NoteList;
