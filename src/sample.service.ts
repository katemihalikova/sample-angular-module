import { Injectable } from "@angular/core";

@Injectable()
export class SampleService {
  public getSample() {
    return "This is a sample string.";
  }
}
