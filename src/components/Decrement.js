const Decrement = (props) => {
  return (
    <button
      style={{ display: props.counter === 0 ? "none" : "inherit" }}
      className={props.buttonStyle}
      onClick={() => {
        props.counter > 0
          ? props.setCounter(props.counter - 1)
          : props.setCounter(props.counter);
      }}
    >
      -
    </button>
  );
};

export default Decrement;
