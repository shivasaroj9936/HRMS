import { Injectable } from "@angular/core";
import { FormGroup } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root",
})
export class NotificationService {
  constructor(private toastr: ToastrService) {}

  showSuccess(message: string, title: string) {
    this.toastr.success(message, title);
  }

  showError(message: string, title: string = "Error !") {
    this.toastr.error(message, title);
  }

  showInfo(message: string, title: string) {
    this.toastr.info(message, title);
  }

  showWarning(message: string, title: string) {
    this.toastr.warning(message, title);
  }

  checkControls(form: FormGroup) {
    const controls = form.controls;
    const keys = Object.keys(controls);
    console.log(controls);

    keys.every((key) => {
      const error = controls[key].hasError("required");
      // console.log(error);

      if (error) {
        // console.log(controls[key].errors);
        this.showError(`${key} is requierd`, "");
        return false;
      } else return true;
    });
  }
}
