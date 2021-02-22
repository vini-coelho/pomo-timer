import styled from 'styled-components';

export const Container = styled.svg`
  display: block;
  margin: 20px auto;
  max-width: 100%;
`;

export const Svg = styled.svg`
  display: block;
  margin: 20px auto;
  max-width: 100%;
`;

export const BackgroundCircle = styled.circle`
  fill: none;
`;

export const Circle = styled.circle`
  fill: none;
  transition: stroke-dashoffset 850ms ease-in-out;
`;

export const Time = styled.text`
  fill: var(--white);
  text-anchor: middle;
  font-size: 3rem;
`;

export const Label = styled.text`
  fill: var(--white);
  text-anchor: middle;
  margin-top: 100px;
  font-size: 0.875rem;
`;
