interface MinMaxRule {
  min: number;
  max: number;
}

/**
 * Input business rules
 */
export abstract class InputBusinessRules {
  static email = {
    min: 3,
    max: 120
  } as MinMaxRule;

  static password = {
    min: 3,
    max: 36
  } as MinMaxRule;

  static names = {
    min: 3,
    max: 120
  } as MinMaxRule;
}

export interface SelectionModel {
  readonly title?: string;
  readonly options: Map<string, string>;
}
