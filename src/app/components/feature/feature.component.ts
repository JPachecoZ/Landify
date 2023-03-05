import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-feature',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.sass'],
})
export class FeatureComponent {
  @Input() title!: string;
  @Input() description!: string;
  @Input() icon!: string;
}
