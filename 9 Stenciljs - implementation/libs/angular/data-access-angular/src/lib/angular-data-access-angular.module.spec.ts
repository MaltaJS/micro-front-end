import { async, TestBed } from '@angular/core/testing';
import { AngularDataAccessAngularModule } from './angular-data-access-angular.module';

describe('AngularDataAccessAngularModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularDataAccessAngularModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AngularDataAccessAngularModule).toBeDefined();
  });
});
