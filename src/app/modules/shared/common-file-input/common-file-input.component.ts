import { Component, ElementRef, Input, OnInit, ViewChild } from "@angular/core";
import { FormControl } from "@angular/forms";
import { TOAST_MESSAGES } from "src/app/constants/messages";
import { NotificationService } from "src/app/services/notification-service/notification.service";

@Component({
  selector: "app-common-file-input",
  templateUrl: "./common-file-input.component.html",
  styleUrls: ["./common-file-input.component.scss"],
})
export class CommonFileInputComponent implements OnInit {
  @Input() inputFormControl!: FormControl;
  @Input() label!: string;
  @Input() labelStyle!: string;

  @Input() data: any;
  @Input() errorType: any;
  @Input() fileType: any;
  @Input() labelSuggestation!: string;
  @ViewChild("fileInput", { static: false }) fileElement!: ElementRef;

  constructor(private notificationService: NotificationService) {}

  ngOnInit(): void {}

  fileChangeEvent(fileInput: any) {
    console.log(fileInput);

    if (fileInput.target.files && fileInput.target.files[0]) {
      const file = fileInput.target.files[0];
      const fileSize = file.size / 1000 / 1000; // in Mb

      // if (!fileTypeArr.includes(file.type)) {
      //   this.toastService.warning(TOAST_MESSAGES.FILE_TYPE_ERROR);
      //   this.fileElement.nativeElement.value = null;
      //   return;
      // }
      if (fileSize > 10) {
        this.notificationService.showError(TOAST_MESSAGES.FILE_SIZE_ERROR);
        this.fileElement.nativeElement.value = null;
        return;
      }

   
      // this.inputFormControl.patchValue('')

    } 
  }
}
