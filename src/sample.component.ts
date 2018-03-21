import { Component } from "@angular/core";
import { SampleService } from "./sample.service";

@Component({
  selector: "km-sample",
  template: `
    <h1>{{ text }}</h1>
    <button (click)="showSample()">{{ 'Show sample text' }}</button>
  `,
})
export class SampleComponent {
  public text = "Some text to be replaced with sample later.";

  constructor(
    private sampleService: SampleService,
  ) {}

  public showSample() {
    this.text = this.sampleService.getSample();
  }

}
