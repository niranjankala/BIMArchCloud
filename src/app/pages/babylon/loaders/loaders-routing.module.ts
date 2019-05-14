import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BabylonLoadersComponent } from './loaders.component';
//import { FormInputsComponent } from './form-inputs/form-inputs.component';
//import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
//import { DatepickerComponent } from './datepicker/datepicker.component';
import { BabylonObjLoaderComponent } from './objloader/objloader.component';

const routes: Routes = [{
  path: '',
  component: BabylonLoadersComponent,
  children: [
    {
      path: 'objloader',
      component: BabylonObjLoaderComponent,
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
export class BabylonLoadersRoutingModule {

}
//Loader component will be in its module
export const routedComponents = [
  BabylonLoadersComponent,
  //FormInputsComponent,
  //FormLayoutsComponent,
  //DatepickerComponent,
];
