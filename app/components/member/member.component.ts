import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-member",
  templateUrl: "./member.component.html",
  styleUrls: ["./member.component.css"],
})
export class MemberComponent implements OnInit {
  constructor() {}

  @Input() member: string = "";

  ngOnInit(): void {}
}
