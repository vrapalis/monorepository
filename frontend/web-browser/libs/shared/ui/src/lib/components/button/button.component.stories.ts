export const templateButtonBasic = `<sh-ui-button [type]='type' [disabled]='disabled'>Basic</sh-ui-button>`;
export const templateButtonSourceBasic = `<sh-ui-button type='basic'>Basic</sh-ui-button>`;
export const templateButtonPrimary = `<sh-ui-button [type]='type' [disabled]='disabled'>Primary</sh-ui-button>`;
export const templateButtonSourcePrimary = `<sh-ui-button type='primary'>Primary</sh-ui-button>`;
export const templateButtonAccent = `<sh-ui-button [type]='type' [disabled]='disabled'>Accent</sh-ui-button>`;
export const templateButtonSourceSourceAccent = `<sh-ui-button type='accent'>Accent</sh-ui-button>`;
export const templateButtonWarn = `<sh-ui-button [type]='type' [disabled]='disabled'>Warn</sh-ui-button>`;
export const templateButtonSourceSourceWarn = `<sh-ui-button type='warn'>Warn</sh-ui-button>`;

export const TemplateBasic = (args) => ({
  template: templateButtonBasic,
  props: args
});

export const TemplatePrimary = (args) => ({
  template: templateButtonPrimary,
  props: args
});

export const TemplateAccent = (args) => ({
  template: templateButtonAccent,
  props: args
})

;export const TemplateWarn = (args) => ({
  template: templateButtonWarn,
  props: args
});
