import { useState } from "react";
import NoteForm, { type Note } from "./components/NoteForm/NoteForm";
import NoteList from "./components/NoteList/NoteList";

const App = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const deleteNote = (id: number) => {
    const confirmation = window.confirm("Are you sure you want to delete this note?");
    if (!confirmation) return;
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-gray-100 rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Notes App</h2>
      <NoteForm notes={notes} setNotes={setNotes} />
      <NoteList notes={notes} deleteNote={deleteNote} />
    </div>
  );
};

export default App;
