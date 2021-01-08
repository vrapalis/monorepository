/**
 * Input business rules
 */
export abstract class InputBusinessRules {
  static email = {
    min: 3,
    max: 120
  };

  static password = {
    min: 3,
    max: 36
  };
}
