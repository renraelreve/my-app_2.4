function InputPrice({ value, label, onChange }) {
  const handleChange = (event) => {
    let inputValue = event.target.value.trim(); // Remove leading and trailing whitespace

    // Check if input value is a valid number and non-negative
    const parsedValue =
      !isNaN(inputValue) && parseFloat(inputValue) >= 0
        ? parseFloat(inputValue)
        : "";

    onChange(parsedValue);
  };

  return (
    <div>
      <label>{label}</label>
      <input
        type="number"
        value={isNaN(value) ? "" : value} // Render empty string if value is not a valid number
        onChange={handleChange}
      />
    </div>
  );
}

export default InputPrice;
