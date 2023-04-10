import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  QueryList,
  TemplateRef,
  ViewChild,
  ViewChildren,
} from "@angular/core";
import { FormBuilder, FormGroup, FormGroupDirective } from "@angular/forms";
import { MatDialogRef } from "@angular/material/dialog";
import { NguCarouselConfig } from "@ngu/carousel";
import { FormService } from "src/app/services/form-service/form.service";
import { NotificationService } from "src/app/services/notification-service/notification.service";

@Component({
  selector: "app-covid-help-desk",
  templateUrl: "./covid-help-desk.component.html",
  styleUrls: ["./covid-help-desk.component.scss"],
})
export class CovidHelpDeskComponent implements OnInit, AfterViewInit {
  covid_precaution_advice = [
    {
      title: "Wear a mask",
      description: `Face masks, gloves and other protective gear can help stop the spread of coronavirus.
    Wearing a mask doesn’t imply that you disregard social distancing. In addition to social distancing, keep proper hygiene, especially, when you touch your mask.`,
    },
    {
      title: "Wash ‘Em, Wash ‘Em Good ",
      description: `Good hand washing is the first line of defense to stay safe from Covid-19. Respiratory viruses like Coronavirus spreads when the virus gets into your body through your eyes, throat, or nose. Most often, it happens through your hands.`,
    },
  ];

  covidHelpForm!: FormGroup;
  @ViewChild(FormGroupDirective) formGroupDirective!: FormGroupDirective;

  constructor(
    private formBuilder: FormBuilder,
    private _formService: FormService,
    private notificationService: NotificationService,
    public dialogRef: MatDialogRef<CovidHelpDeskComponent>,

  ) {}

  @ViewChildren("listofDivs", { read: TemplateRef }) listToShow!: QueryList< ElementRef<HTMLDivElement>>;
  carouselConfig: NguCarouselConfig = {
    grid: { xs: 1, sm: 1, md: 1, lg: 1, all: 0 },
    load: 1,
    interval: { timing: 4000, initialDelay: 1000 },
    loop: true,
    touch: true,
    velocity: 0.2,
  };
  dataSource: any = [];

  ngOnInit(): void {
    this.createForm();
  }

  ngAfterViewInit(): void {
    this.listToShow.forEach((item: any) => {
      this.dataSource.push(item);
    });
  }

  createForm() {
    this.covidHelpForm = this.formBuilder.group({
      title: this._formService.getControl("name"),
      contact_number: this._formService.getControl("contact_number"),
      address: this._formService.getControl("address"),
      description: this._formService.getControl("address"),
    });
  }

  getControl(control: string): any {
    return this.covidHelpForm?.controls[control];
  }

  save() {
    if (this.covidHelpForm.valid) {
      this.notificationService.showSuccess("Saved", "Your Information");
      this.formGroupDirective.resetForm();
      this.dialogRef.close();
    } else {
    }
  }
}
