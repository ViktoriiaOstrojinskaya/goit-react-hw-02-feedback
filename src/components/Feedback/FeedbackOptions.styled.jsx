import styled from '@emotion/styled';

export const List = styled.ul`
  justify-content: space-between;
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
`;

export const Button = styled.button`
  width: 85px;
  height: 30px;
  font-size: ${p => p.theme.fontSizes.xs};
  text-transform: capitalize;
  border-radius: ${p => p.theme.radii.normal};
  border: ${p => `${p.theme.borders.normal} ${p.theme.colors.blue}`};
  background-color: ${p => p.theme.colors.lightGray};

  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.blue};
    color: ${p => p.theme.colors.white};
  }
`;
