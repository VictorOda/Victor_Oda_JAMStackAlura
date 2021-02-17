import React from 'react';
import ReactTyped from 'react-typed';
import styled, { css } from 'styled-components';
import breakpointsMedia from '../theme/utils/breakpointsMedia';

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
      margin-left: 64px;
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
      margin-left: 64px;
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
      margin-left: 98px;
      margin-bottom: 36px;
    `,
    md: css`
      font-size: ${({ theme }) => theme.typographyVariants.medium.fontSize};
      font-weight: ${({ theme }) => theme.typographyVariants.medium.fontWeight};
      margin-left: 196px;
      margin-bottom: 72px;
    `,
  })}
`;

export default function Cover() {
  const typedOptions = {
    typeSpeed: 50,
    cursorChar: '_',
  };

  return (
    <div>
      <WrapperCover>
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
