import { css } from 'emotion';
import styled from 'react-emotion';

export const MAX_WIDTH = '2000px';

export const PrimaryFont = css`
  font-family: 'Cabin', sans-serif;
  color: white;
`;
export const TitleFont = css`
  font-family: 'Cabin', sans-serif;
`;

export const SecondaryText = css`
  ${PrimaryFont};
  color: white;
`;

/*
    background-image: ${props.backgroundImage};
    background-size: ${MAX_WIDTH} ${props.heightPx}px
      ${props.extHeightPx && `, ${MAX_WIDTH} ${props.extHeightPx}px`};
    background-position: left top, left ${props.heightPx - 1}px;
*/

export const SectionBase = props => css`
  max-width: ${MAX_WIDTH};

  position: relative;

  padding-left: 20px;
  padding-right: 20px;
  padding-top: 70px;

  background-repeat: no-repeat;

  background-image: ${props.mobileBackgroundImage || 'none'};
  margin: 0 auto;

  @media screen and (min-width: 550px) {
    padding-left: 50px;
    padding-right: 50px;
    padding-top: 40px;
  }

  @media screen and (min-width: 640px) {
    min-height: ${props.heightPx}px;

    padding-left: 100px;
    padding-right: 100px;
    padding-top: 120px;
  }

  @media screen and (min-width: ${MAX_WIDTH}) {
    background-position: center top, center ${props.heightPx - 1}px;
  }
`;

export const LeftContentPadding = css`
  @media screen and (min-width: 640px) {
    padding-left: 20px;
  }
`;

export const RightContentPadding = css`
  @media screen and (min-width: 640px) {
    text-align: right;
  }
`;

export const SectionTextContent = styled('div')`
  ${SecondaryText};
  font-size: 1.33em;
  > p {
    margin-top: 0;
  }
`;

const FlexProps = css`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1260px) {
    flex-direction: row;
  }
`;

export const SectionContent = styled('div')`
  ${props => props.columns && FlexProps};
  width: 100%;
  margin: 0 auto;
  margin-top: 25px;
`;

export const SectionLeftColumn = styled('div')`
  @media screen and (min-width: 1260px) {
    width: 285px;

    ${props =>
      props.sticky &&
      css`
        > div:first-child {
          position: sticky;
          top: 120px;
        }
      `};
  }
`;

export const SectionRightColumn = styled('div')`
  flex-grow: 1;
  flex-basis: 0;
  padding-top: 20px;

  @media screen and (min-width: 640px) {
    padding-top: 40px;
  }

  @media screen and (min-width: 1260px) {
    padding-top: 0;
    padding-left: 40px;
  }
`;

// Optimized shadow rendering
// See https://alligator.io/css/transition-box-shadows/
export const ShadowItem = ({
  background,
  pressedBackground,
  baseShadow,
  hoverShadow,
  radius
}) => css`
  position: relative;
  box-shadow: ${baseShadow ||
    '0 1px 2px rgba(0, 0, 0, 0.0333), 0 12.5px 40px rgba(0, 0, 0, 0.1)'};
  border-radius: ${radius || 6}px;
  transition: transform 0.2s, opacity 0.2s, background-color 0.2s;
  -webkit-tap-highlight-color: transparent;
  background-color: ${background || 'white'};

  ::after {
    position: absolute;
    content: '';
    border-radius: ${radius || 6}px;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: ${hoverShadow || '0 24px 60px rgba(0, 0, 0, 0.07)'};
    opacity: 0;
    transition: opacity 0.2s;
  }

  :hover {
    opacity: 0.9333;
    @media screen and (min-width: 640px) {
      transform: translateY(-4px);
    }
  }

  :hover::after {
    opacity: 1;
  }

  ${pressedBackground &&
    css`
      :active {
        opacity: 1;
        background-color: ${pressedBackground};
      }
    `};
`;

export const HideOnMobile = ({ minWidth }) => css`
  display: none;

  @media screen and (min-width: ${minWidth || 768}px) {
    display: block;
  }
`;
