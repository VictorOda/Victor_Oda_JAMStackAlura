import styled from 'styled-components';

const Title = styled.span`
  margin-top: 18px;
  margin-left: 18px;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.contrastBackground};
`;

export default Title;
