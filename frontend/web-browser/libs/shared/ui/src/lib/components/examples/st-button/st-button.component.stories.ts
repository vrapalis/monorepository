import { StButtonComponent, ButtonType } from './st-button.component';
import { Meta, Story } from '@storybook/angular';
import { Title } from '@storybook/addon-docs/blocks';

const type: ButtonType = 'default';

export default {
  title: 'Examples/Js/Button',
  component: StButtonComponent,
  parameters: {
    docs: {
      description: {
        // story: 'Story',
        // component: 'some component _markdown_'
      }
    }
  },
  argTypes: {
    title: {
      description: 'Change button title',
      table: {
        defaultValue: {
          summary: 'click'
        },
        type: {}
      },
      control: {
        type: 'text',
      }
    },
    type: {
      description: 'Change button type',
      // name: 'type',
      table: {
        defaultValue: {
          summary: 'default' as ButtonType
        },
        type: {
          // summary: 'Shows options to the Badge',
          // detail: 'Listing of available options'
        }
      },
      control: {
        type: 'select',
        options: ['default', 'primary'] as Array<ButtonType>
      }
    }
  }
} as Meta;

const Template: Story = (args: StButtonComponent) => ({
  component: StButtonComponent,
  props: args
});

export const Default = Template.bind({}) as Story;
Default.args = {
  title: 'click'
};
Default.parameters = {
  docs: {
    source : {
      code : `<sh-ui-st-button title='click' type='default'></sh-ui-st-button>`
    }
  }
}

export const Primary = Template.bind({}) as Story;
Primary.parameters = {
  docs: {
    source : {
      code : `<sh-ui-st-button title='click' type='primary'></sh-ui-st-button>`
    }
  }
};
Primary.args = {
  title: 'Primary',
  type: 'primary' as ButtonType
};


