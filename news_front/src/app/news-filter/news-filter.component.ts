import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-news-filter',
  standalone: true,
  imports: [FormsModule,MatButton,MatInputModule,MatFormFieldModule],
  templateUrl: './news-filter.component.html',
  styleUrl: './news-filter.component.css'
})
export class NewsFilterComponent {
  selectedCategories: string=""; // Initialize selected categories array
 
  @Output() filterEvent = new EventEmitter<string>(); // Emit filter event

  // Method to handle category selection
  handleCategorySelection(category: string): void {
    // Toggle category selection state
   

    // Emit the filter event with selected categories
    this.filterEvent.emit(this.selectedCategories);
  }
}
