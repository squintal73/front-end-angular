import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoreComponent } from './components/core/core.component';
import { ListComponent } from './components/list/list.component';


const routes: Routes = [
  { path: '', component: CoreComponent},
  { path: 'list', component: ListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
