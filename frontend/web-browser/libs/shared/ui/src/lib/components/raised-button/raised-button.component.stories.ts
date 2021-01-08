export const templateButtonBasic = `<sh-ui-raised-button [type]='type' [disabled]='disabled'>Basic</sh-ui-raised-button>`;
export const templateButtonSourceBasic = `<sh-ui-raised-button type='basic'>Basic</sh-ui-raised-button>`;
export const templateButtonPrimary = `<sh-ui-raised-button [type]='type' [disabled]='disabled'>Primary</sh-ui-raised-button>`;
export const templateButtonSourcePrimary = `<sh-ui-raised-button type='primary'>Primary</sh-ui-raised-button>`;
export const templateButtonAccent = `<sh-ui-raised-button [type]='type' [disabled]='disabled'>Accent</sh-ui-raised-button>`;
export const templateButtonSourceSourceAccent = `<sh-ui-raised-button type='accent'>Accent</sh-ui-raised-button>`;
export const templateButtonWarn = `<sh-ui-raised-button [type]='type' [disabled]='disabled'>Warn</sh-ui-raised-button>`;
export const templateButtonSourceSourceWarn = `<sh-ui-raised-button type='warn'>Warn</sh-ui-raised-button>`;

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

