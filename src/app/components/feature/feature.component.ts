import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.sass'],
})
export class FeatureComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() icon: string = '';
}
