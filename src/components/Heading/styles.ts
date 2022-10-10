import styled, { css } from 'styled-components'
import { HeadingProps } from '.'

const wrapperModifiers = {
  beforeLeft: ({ beforeColor }: HeadingProps) => css`
    ::before {
      content: '';
      margin-right: 1.1rem;
      padding-left: 0.7rem;
      background-color: ${beforeColor!};
    }
  `,

  beforeBottom: ({ beforeColor }: HeadingProps) => css`
    padding-bottom: 1.1rem;

    ::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 4.1rem;
      height: 0.5rem;
      background-color: ${beforeColor!};
    }
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({ theme, isBefore, beforePosition, color }) => css`
    position: relative;
    color: ${theme.colors[color!]};
    font-size: ${theme.font.sizes.xlarge};
    font-family: ${theme.font.family};
    font-weight: ${theme.font.bold};
    ${isBefore && wrapperModifiers[beforePosition!]}

    @media (min-width: 768px) {
      font-size: ${theme.font.sizes.xxlarge};
    }
  `}
`
