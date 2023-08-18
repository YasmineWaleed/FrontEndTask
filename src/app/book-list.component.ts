import { Component, OnInit } from '@angular/core';
import { Book } from './book.model';
import { BookService } from './book.service';

@Component({
  selector: 'app-book-list',
  template: `
    <h2>Book List</h2>
    <ul>
      <li *ngFor="let book of books" (click)="showDetails(book)">
        <img [src]="book.thumbnailUrl" [alt]="book.title" />
        <span>{{ book.title }}</span>
      </li>
    </ul>
    <app-book-details [selectedBook]="selectedBook" (close)="clearSelectedBook()"></app-book-details>
  `,
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  selectedBook: Book | null = null;

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.bookService.getBooks().subscribe((books) => {
      this.books = books;
    });
  }

  showDetails(book: Book) {
    this.selectedBook = book;
  }

  clearSelectedBook() {
    this.selectedBook = null;
  }
}
