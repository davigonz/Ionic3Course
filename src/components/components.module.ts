import { NgModule } from '@angular/core';
import { GroupsComponent } from './groups/groups';
import { BackgroundCardComponent } from './background-card/background-card';
import { MessagesComponent } from './messages/messages';
@NgModule({
	declarations: [GroupsComponent,
    BackgroundCardComponent,
    MessagesComponent],
	imports: [],
	exports: [GroupsComponent,
    BackgroundCardComponent,
    MessagesComponent]
})
export class ComponentsModule {}
