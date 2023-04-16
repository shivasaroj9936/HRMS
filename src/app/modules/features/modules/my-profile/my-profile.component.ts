import { Component, OnInit } from "@angular/core";
import { UtilityServiceService } from "src/app/services/utility-service/utility-service.service";
import {
  ProfilePart,
  PROFILE_PARTS,
  USERDATA,
} from "../dashboard/interfaces/interfaces";

@Component({
  selector: "app-my-profile",
  templateUrl: "./my-profile.component.html",
  styleUrls: ["./my-profile.component.scss"],
})
export class MyProfileComponent implements OnInit {
  profileParts: ProfilePart[] = PROFILE_PARTS;
  userData!: USERDATA;
  constructor(private utilityService: UtilityServiceService) {}

  ngOnInit(): void {
    this.userData=this.utilityService.userData;
  }
}
