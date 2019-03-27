import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-submission-errors',
  templateUrl: './submission-errors.component.html',
  styleUrls: ['./submission-errors.component.scss']
})
export class SubmissionErrorsComponent {
  @Input() errors?: object;
  objectKeys = (obj) => obj ? Object.keys(obj) : [];
}
