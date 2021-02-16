import React from 'react';
import styled from 'styled-components';

const WrapperFooter = styled.div`
  background-color: ${({ theme }) => theme.colors.header};
  width: 100vw;
  height: 60px;
`;

const FooterBackground = styled.footer`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 104px;
  height: 60px;
  margin: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialButton = styled.img`
  margin: 6px;
  height: 32px;
  width: 32px;
`;

export default function Footer() {
  return (
    <div>
      <WrapperFooter>
        <FooterBackground>
          <a href="https://github.com/VictorOda">
            <SocialButton src="./buttons/github.png" alt="githubIcon" />
          </a>
          <a href="https://www.linkedin.com/in/victor-oda-65b782106/">
            <SocialButton src="./buttons/linkedin.png" alt="linkedinIcon" />
          </a>
        </FooterBackground>
      </WrapperFooter>
    </div>
  );
}
