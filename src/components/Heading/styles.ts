import styled, { css } from 'styled-components'
import { HeadingProps } from '.'

const wrapperModifiers = {
  lineLeft: ({ lineColor }: HeadingProps) => css`
    ::before {
      content: '';
      margin-right: 1.1rem;
      padding-left: 0.7rem;
      background-color: ${lineColor!};
    }
  `,

  lineBottom: ({ lineColor }: HeadingProps) => css`
    padding-bottom: 1.1rem;

    ::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 4.1rem;
      height: 0.5rem;
      background-color: ${lineColor!};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, isLine, linePosition, color }) => css`
    position: relative;
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.xlarge};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.bold};
    ${isLine && wrapperModifiers[linePosition!]}

    @media (min-width: 768px) {
      font-size: ${theme.font.sizes.xxlarge};
    }
  `}
`
