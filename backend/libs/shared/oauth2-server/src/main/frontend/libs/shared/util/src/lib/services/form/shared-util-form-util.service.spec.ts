import { SharedUtilFormUtilService } from '@frontend/shared/util';
import { TestBed } from '@angular/core/testing';

describe('Form Util Test Group', () => {
  let formUtilService: SharedUtilFormUtilService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [SharedUtilFormUtilService] });
    formUtilService = TestBed.inject(SharedUtilFormUtilService);
  });

  test('Service should be injected', () => {
    expect(formUtilService).not.toBeUndefined();
  });

  test('Password is the same return true', () => {
    const password = '246135';
    const passwordRepeated = '246135';
    expect(formUtilService.isPasswordSame(password, passwordRepeated)).toBe(true);
  });

  test('Password is not the same return false', () => {
    const password = '246135';
    const passwordRepeated = '2461356';
    expect(formUtilService.isPasswordSame(password, passwordRepeated)).not.toBe(true);
  });
});