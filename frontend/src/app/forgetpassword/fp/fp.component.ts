import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { FpservService } from "../fpserv.service";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-fp",
  templateUrl: "./fp.component.html",
  styleUrls: ["./fp.component.scss"]
})
export class FpComponent implements OnInit {
  forgetPasswordForm: FormGroup;
  emailPattern: any = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private fpServ: FpservService,
    private toastServ: ToastrService
  ) {}

  ngOnInit() {
    this.forgetPasswordForm = this.fb.group({
      email: ["", [Validators.required, Validators.pattern(this.emailPattern)]]
    });
  }
  submitEmail(data) {
    this.fpServ.forgotPassword(data).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.toastServ.success(data["message"], "", {
            timeOut: 1000
          });
        } else if (data["code"] === 400) {
          this.toastServ.error(
            "Failed to send Password link",
            data["message"],
            {
              timeOut: 1000
            }
          );
        }
      },
      error => {
        console.log("ERRRO", error);
        this.toastServ.error("Server - Error", error["error"]["message"], {
          timeOut: 1000
        });
      }
    );
  }
  cancel() {
    this.router.navigate(["/admin"]);
  }
}
