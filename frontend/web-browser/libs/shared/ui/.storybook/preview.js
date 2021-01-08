import { addParameters } from '@storybook/angular';
import { setCompodocJson } from '@storybook/addon-docs/angular';
import docJson from '../documentation.json';
import { DocsContainer, DocsPage } from '@storybook/addon-docs/blocks';

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage
  }
});

setCompodocJson(docJson);

export const parameters = {
  options: {
    storySort: {
      order: ['Intro', 'Containers', 'Components']
    }
  }
};
