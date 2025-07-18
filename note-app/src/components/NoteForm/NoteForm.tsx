import { useState } from "react";
import TextInput from "../Inputs/TextInput";
import SelectInput from "../Inputs/SelectInput";

export interface Note {
  id: number;
  title: string;
  priority: string;
  category: string;
  description: string;
}

export interface NoteFormProps {
  notes: Note[];
  setNotes: React.Dispatch<React.SetStateAction<Note[]>>;
}

const NoteForm = ({ notes, setNotes }: NoteFormProps) => {
  const [formData, setFormData] = useState({
    title: "",
    priority: "Medium",
    category: "Work",
    description: "",
  });

  const [isFormVisible, setIsFormVisible] = useState(false);

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title || !formData.description) {
      alert("Title and Description are required");
      return;
    }
    // create a new note object
    const newNote = {
      ...formData,
      id: Date.now(), // simple unique ID based on timestamp
    };

    // update the notes state
    setNotes([...notes, newNote]);

    // reset the form
    setFormData({
      title: "",
      priority: "Medium",
      category: "Work",
      description: "",
    });
  };

  const { title, priority, category, description } = formData;

  return (
    <>
      <button
        onClick={() => setIsFormVisible(!isFormVisible)}
        className="mb-4 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
      >
        {isFormVisible ? "Hide Form" : "Show Form"}
      </button>
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="mb-6">
          <TextInput
            label="Title"
            name="title"
            value={title}
            onChange={handleChange}
            required
          />
          <SelectInput
            label="Priority"
            name="priority"
            value={priority}
            onChange={(e) =>
              setFormData({ ...formData, priority: e.target.value })
            }
            options={[
              { value: "Low", label: "Low" },
              { value: "Medium", label: "Medium" },
              { value: "High", label: "High" },
            ]}
          />
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
            onClick={handleSubmit}
          >
            Add Note
          </button>
          <button
            type="reset"
            className="w-full bg-gray-300 text-black p-2 rounded-lg mt-2 hover:bg-gray-400"
            onClick={() =>
              setFormData({
                title: "",
                priority: "Medium",
                category: "Work",
                description: "",
              })
            }
          >
            Reset
          </button>
        </form>
      )}
      {notes.length === 0 && (
        <p className="text-gray-500">No notes available</p>
      )}
      {notes.length > 0 && (
        <p className="text-gray-500 mb-4">
          {notes.length} {notes.length === 1 ? "note" : "notes"} available
        </p>
      )}
    </>
  );
};

export default NoteForm;
