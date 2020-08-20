import React from "react";
const Like = (props) => {
  console.log(props.onClick);
  return (
    <i
      class={props.liked ? "fas fa-heart" : "far fa-heart"}
      onClick={props.onClick}
    ></i>
  );
};

export default Like;
