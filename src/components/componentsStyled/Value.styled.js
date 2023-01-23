import styled from "styled-components";

export const Value = styled.p`
font-size: 18px;
font-weight: 700;
color: ${({ total }) => (total < 0 ? "red" : "green")};
`;