import { Component, OnInit } from "@angular/core";
import {
  BIRTHDAY_EMP_IMAGE_DATA,
  BIRTH_DAY,
  BITHDAY,
  IBIRTHDAYDATA,
} from "../../interfaces/interfaces";

@Component({
  selector: "app-birthday-celebration",
  templateUrl: "./birthday-celebration.component.html",
  styleUrls: ["./birthday-celebration.component.scss"],
})
export class BirthdayCelebrationComponent implements OnInit {
  birthDay: BITHDAY = BIRTH_DAY;
  imageData: IBIRTHDAYDATA[] = BIRTHDAY_EMP_IMAGE_DATA;
  constructor() {}

  ngOnInit(): void {}
}
