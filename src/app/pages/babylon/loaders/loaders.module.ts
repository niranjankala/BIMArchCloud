import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme/theme.module';
import { BabylonLoadersComponent } from './loaders.component';
import { BabylonObjLoaderComponent } from './objloader/objloader.component';
import { BabylonLoadersRoutingModule, routedComponents } from './loaders-routing.module';
const components = [
  BabylonLoadersComponent,
  BabylonObjLoaderComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    BabylonLoadersRoutingModule,
  ],
  exports: [
    ...components,
  ],
  declarations: [
    ...components,
  ],
  providers: [],
})
export class BabylonLoadersModule { }
