import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Book } from './book.model';

@Component({
  selector: 'app-book-details',
  template: `
    <div *ngIf="selectedBook">
      <h2>{{ selectedBook.title }}</h2>
      <p>Author: {{ selectedBook.author }}</p>
      <p>Publication Year: {{ selectedBook.publicationYear }}</p>
      <p>Description: {{ selectedBook.description }}</p>
      <button (click)="close.emit()">Close</button>
    </div>
  `,
})
export class BookDetailsComponent {
  @Input() selectedBook: Book | null = null;
  @Output() close = new EventEmitter<void>();
}