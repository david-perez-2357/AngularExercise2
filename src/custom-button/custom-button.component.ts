import { Component } from '@angular/core';
import {Input} from '@angular/core';
import {MatIcon} from '@angular/material/icon';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [
    MatIcon,
    NgClass
  ],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css',
})
export class CustomButtonComponent {
  @Input() text: string = 'Button';
  @Input() icon: string = 'add';
}
