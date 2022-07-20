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
      this.errorMsg = "Name can't be empty.";
      // this.isError = true;
    }
  }

  generateTeams() {
    if (this.teamsNumber && this.teamsNumber <= this.members.length) {
      // this.teamsNumber = 0 / '' / false / null / undefined
      for (let i: number = 0; i < this.teamsNumber; i++) {
        let randomIndex = Math.floor(Math.random() * this.members.length);
        let randomMember = this.members[randomIndex];
        this.members.splice(randomIndex, 1);
        this.teams.push([randomMember]);
      }

      while (this.members.length > 0) {
        for (let i: number = 0; i < this.teamsNumber; i++) {
          if (this.members.length > 0) {
            let randomIndex = Math.floor(Math.random() * this.members.length);
            let randomMember = this.members[randomIndex];
            this.members.splice(randomIndex, 1);
            this.teams[i].push(randomMember);
          }
        }
      }
      this.teamsNumber = "";
      console.log(this.teams);
    } else if (this.teamsNumber > this.members.length) {
      this.errorMsg =
        "Number of teams must be bigger or equal to number of members.";
    } else {
      this.errorMsg = "Number of teams can't be empty or less than 1.";
    }
  }
}
