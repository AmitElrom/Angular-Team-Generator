import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { MemberComponent } from "./components/member/member.component";
import { TeamComponent } from "./components/team/team.component";

@NgModule({
  declarations: [AppComponent, MemberComponent, TeamComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
