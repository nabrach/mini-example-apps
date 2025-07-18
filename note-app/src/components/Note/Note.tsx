import type { Note } from "../NoteForm/NoteForm";

interface NoteProps {
  note: Note;
  deleteNote: (id: number) => void;
}

const Note = ({ note, deleteNote }: NoteProps) => {
  return (
    <li
      key={note.id}
      className="p-4 bg-white rounded shadow border-l-4"
      style={{
        borderLeftColor:
          note.priority === "High"
            ? "red"
            : note.priority === "Medium"
            ? "orange"
            : "green",
      }}
    >
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
  );
};

export default Note;
