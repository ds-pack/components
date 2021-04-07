import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { Button } from './Button'
import {ThemeProvider} from './ThemeProvider'
import {Reset} from './Reset'
import {Theme} from './Theme'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Button',
  component: Button,
};

//👇 We create a “template” of how args map to rendering
// const Template: Story<ComponentProps<typeof Button>> = (args) => <Button {...args}>Test</Button>;

// export const Basic = Template.bind({});
// Basic.args = {
//   /*👇 The args you need here will depend on your component */
// };

export const Basic = () => {
  <ThemeProvider>
      <Reset />
      <Button>Test</Button>
      <Theme />
    </ThemeProvider>
  )
}