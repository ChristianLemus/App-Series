import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from './shared/shared.module';
import { SeriesComponent } from './components/series/series.component';
import { DetailsComponent } from './components/details/details.component';

const routes: Routes = [
  { path: '', redirectTo: 'list/comedy', pathMatch: 'full' },
  { path: 'list/:gener', component: SeriesComponent },
  { path: 'list/:gener/detail/:id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), SharedModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
