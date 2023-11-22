import {ControlValidationState} from "./validation-state";

export interface FormValidationState {
  valid: boolean;
  controlValidationStates: ControlValidationState[];
}
