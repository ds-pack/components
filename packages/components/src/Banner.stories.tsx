import React, { ComponentProps } from 'react';
import { Story } from '@storybook/react';
import { Banner } from './Banner'

//👇 This default export determines where your story goes in the story list
export default {
  title: 'Banner',
  component: Banner,
};

//👇 We create a “template” of how args map to rendering
const Template: Story<ComponentProps<typeof Banner>> = (args) => <Banner {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  /*👇 The args you need here will depend on your component */
};