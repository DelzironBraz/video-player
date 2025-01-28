import styled from "styled-components";

export const SimpleContainer = styled.div<{
  $justifyContent?: string;
  alignItems?: string;
  flexDirection?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection || "row"};
  justify-content: ${(props) => props.$justifyContent || "space-between"};
  align-items: ${(props) => props.alignItems || "center"};
  gap: 0.5rem;
`;
