// tslint:disable no-unused-expression
import { TestBed, async, inject } from '@angular/core/testing';
import { expect } from 'chai';

import { SampleModule, SampleService } from '.';

describe('SampleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SampleModule.forRoot()],
    });
  });

  it('should be instantiated', async(inject([SampleService], (sampleService: SampleService) => {
    expect(sampleService).to.be.an('object').that.is.an.instanceof(SampleService);
  })));

  describe('getSample()', () => {
    it('should return sample string', async(inject([SampleService], (sampleService: SampleService) => {
      expect(sampleService.getSample()).to.be.a('string');
    })));
  });
});
