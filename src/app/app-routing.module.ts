import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { SingleViewComponent } from './single-view/single-view.component';

const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'single/:id',component:SingleViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
