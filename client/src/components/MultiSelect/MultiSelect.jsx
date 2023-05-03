const MultiSelect = ({ options, selectedOptions = [], onChange }) => {
  const handleOptionChange = (event) => {
    const value = event.target.value;
    const isSelected = event.target.checked;

    if (isSelected) {
      onChange([...selectedOptions, value]);
    } else {
      onChange(selectedOptions.filter((option) => option !== value));
    }
  };

  return (
    <div>
      {options.map((option, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              value={option.name}
              checked={selectedOptions.includes(option.name)}
              onChange={handleOptionChange}
            />
            {option.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default MultiSelect;
