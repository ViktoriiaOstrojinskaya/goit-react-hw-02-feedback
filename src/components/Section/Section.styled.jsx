import styled from '@emotion/styled';

export const Title = styled.h2`
  text-align: center;
  margin-bottom: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[5]}px;

  &:first-of-type {
    margin-top: ${p => p.theme.space[0]}px;
  }
`;
