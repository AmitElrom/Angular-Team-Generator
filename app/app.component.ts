import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  newMemberName: string = "";
  members: string[] = [];
  teamsNumber: number | "" = "";
  teams: string[][] = [];
  // option 1 - error
  errorMsg: string = "";
  // option 2 - error
  // isError: boolean = false;

  saveMember(memberName: string) {
    this.newMemberName = memberName;
  }

  saveTeamsNumber(teamsNumber: number) {
    this.teamsNumber = teamsNumber;
  }

  addMember() {
    if (this.newMemberName.trim() !== "") {
      this.members.push(this.newMemberName);
      this.newMemberName = "";
      this.errorMsg = "";
    } else {
      this.errorMsg = "Name can't be empty";
      // this.isError = true;
    }
    console.log(this.members);
  }

  generateTeams() {
    if (this.teamsNumber >= 0) {
      for (let i = 0; i < this.teamsNumber; i++) {
        let randomIndex = Math.floor(Math.random() * this.members.length);
        let member = this.members[randomIndex];

        // case - already has a team's array
        if (this.teams[i]) {
          this.teams[i].push(member);
        } else {
          this.teams[i] = [member];
        }
      }
    }
  }
}
