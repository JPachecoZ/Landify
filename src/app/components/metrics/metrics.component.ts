import { Component } from '@angular/core';
import { Metric } from 'src/app/models/metric.model';

@Component({
  selector: 'app-metrics',
  templateUrl: './metrics.component.html',
  styleUrls: ['./metrics.component.sass'],
})
export class MetricsComponent {
  metrics: Metric[] = [
    {
      title: '10,000+',
      description: 'Downloads per day',
      icon: '../../assets/RobustWorkflow.svg',
    },
    {
      title: '2 Million',
      description: 'Users',
      icon: '../../assets/MultipleLayouts.svg',
    },
    {
      title: '500+',
      description: 'Clients',
      icon: '../../assets/BetterComponents.svg',
    },
    {
      title: '140',
      description: 'Countries',
      icon: '../../assets/Countries.svg',
    },
  ];
}
