/**
 * Types of the button
 */
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';

export enum EButtonType {
  BASIC = 'basic', PRIMARY = 'primary', ACCENT = 'accent', WARN = 'warn'
}

/**
 * Abstract button, every button component should inherit from it
 */
@Component({
  template: ''
})
export abstract class AbstractButtonComponent implements OnChanges {
  @Input() disabled = false;
  @Input() type = EButtonType.BASIC;
  buttonType = this.getButtonType(this.type);

  getButtonType(type: EButtonType): string {
    switch (type) {
      case EButtonType.BASIC:
        return EButtonType['BASIC'];
      case EButtonType.PRIMARY:
        return EButtonType['PRIMARY'];
      case EButtonType.ACCENT:
        return EButtonType['ACCENT'];
      case EButtonType.WARN:
        return EButtonType['WARN'];
      default:
        return EButtonType['BASIC'];
    }
  }

  // eslint-disable-next-line
  ngOnChanges(changes: SimpleChanges): void {
    this.buttonType = this.getButtonType(this.type);
  }
}
