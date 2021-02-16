import React from 'react';
import styled from 'styled-components';

const WrapperCover = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  width: 100vw;
  height: 100vh;
  display: flex;
  flex: wrap;
  flex-direction: column;
`;

const Title = styled.span`
  margin-top: 18px;
  margin-left: 18px;
  margin-bottom: 124px;
  font-size: 36px;
  color: ${({ theme }) => theme.colors.contrastBackground};
`;

const Name = styled.span`
  font-size: 124px;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 124px;
`;

const Job = styled.span`
  font-size: 124px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 124px;
`;

const Code = styled.span`
  font-size: 36px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.text};
  margin-left: 196px;
  margin-top: 196px;
`;

export default function Cover() {
  return (
    <div>
      <WrapperCover id="cover">
        <Title>/portfolio</Title>
        <Name>Victor Oda.</Name>
        <Job>Software Engineer_</Job>
        <Code>
          &lt;p class=&quot;font&quot;&gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Fira Sans
          <br />
          &lt;/p&gt;
        </Code>
      </WrapperCover>
    </div>
  );
}
