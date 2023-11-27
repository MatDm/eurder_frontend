import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'app-create-item',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-item.component.html',
  styleUrl: './create-item.component.css'
})
export class CreateItemComponent {
  createItemForm = this.formBuilder.group({
    name: '',
    description: '',
    price: '',
    stockAmount: ''
  })
  constructor(private formBuilder: FormBuilder) {
  }

  onCreate() {

  }
}
