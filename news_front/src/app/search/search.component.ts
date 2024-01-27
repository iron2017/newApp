import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule,MatButton,MatInputModule,MatFormFieldModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  searchQuery: string = ''; // Initialize searchQuery property
  @Output() categoryEvent = new EventEmitter<string>();
  @Output() searchEvent = new EventEmitter<string>(); // Emit search event

  // Method to handle form submission
  onSubmit(): void {
    // Emit the search event with the search query
    this.searchEvent.emit(this.searchQuery);
  }
}
