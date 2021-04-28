const Reset = (props) => {
  return (
    <button
      className={props.resetStyle}
      onClick={() => {
        props.setCounter(props.counter === 0);
      }}
    >
      Reset
    </button>
  );
};

export default Reset;
