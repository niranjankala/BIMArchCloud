import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThreeJsLoadersComponent } from './loaders.component';
//import { FormInputsComponent } from './form-inputs/form-inputs.component';
//import { FormLayoutsComponent } from './form-layouts/form-layouts.component';
//import { DatepickerComponent } from './datepicker/datepicker.component';
import { ThreeJsObjLoaderComponent } from './objloader/objloader.component';

const routes: Routes = [{
  path: '',
  component: ThreeJsLoadersComponent,
  children: [
    {
      path: 'objloader',
      component: ThreeJsObjLoaderComponent,
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
export class ThreeJsLoadersRoutingModule {

}
//Loader component will be in its module
export const routedComponents = [
  ThreeJsLoadersComponent,
  //FormInputsComponent,
  //FormLayoutsComponent,
  //DatepickerComponent,
];
