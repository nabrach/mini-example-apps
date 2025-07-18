interface TextAreaInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  required?: boolean;
}

const TextAreaInput = ({
  label,
  name,
  value,
  onChange,
  required = false,
}: TextAreaInputProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block semi-bold">
        {label}
      </label>
      <textarea
        className="w-full p-2 border rounded-lg"
        rows={4}
        value={value}
        onChange={onChange}
        required={required}
        name="description"
      ></textarea>
    </div>
  );
};

export default TextAreaInput;
