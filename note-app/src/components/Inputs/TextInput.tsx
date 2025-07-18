interface TextInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
}

const TextInput = ({
  label,
  name,
  value,
  onChange,
  required = false,
}: TextInputProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block semi-bold">
        {label}
      </label>
      <input
        type="text"
        className="w-full p-2 border rounded-lg"
        value={value}
        onChange={onChange}
        required={required}
        name={name}
      />
    </div>
  );
};

export default TextInput;
