import { NgModule } from '@angular/core';
import { GroupsComponent } from './groups/groups';
import { BackgroundCardComponent } from './background-card/background-card';
@NgModule({
	declarations: [GroupsComponent,
    BackgroundCardComponent],
	imports: [],
	exports: [GroupsComponent,
    BackgroundCardComponent]
})
export class ComponentsModule {}
