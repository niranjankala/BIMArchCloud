import { NgModule } from '@angular/core';

import { ThemeModule } from '../../@theme/theme.module';
import { BabylonRoutingModule, routedComponents } from './babylon-routing.module';
import { BabylonLoadersModule } from './loaders/loaders.module';

@NgModule({
  imports: [
    ThemeModule,
    BabylonRoutingModule,
    BabylonLoadersModule,
  ],
  declarations: [
    ...routedComponents,
  ],
})
export class BabylonModule { }
