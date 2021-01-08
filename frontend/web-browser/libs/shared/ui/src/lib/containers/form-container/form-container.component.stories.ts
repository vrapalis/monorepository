import { Meta, Story } from '@storybook/angular';
import { FormContainerComponent } from './form-container.component';
import { StButtonComponent } from '../../components/examples/st-button/st-button.component';

export default {
  title: 'Containers/Forms/Form Container',
  parameters: {
    docs: {
      description: {
        // component: 'some component _markdown_'
      },
      iframeHeight: 300
    }
  }
} as Meta;

const componentTemplate = `
<sh-ui-form-container>
  <p>Example form container</p>
  <sh-ui-st-button title='title' type='default'></sh-ui-st-button>
</sh-ui-form-container>
`;

const Template: Story = (args: FormContainerComponent) => ({
  moduleMetadata: {
    declarations: [StButtonComponent, FormContainerComponent]
  },
  component: FormContainerComponent,
  props: args,
  template: componentTemplate
});

export const Default = Template.bind({}) as Story;
Default.parameters = {
  layout: 'fullscreen',
  docs: {
    description: {
      component: 'Default form container with example components in it'
    },
    source: {
      code: componentTemplate
    }
  }
};
