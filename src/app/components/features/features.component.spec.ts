import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturesComponent } from './features.component';
import { FeatureComponent } from '../feature/feature.component';

describe('FeaturesComponent', () => {
  let component: FeaturesComponent;
  let fixture: ComponentFixture<FeaturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeaturesComponent, FeatureComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FeaturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
