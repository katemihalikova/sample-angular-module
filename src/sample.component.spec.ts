import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { expect } from 'chai';

import { SampleModule, SampleComponent, SampleService } from '.';

describe('SampleComponent', () => {
  let fixture: ComponentFixture<SampleComponent>;
  let heading: HTMLElement;
  let button: HTMLElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [SampleModule.forRoot()],
    });

    fixture = TestBed.createComponent(SampleComponent);
    fixture.detectChanges();

    heading = fixture.debugElement.query(By.css('h1')).nativeElement;
    button = fixture.debugElement.query(By.css('button')).nativeElement;
  });

  it('should be instantiated', () => {
    expect(fixture.componentInstance).to.be.an('object').that.is.an.instanceof(SampleComponent);
  });

  it('should have default text in heading', () => {
    expect(heading.textContent).to.equal('Some text to be replaced with sample later.');
  });

  describe('click on button', () => {
    it('should change heading to sample text', () => {
      button.click();
      fixture.detectChanges();

      expect(heading.textContent).to.equal(fixture.debugElement.injector.get(SampleService).getSample());
    });
  });
});
