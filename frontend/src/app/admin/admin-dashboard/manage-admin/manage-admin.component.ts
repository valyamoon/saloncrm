import { Component, OnInit } from "@angular/core";
import { AdminServService } from "../admin-serv.service";
import { ToastrService } from "ngx-toastr";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: "app-manage-admin",
  templateUrl: "./manage-admin.component.html",
  styleUrls: ["./manage-admin.component.scss"]
})
export class ManageAdminComponent implements OnInit {
  isAddModal: boolean = false;
  modalHeaderText = "Register Admin";
  registerAdminForm: FormGroup;
  constructor(
    private adminServ: AdminServService,
    private toastrServ: ToastrService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.adminServ.setHeaderText("Manage Admin");
    this.registerAdminForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  openRegisterModal() {
    this.isAddModal = true;
  }
  dismissModal() {
    this.isAddModal = false;
  }
  registerUser(data) {
    console.log(data);
  }
}
