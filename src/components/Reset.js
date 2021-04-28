const Reset = (props) => {
  return (
    <button
      className={props.resetStyle}
      onClick={() => {
        props.setCounter(props.counter - props.counter);
      }}
    >
      Reset
    </button>
  );
};

export default Reset;
