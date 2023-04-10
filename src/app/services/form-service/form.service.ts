import { Injectable, ViewChild } from "@angular/core";
import { FormGroupDirective, Validators } from "@angular/forms";
import { PATTERN } from "src/app/constants/pattern";
import { VALIDATION_CRITERIA } from "src/app/constants/validation-criteria";

@Injectable({
  providedIn: "root",
})
export class FormService {

  constructor() { }

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

    name: [
      Validators.minLength(VALIDATION_CRITERIA.nameMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.nameMaxLength),
      Validators.pattern(PATTERN.name),

    ],
    dob: [],
    gender: [],
    contact_number: [
      Validators.minLength(VALIDATION_CRITERIA.phoneMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.phoneMaxLength),
      Validators.pattern(PATTERN.phone)
    ],
    marital_status: [],
    tot_exp_month: [ Validators.pattern(PATTERN.phone)],
    tot_exp_years: [ Validators.pattern(PATTERN.phone)],
    rel_exp_year: [ Validators.pattern(PATTERN.phone)],
    rel_exp_month: [ Validators.pattern(PATTERN.phone)],
    address: [
      Validators.minLength(VALIDATION_CRITERIA.addressMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.addressMaxLength),
    ],
    school: [],
    education: [],
    time_from: [],
    time_to: [],
    language: [],
    professional_course: [],
    description: [
      Validators.minLength(VALIDATION_CRITERIA.descMinLength),
      Validators.maxLength(VALIDATION_CRITERIA.descMaxLength),
    ],
    department_name: [],
    job_code: [],
    location: [],
    experience: [],
    position_title: [],
    candidate_experience: [],
    cv: [],
    skill: [],
    job_location: [],
    chkbox: [],
    dsr: []
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
    if (name === 'chkbox') {
      return [false, compose]
    }
    return [null, compose];
  } 


}
