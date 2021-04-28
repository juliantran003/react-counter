const Increment = (props) => {
  return (
    <button
      style={{ display: props.counter === 10 ? "none" : "inherit" }}
      className={props.buttonStyle}
      onClick={() => {
        props.setCounter(props.counter + 1);
      }}
    >
      +
    </button>
  );
};

export default Increment;
