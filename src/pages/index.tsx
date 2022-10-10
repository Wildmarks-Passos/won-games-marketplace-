import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Main from 'components/Main'
import theme from 'styles/theme'

export default function Home() {
  return (
    <>
      <Logo color="black" />
      <Heading
        color="black"
        beforeColor={theme.colors.primary}
        beforePosition="beforeLeft"
      >
        All Games
      </Heading>
      <Main />
    </>
  )
}
