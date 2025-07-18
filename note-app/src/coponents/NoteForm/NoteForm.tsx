import { useState } from "react";

const NoteForm = () => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("Work");
  const [description, setDescription] = useState("");

  return (
    <form className="mb-6">
      <div className="mb-4">
        <label htmlFor="title" className="block semi-bold">
          Title
        </label>
        <input
          type="text"
          className="w-full p-2 border rounded-lg"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label htmlFor="priority" className="block semi-bold">
          Priority
        </label>
        <select
          className="w-full p-2 border rounded-lg"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="category" className="block semi-bold">
          Category
        </label>
        <select
          className="w-full p-2 border rounded-lg"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Other">Other</option>
        </select>
      </div>
      <div className="mb-4">
        <label htmlFor="description" className="block semi-bold">
          Description
        </label>
        <textarea
          className="w-full p-2 border rounded-lg"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
      </div>
      <button
        type="submit"
        className="w-full bg-purple-500 text-white py-2 rounded-lg cursor-pointer hover:bg-purple-600"
        onClick={(e) => {
          e.preventDefault();
          // Handle form submission logic here
          console.log({ title, priority, category, description });
        }}
      >
        Add Note
      </button>
      <button
        type="reset"
        className="w-full bg-gray-300 text-black p-2 rounded-lg mt-2 hover:bg-gray-400"
        onClick={() => {
          setTitle("");
          setPriority("Medium");
          setCategory("Work");
          setDescription("");
        }}
      >
        Reset
      </button>
    </form>
  );
};

export default NoteForm;
