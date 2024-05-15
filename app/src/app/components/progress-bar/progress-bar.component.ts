import { Component , Input} from '@angular/core';

import { MatProgressBarModule } from '@angular/material/progress-bar'
@Component({
  selector: 'app-progress-bar',
  standalone: true,
  imports: [MatProgressBarModule],
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.scss'
})
export class ProgressBarComponent {
  @Input() progress: number = 0;

  stepLabels: string[] = [
    "Login",
    "Record",
    "Review",
    "Submit"
  ];
}
