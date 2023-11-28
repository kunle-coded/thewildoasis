import styled, { css } from "styled-components";

const Heading = styled.h1`
  ${(props) =>
    props.as === "h1" &&
    css`
      font-size: 1.6rem;
    `}
  line-height: 1.6;
`;

export default Heading;
