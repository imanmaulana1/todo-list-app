const handleChange = (e, setInput) => {
  setInput(e.target.value);
};

const handleFocus = (setIsFocus) => {
  setIsFocus(true);
};

const handleBlur = (setIsFocus) => {
  setIsFocus(false);
};

export { handleChange, handleFocus, handleBlur };
