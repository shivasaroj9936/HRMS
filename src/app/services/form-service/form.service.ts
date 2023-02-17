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
    new_password: [
      Validators.pattern(PATTERN.password),
      Validators.minLength(VALIDATION_CRITERIA.passwordMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.passwordMaxLength),
    ],
    old_password: [
      Validators.pattern(PATTERN.password),
      Validators.minLength(VALIDATION_CRITERIA.passwordMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.passwordMaxLength),
    ],
    confirm_password: [
      Validators.pattern(PATTERN.password),
      Validators.minLength(VALIDATION_CRITERIA.passwordMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.passwordMaxLength),
    ],

    first_name:[    ],
    last_name:[    ],
    dob:[    ],
    gender:[    ],
    contact_number:[    ],
    marital_status:[    ],
    tot_exp_month:[    ],
    tot_exp_years:[    ],
    rel_exp_year:[    ],
    rel_exp_month:[    ],
    address:[    ],
    school: [],
    education: [],
    time_from: [],
    time_to: [],
    language: [],
    professional_course: [],
    description: [],

  };
  getControl(name: string, requierd = true) {
    // @ts-ignore: unreachable code error

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
