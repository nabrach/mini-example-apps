export type Note = {
  id: number;
  title: string;
  priority: string;
  category: string;
  description: string;
};

export interface NoteProps extends Note {
  deleteNote?: (id: number) => void;
}

const Note = ({
  id,
  title,
  priority,
  category,
  description,
  deleteNote,
}: NoteProps) => {
  return (
    <li
      key={id}
      className="p-4 bg-white rounded shadow border-l-4"
      style={{
        borderLeftColor:
          priority === "High"
            ? "red"
            : priority === "Medium"
            ? "orange"
            : "green",
      }}
    >
      <h4 className="text-lg font-bold">{title}</h4>
      <p className="text-sm text-gray-600">Priority: {priority}</p>
      <p className="text-sm text-gray-600">Category: {category}</p>
      <p className="mt-2">{description}</p>
      <button
        className="mt-2 bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600"
        onClick={() => deleteNote?.(id)}
      >
        Delete
      </button>
    </li>
  );
};

export default Note;
