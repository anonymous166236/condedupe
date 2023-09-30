const Button = ({
  label = "button",
  onClick = () => console.log("Pressed!"),
  genreVariant = "",
}) => {
  const getGenreClass = () => (genreVariant ? `button--${genreVariant}` : "");

  return (
    <button
      className={`button ${getGenreClass()}`}
      onClick={onClick}
      data-cy="button"
      data-jest="button"
    >
      <p className="button__label">{label.toLocaleUpperCase()}</p>
    </button>
  );
};

export default Button;
