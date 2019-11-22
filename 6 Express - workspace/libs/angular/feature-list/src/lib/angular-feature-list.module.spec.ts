import { async, TestBed } from '@angular/core/testing';
import { AngularFeatureListModule } from './angular-feature-list.module';

describe('AngularFeatureListModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularFeatureListModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AngularFeatureListModule).toBeDefined();
  });
});
