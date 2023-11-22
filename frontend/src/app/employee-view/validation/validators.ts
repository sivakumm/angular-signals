import {ControlValidationState} from "./validation-state";
import {ValidationFn} from "./validation-fn";
import {FormValidationState} from "./form-validation-state";

export class Validators {

  public static validate(validationFns: ValidationFn[]): FormValidationState {
    const controlValidations = Validators.validateControls(validationFns);
    return {
      valid: controlValidations.every(controlValidation => controlValidation.valid),
      controlValidationStates: controlValidations
    };
  }

  public static validateControls(validationFns: ValidationFn[]): ControlValidationState[] {
    return validationFns.map(validationFn => validationFn());
  }

  public static minLength(controlName: string, input: string | null | undefined, requiredLength: number): ValidationFn {
    return () => {
      const valid = !!input && input.length >= requiredLength;
      return {
        valid,
        controlName,
        message: !valid ? `Must be at least ${requiredLength} characters long` : ''
      };
    }
  }
}
