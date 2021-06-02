// Button.stories.tsx
import React from 'react';
import { Button, ButtonProps } from './index';

import { Story, Meta } from '@storybook/react';

export default {
    title: 'Naruto/Button',
    component: Button,
  } as Meta;

//👇 We create a “template” of how args map to rendering
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const ButtonQuiz = Template.bind({});

ButtonQuiz.args = {
  label: 'Button Quiz',
  backgroundColor: '#DEC34D'
};

export const Naruto = Template.bind({});
 Naruto.args = {
  label: 'Button Quiz',
};