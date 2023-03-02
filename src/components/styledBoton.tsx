import React from "react";
import styled from "styled-components";

// Crear un estilo button Danger usando styled components
const DangerButton = styled.button`
  background-color: red;
  color: white;
  font-size: 16px;
`;

// Crear un estilo button Default usando styled components
const DefaultButton = styled.button`
  border: 1px solid #000;
  padding: 10px 15px;
  font-size: 16px;
`;

const StyledButton = (props: { children?: any; type?: any }) => {
  const { type } = props;
  if (type === "danger") {
    return <DangerButton>{props.children}</DangerButton>;
  } else {
    return <DefaultButton>{props.children}</DefaultButton>;
  }
};
export default StyledButton;
