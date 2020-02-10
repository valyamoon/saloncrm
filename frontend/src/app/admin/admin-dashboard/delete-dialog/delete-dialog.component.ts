import { Component, OnInit } from "@angular/core";
import { AdminServService } from "../admin-serv.service";

@Component({
  selector: "app-delete-dialog",
  templateUrl: "./delete-dialog.component.html",
  styleUrls: ["./delete-dialog.component.scss"]
})
export class DeleteDialogComponent implements OnInit {
  isDelete: boolean;
  constructor(private adminServ: AdminServService) {}

  ngOnInit() {}
  // confirm(data) {
  //   if (data === "yes") {
  //     this.isDelete = true;
  //     this.adminServ.setDialogResponse(this.isDelete);
  //   } else if (data === "no") {
  //     this.isDelete = false;
  //     this.adminServ.setDialogResponse(this.isDelete);
  //   }
  // }
}
