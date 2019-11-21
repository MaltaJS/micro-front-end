import { async, TestBed } from '@angular/core/testing';
import { AngularUtilsFormatterModule } from './angular-utils-formatter.module';

describe('AngularUtilsFormatterModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularUtilsFormatterModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AngularUtilsFormatterModule).toBeDefined();
  });
});
