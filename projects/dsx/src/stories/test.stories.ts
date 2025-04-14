import type { Meta, StoryObj } from '@storybook/angular';
import { expect, userEvent, within } from '@storybook/test';
import { DsxComponent } from '../public-api';


const meta: Meta<DsxComponent> = {
  title: 'Example/Page',
  component: DsxComponent,
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/configure/story-layout
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<DsxComponent>;

export const LoggedOut: Story = {};
