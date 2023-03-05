import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-metric',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.sass'],
})
export class MetricComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';
}
