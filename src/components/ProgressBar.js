export const ProgressBar = (props) => {
  const { bgColor, completed } = props;
  // console.log("color", bgColor, "completed", completed);
  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#E7E5F1",
    borderRadius: 50,
    margin: 50,
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgColor,
    borderRadius: "inherit",
    textAlign: "right",
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold",
  };

  return (
    <div style={ containerStyles }>
      <div style={ fillerStyles }>
        <span style={ labelStyles }></span>
      </div>
    </div>
  );
};
