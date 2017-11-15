import { NgModule } from '@angular/core';
import { GroupsComponent } from './groups/groups';
import { BackgroundCardComponent } from './background-card/background-card';
import { MessagesComponent } from './messages/messages';
import { CustomItemComponent } from './custom-item/custom-item';
@NgModule({
    declarations: [GroupsComponent,
        BackgroundCardComponent,
        MessagesComponent,
        CustomItemComponent],
    imports: [],
    exports: [GroupsComponent,
        BackgroundCardComponent,
        MessagesComponent,
        CustomItemComponent]
})
export class ComponentsModule { }