import React from 'react';
import ReactTyped from 'react-typed';
import styled, { css } from 'styled-components';
import Lottie from 'react-lottie';
import breakpointsMedia from '../theme/utils/breakpointsMedia';
import arrowAnimation from '../lotties/arrow.json';
import MoveToPosition from '../theme/utils/moveToElement';

const WrapperCover = styled.div`
  background-color: ${({ theme }) => theme.colors.darkTheme.background};
  width: 100%;
  height: 100vh;
  display: flex;
  flex: wrap;
  flex-direction: column;
  justify-content: space-between;

  ${breakpointsMedia({
    xs: css`
      padding: 18px;
    `,
    md: css`
      padding: 36px;
    `,
  })}
`;

const SectionTitle = styled.span`
  color: ${({ theme }) => theme.colors.darkTheme.secondaryText};
  ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.sectionTitleXS.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.sectionTitleXS.fontWeight};
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.sectionTitle.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.sectionTitle.fontWeight};
    `,
  })}
`;

const WrapperTitle = styled.div`
  display: flex;
  flex-direction: column;
`;

const Name = styled.span` 
  color: ${({ theme }) => theme.colors.darkTheme.mainText};
  ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.nameXS.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.nameXS.fontWeight};
      margin-left: 32px;
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.name.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.name.fontWeight};
      margin-left: 124px;
    `,
  })}
`;

const Job = styled.span`
  color: ${({ theme }) => theme.colors.darkTheme.mainText};
  ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.jobTitleXS.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.jobTitleXS.fontWeight};
      margin-left: 32px;
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.jobTitle.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.jobTitle.fontWeight};
      margin-left: 124px;
    `,
  })}
`;

const Code = styled.span`
  color: ${({ theme }) => theme.colors.darkTheme.mainText};
  ${breakpointsMedia({
    xs: css`
      font-size: ${({ theme }) => theme.typographyVariants.mediumXS.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.mediumXS.fontWeight};
      margin-left: 32px;
      margin-bottom: 18px;
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.medium.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.medium.fontWeight};
      margin-left: 196px;
      margin-bottom: 72px;
    `,
  })}
`;

const Arrow = styled.button`
  transform: rotate(90deg);
  border: none;
  outline: none;
  width: 96px;
  height: 96px;
  margin: 0 auto;
  background: transparent;
  cursor: pointer;
`;

const ColoredText = styled.span`
  ${(prop) => `color: ${prop.color}`}
`;

export default function Cover() {
  const typedOptions = {
    typeSpeed: 50,
    cursorChar: '_',
  };
  const lottieOptions = {
    loop: true,
    autoplay: true,
    animationData: arrowAnimation,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };
  return (
    <div>
      <WrapperCover id="portfolio">
        <SectionTitle>/portfolio</SectionTitle>
        <WrapperTitle>
          <Name>
            Victor Oda.
          </Name>
          <Job>
            <ReactTyped strings={['Software Engineer']} {...typedOptions} startDelay={500} />
          </Job>
        </WrapperTitle>
        <Code>
          &lt;
          <ColoredText color="#00C2DA">p class</ColoredText>
          =
          <ColoredText color="#00C2DA">&quot;especialização&quot;</ColoredText>
          &gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;Front-End
          <br />
          &lt;/
          <ColoredText color="#00C2DA">p</ColoredText>
          &gt;
        </Code>
        <Arrow onClick={() => MoveToPosition('navbar-container', 'start')}>
          <Lottie options={lottieOptions} />
        </Arrow>
      </WrapperCover>
    </div>
  );
}
