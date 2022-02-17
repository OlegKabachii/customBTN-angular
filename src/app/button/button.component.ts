import {Component, Input} from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  // Colors => ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'];
  // Sizes => ['small', 'medium', 'large'];

  @Input() config: { title: string, size: string, color: string, border: boolean } = {
    title: 'MyBTN',
    size: 'medium',
    color: 'primary',
    border: true
  }
  @Input() styles= {}

}
