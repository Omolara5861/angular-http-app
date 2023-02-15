import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent {

  @Input() isMode: boolean;
  @Output() toggle = new EventEmitter<unknown>();

  onToggleClicked(): void {
    this.toggle.emit();
  }
}
