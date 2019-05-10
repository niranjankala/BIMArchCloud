import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BabylonComponent } from './babylon.component';
//import { FormInputsComponent } from './form-inputs/form-inputs.component';
//import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
//import { DatepickerComponent } from './datepicker/datepicker.component';
import { BabylonLoadersComponent } from './loaders/loaders.component';

const routes: Routes = [{
  path: '',
  component: BabylonComponent,
  children: [
    {
      path: 'loaders',
      component: BabylonLoadersComponent,
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
export class BabylonRoutingModule {

}
//Loader component will be in its module
export const routedComponents = [
  BabylonComponent,
  //FormInputsComponent,
  //FormLayoutsComponent,
  //DatepickerComponent,
];
