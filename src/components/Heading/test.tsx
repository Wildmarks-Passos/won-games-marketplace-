import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Heading from '.'

describe('<Heading />', () => {
  it('should render the heading with the following default styles', () => {
    renderWithTheme(<Heading>Won Games</Heading>)

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyle({
      color: '#FAFAFA'
    })

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'background-color',
      '#35BDAC',
      { modifier: '::before' }
    )

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'padding-left',
      '0.7rem',
      { modifier: '::before' }
    )

    expect(screen.getByRole('heading', { name: /Won Games/i })).toHaveStyleRule(
      'margin-right',
      '1.1rem',
      { modifier: '::before' }
    )
  })
})
