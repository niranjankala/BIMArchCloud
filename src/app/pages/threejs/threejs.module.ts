import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { ThreeJsRoutingModule, routedComponents } from './threejs-routing.module';
import { ThreeJsLoadersModule } from './loaders/loaders.module';

@NgModule({
  imports: [
    ThemeModule,
    ThreeJsRoutingModule,
    ThreeJsLoadersModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class ThreeJsModule { }
