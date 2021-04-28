const Reset = (props) => {
  return (
    <button
      className={props.resetStyle}
      onClick={() => {
        props.setCounter(0);
      }}
    >
      Reset
    </button>
  );
};

export default Reset;
