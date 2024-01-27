import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatButton} from '@angular/material/button';
@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [MatButton,CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  @Input() totalCount: number = 0;
  @Output() prev = new EventEmitter<void>();
  @Output() next = new EventEmitter<void>();
  @Output() pageChange = new EventEmitter<number>();

  constructor() { }

  get totalPages(): number {
    return Math.ceil(this.totalCount / 9);
  }

  get paginationArray(): Array<number | string> {
    const paginationRange = 3; // Adjust the number of pages to display
    const pages: Array<number | string> = [];

    if (this.totalPages <= 7) {
      for (let i = 1; i <= this.totalPages; i++) {
        pages.push(i);
      }
    } else {
      const startPage = Math.max(2, this.currentPage - paginationRange);
      const endPage = Math.min(this.totalPages - 1, this.currentPage + paginationRange);

      if (startPage > 2) {
        pages.push(1, '...');
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < this.totalPages - 1) {
        pages.push('...', this.totalPages);
      }
    }

    return pages;
  }
  goToPage(page: number) {
    if (page !== this.currentPage && typeof page === 'number') {
      this.currentPage = page;
      this.pageChange.emit(page);
    }
  }

  prevPage(): void {
    this.prev.emit();
  }

  nextPage(): void {
    this.next.emit();
  }

}
