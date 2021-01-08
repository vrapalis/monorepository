export const templateFlatButtonBasic = `<sh-ui-flat-button [type]='type' [disabled]='disabled'>Basic</sh-ui-flat-button>`;
export const templateFlatButtonSourceBasic = `<sh-ui-flat-button type='basic'>Basic</sh-ui-flat-button>`;
export const templateFlatButtonPrimary = `<sh-ui-flat-button [type]='type' [disabled]='disabled'>Primary</sh-ui-flat-button>`;
export const templateFlatButtonSourcePrimary = `<sh-ui-flat-button type='primary'>Primary</sh-ui-flat-button>`;
export const templateFlatButtonAccent = `<sh-ui-flat-button [type]='type' [disabled]='disabled'>Accent</sh-ui-flat-button>`;
export const templateFlatButtonSourceSourceAccent = `<sh-ui-flat-button type='accent'>Accent</sh-ui-flat-button>`;
export const templateFlatButtonWarn = `<sh-ui-flat-button [type]='type' [disabled]='disabled'>Warn</sh-ui-flat-button>`;
export const templateFlatButtonSourceSourceWarn = `<sh-ui-flat-button type='warn'>Warn</sh-ui-flat-button>`;

export const TemplateFlatBasic = (args) => ({
  template: templateFlatButtonBasic,
  props: args
});

export const TemplateFlatPrimary = (args) => ({
  template: templateFlatButtonPrimary,
  props: args
});

export const TemplateFlatAccent = (args) => ({
    template: templateFlatButtonAccent,
    props: args
  })

;export const TemplateFlatWarn = (args) => ({
  template: templateFlatButtonWarn,
  props: args
});

