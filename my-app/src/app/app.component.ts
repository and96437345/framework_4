import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { BookCoverComponent } from './book-cover/book-cover.component';
import { BookDescComponent } from './book-desc/book-desc.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, BookCoverComponent, BookDescComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
  bookName = 'Незванный гость';
}
