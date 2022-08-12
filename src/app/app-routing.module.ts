import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListViewComponent } from './list-view/list-view.component';
import{NewListComponent} from './views/new-list/new-list.component'
const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: '', component: ListViewComponent},
  {path: 'list/list:id', component: ListViewComponent},
  {path: 'new-list', component: NewListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
