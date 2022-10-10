import * as S from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  beforeColor?: string
  isBefore?: boolean
  beforePosition?: 'beforeLeft' | 'beforeBottom'
}

const Heading = ({
  children,
  color = 'white',
  isBefore = true,
  beforeColor = '#35BDAC',
  beforePosition = 'beforeLeft'
}: HeadingProps) => (
  <S.Wrapper
    isBefore={isBefore}
    beforeColor={beforeColor}
    beforePosition={beforePosition}
    color={color}
  >
    {children}
  </S.Wrapper>
)

export default Heading
