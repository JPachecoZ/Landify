import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-metric',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.sass'],
})
export class MetricComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() icon!: string;
}
