import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PortalComponent } from './portal/portal.component';
const routes: Routes = [
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
