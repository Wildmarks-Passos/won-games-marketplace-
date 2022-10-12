import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineColor?: string
  isLine?: boolean
  linePosition?: 'lineLeft' | 'lineBottom'
}

const Heading = ({
  children,
  color = 'white',
  isLine = true,
  lineColor = '#35BDAC',
  linePosition = 'lineLeft'
}: HeadingProps) => (
  <S.Wrapper
    isLine={isLine}
    lineColor={lineColor}
    linePosition={linePosition}
    color={color}
  >
    {children}
  </S.Wrapper>
)

export default Heading
