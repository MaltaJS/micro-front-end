import { async, TestBed } from '@angular/core/testing';
import { AngularUiComponentsModule } from './angular-ui-components.module';

describe('AngularUiComponentsModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [AngularUiComponentsModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(AngularUiComponentsModule).toBeDefined();
  });
});
