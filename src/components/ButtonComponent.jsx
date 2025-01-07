/* eslint-disable react/prop-types */
const ButtonComponent = function (props) {
  return (
    <>
      <div>
        <a href={`https://${props.text}.dev`} target="blank">
          <button>More About {props.text}</button>
        </a>
      </div>
    </>
  );
};

export default ButtonComponent;
