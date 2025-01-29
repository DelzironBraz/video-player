"use client";

import styled from "styled-components";

export const SimpleContainer = styled.div<{
  $justifyContent?: string;
  $alignItems?: string;
  $flexDirection?: string;
}>`
  display: flex;
  flex-direction: ${(props) => props.$flexDirection || "row"};
  justify-content: ${(props) => props.$justifyContent || "space-between"};
  align-items: ${(props) => props.$alignItems || "center"};
  gap: 0.5rem;
`;

export const MaxContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  max-width: 1366px;
  width: 100%;
`;

export const MainContainer = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 0 auto;
  overflow-x: hidden;
  margin: 60px 0;
`;
