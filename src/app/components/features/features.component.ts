import { Component } from '@angular/core';
import { Feature } from 'src/app/models/feature.model';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.sass']
})
export class FeaturesComponent {
  features: Feature[] = [
    {
      title: "Robust workflow",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
      icon: "../../assets/RobustWorkflow.svg"
    },
    {
      title: "Flexibility",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
      icon: "../../assets/Flexibility.svg"
    },
    {
      title: "User friendly",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
      icon: "../../assets/UserFriendly.svg"
    },
    {
      title: "Multiple layouts",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
      icon: "../../assets/MultipleLayouts.svg"
    },
    {
      title: "Better components",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
      icon: "../../assets/BetterComponents.svg"
    },
    {
      title: "Well organised",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed erat nibh tristique ipsum.",
      icon: "../../assets/WellOrganised.svg"
    },

  ]
}
