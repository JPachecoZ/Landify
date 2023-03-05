import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { MainNavComponent } from 'src/app/components/main-nav/main-nav.component';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { FooterComponent } from 'src/app/components/footer/footer.component';
import { MetricComponent } from 'src/app/components/metric/metric.component';
import { MetricsComponent } from 'src/app/components/metrics/metrics.component';
import { FeatureComponent } from 'src/app/components/feature/feature.component';
import { FeaturesComponent } from 'src/app/components/features/features.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        MainNavComponent,
        HeaderComponent,
        FooterComponent,
        MetricsComponent,
        MetricComponent,
        FeaturesComponent,
        FeatureComponent,
      ],
      imports: [
        MatSidenavModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatToolbarModule,
        MatListModule,
        MatIconModule,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
