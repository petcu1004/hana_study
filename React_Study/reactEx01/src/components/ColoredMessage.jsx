export const ColorMessage = (props) => {
  console.log(props);
  const contentStyle = {
    color: props.color,
  };
  return (
    <>
      <p style={contentStyle}>
        {" "}
        {props.message} {props.name} {props.age}
      </p>
    </>
  );
};
