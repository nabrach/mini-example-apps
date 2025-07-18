import { useState } from "react";

const NoteForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    category: "Work",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const { title, priority, category, description } = formData;

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
          onChange={handleChange}
          name="title"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="priority" className="block semi-bold">
          Priority
        </label>
        <select
          className="w-full p-2 border rounded-lg"
          value={priority}
          onChange={(e) =>
            setFormData({ ...formData, priority: e.target.value })
          }
          name="priority"
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
          onChange={(e) =>
            setFormData({ ...formData, category: e.target.value })
          }
          name="category"
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
          onChange={handleChange}
          name="description"
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
