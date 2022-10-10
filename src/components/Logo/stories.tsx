import { Story, Meta } from '@storybook/react'
import Logo, { LogoProps } from '.'

export default {
  title: 'Logo',
  component: Logo,
  argTypes: {
    color: { control: 'inline-radio' },
    size: { control: 'inline-radio' }
  }
} as Meta

export const Default: Story<LogoProps> = (args) => <Logo {...args} />
