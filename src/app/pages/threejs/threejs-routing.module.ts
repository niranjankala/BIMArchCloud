import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThreeJsComponent } from './threejs.component';
//import { FormInputsComponent } from './form-inputs/form-inputs.component';
//import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
//import { DatepickerComponent } from './datepicker/datepicker.component';
import { ThreeJsLoadersComponent } from './loaders/loaders.component';

const routes: Routes = [{
  path: '',
  component: ThreeJsComponent,
  children: [
    {
      path: 'loaders',
      component: ThreeJsLoadersComponent,
    },
  ],
}];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class ThreeJsRoutingModule {

}
//Loader component will be in its module
export const routedComponents = [
  ThreeJsComponent,
  //FormInputsComponent,
  //FormLayoutsComponent,
  //DatepickerComponent,
];
