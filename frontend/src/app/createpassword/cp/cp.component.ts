import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Routes, Router } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { AdminServService } from "../../admin/admin-dashboard/admin-serv.service";
import { ToastrService } from "ngx-toastr";
import { AllservService } from "../../allserv.service";

@Component({
  selector: "app-cp",
  templateUrl: "./cp.component.html",
  styleUrls: ["./cp.component.scss"]
})
export class CpComponent implements OnInit {
  setNewPasswordForm: FormGroup;
  resetkeyId: any;
  currentRoute: any;
  constructor(
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder,
    private adminServ: AdminServService,
    private toastServ: ToastrService,
    private router: Router,
    private allServ: AllservService
  ) {}

  ngOnInit() {
    this.resetkeyId = this.activatedRoute.snapshot.params["id"];

    this.setNewPasswordForm = this.fb.group({
      newpassword: [
        "",
        Validators.compose([Validators.required, Validators.minLength(3)])
      ]
    });

    this.currentRoute = localStorage.getItem("route");
  }
  submitNewPassword(data) {
    let dataToPass = {
      resetkey: this.resetkeyId,
      password: data.newpassword
    };
    this.adminServ.resetNewPassword(dataToPass).subscribe(
      (data: any) => {
        if (data["code"] === 200) {
          this.toastServ.success(data["message"], "", {
            timeOut: 1000
          });
          this.router.navigate([this.currentRoute]);
        } else if (data["code"] === 400) {
          this.toastServ.error("Failed to reset password", data["message"], {
            timeOut: 1000
          });
        }
      },
      error => {
        this.toastServ.error("Server - Error", error["error"]["message"], {
          timeOut: 1000
        });
      }
    );
  }
}
