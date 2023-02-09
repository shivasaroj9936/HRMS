import { Injectable } from "@angular/core";
import { Validators } from "@angular/forms";
import { PATTERN } from "src/app/constants/pattern";
import { VALIDATION_CRITERIA } from "src/app/constants/validation-criteria";

@Injectable({
  providedIn: "root",
})
export class FormService {
  constructor() {}

  VALIDATION = {
    email: [
      Validators.pattern(PATTERN.email),
      Validators.maxLength(VALIDATION_CRITERIA.emailMaxLength),
    ],
    password: [
      Validators.pattern(PATTERN.password),
      Validators.minLength(VALIDATION_CRITERIA.passwordMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.passwordMaxLength),
    ],
  };
  getControl(name: string, requierd = true) {
    //@ts-ignore: unreachable code error

    let compose = [...this.VALIDATION[name]];
    if (requierd) {
      if (name === "checkbox") {
        compose.splice(0, 0, Validators.requiredTrue);
      } else {
        compose.splice(0, 0, Validators.required);
      }
    }
    return [null, compose];
  }
}
