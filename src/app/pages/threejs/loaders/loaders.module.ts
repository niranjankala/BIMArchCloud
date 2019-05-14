import { NgModule } from '@angular/core';

import { ThemeModule } from '../../../@theme/theme.module';
import { ThreeJsLoadersComponent } from './loaders.component';
import { ThreeJsObjLoaderComponent } from './objloader/objloader.component';
import { ThreeJsLoadersRoutingModule, routedComponents } from './loaders-routing.module';
//List all sub compoents after import to pass in the declarations
const components = [
  ThreeJsLoadersComponent,
  ThreeJsObjLoaderComponent,
];

@NgModule({
  imports: [
    ThemeModule,
    ThreeJsLoadersRoutingModule,
  ],
  exports: [
    ...components,
  ],
  declarations: [
    ...components,
  ],
  providers: [],
})
export class ThreeJsLoadersModule { }
