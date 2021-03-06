import React, { useState } from 'react';
import ReactTyped from 'react-typed';
import styled, { css } from 'styled-components';
import Lottie from 'react-lottie';
import breakpointsMedia from '../theme/utils/breakpointsMedia';
import arrowAnimation from '../lotties/arrow.json';
import MoveToPosition from '../theme/utils/moveToElement/moveToElement';

const WrapperCover = styled.div`
  background-color: ${({ theme }) => theme.colors.darkTheme.background};
  width: 100%;
  min-height: 100vh;
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

  ${breakpointsMedia({
    xs: css`
      margin-bottom: 18px;
    `,
    md: css`
      margin-bottom: 0;
    `,
  })}
`;

const ColoredText = styled.span`
  ${(prop) => `color: ${prop.color}`}
`;

export default function Cover() {
  const [isTypedComplete, setTypedComplete] = useState(false);
  const typedOptions = {
    typeSpeed: 50,
    backSpeed: 50,
    cursorChar: '_',
    onComplete: () => setTypedComplete(true),
  };
  const typedOptionsJob = {
    typeSpeed: 50,
    backSpeed: 50,
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
            {isTypedComplete ? <span>Software Engineer</span> : <ReactTyped strings={['Software Engineer']} {...typedOptions} />}
          </Job>
        </WrapperTitle>
        <Code>
          &lt;
          <ColoredText color="#00C2DA">p class</ColoredText>
          =
          <ColoredText color="#00C2DA">&quot;especialização&quot;</ColoredText>
          &gt;
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;
          {isTypedComplete ? <ReactTyped strings={['Games', 'Front-End']} {...typedOptionsJob} startDelay={100} /> : <span> </span> }
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
