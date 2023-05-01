import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { slideInRight } from "src/animations/slide-in-right";
import { TOAST_MESSAGES } from "src/app/constants/messages";
import { PROFILE_PICTURE_VALUE } from "src/app/constants/ui-texts/dashboard-card";
import { NotificationService } from "src/app/services/notification-service/notification.service";

@Component({
  selector: "app-profile-photo",
  templateUrl: "./profile-photo.component.html",
  styleUrls: ["./profile-photo.component.scss"],
  animations: [slideInRight],
})
export class ProfilePhotoComponent implements OnInit {
  uiMessage = PROFILE_PICTURE_VALUE;
  imageSrc!: any;
  imgForm!: FormGroup;
  @ViewChild("fileInput", { static: false }) fileElement!: ElementRef;

  constructor(
    private notificationService: NotificationService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.imgForm = this.formBuilder.group({
      img: [null, Validators.required],
    });
  }
  readURL(event: any): void {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const fileSize = file.size / 1000 / 1000; // in Mb
      if (fileSize > 10) {
        this.notificationService.showError(TOAST_MESSAGES.FILE_SIZE_ERROR);
        this.fileElement.nativeElement.value = null;
        return;
      }
      const reader = new FileReader();
      reader.onload = (e) => (this.imageSrc = reader.result);
      reader.readAsDataURL(file);
    }
  }
  remove() {
    this.imageSrc = "";
    this.imgForm.reset();
  }
  save() {
    if (this.imgForm.valid) {
      this.notificationService.showSuccess( "Profile Image Saved", ""  );
      this.fileElement.nativeElement.value = null;
      // this.imageSrc='';

    }else{
      this.notificationService.showError( 'Profile Image is Not Selected !',''  );
    }
  }
}
