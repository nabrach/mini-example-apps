interface SelectInputProps {
  label: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  options: { value: string; label: string }[];
}

const SelectInput = ({
  label,
  name,
  value,
  onChange,
  options,
}: SelectInputProps) => {
  return (
    <div className="mb-4">
      <label htmlFor={name} className="block semi-bold">
        {label}
      </label>
      <select
        className="w-full p-2 border rounded-lg"
        value={value}
        onChange={onChange}
        name={name}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
