import { ModuleWithProviders, NgModule } from "@angular/core";

import { SampleComponent } from "./sample.component";
import { SampleService } from "./sample.service";

@NgModule({
  imports: [
  ],
  declarations: [
    SampleComponent,
  ],
  exports: [
    SampleComponent,
  ],
})
export class SampleModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: SampleModule,
      providers: [
        SampleService,
      ],
    };
  }
}
