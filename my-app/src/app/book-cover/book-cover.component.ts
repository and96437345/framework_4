import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-cover',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-cover.component.html',
  styleUrl: './book-cover.component.css'
})
export class BookCoverComponent {
  bookLink = 'https://cv1.litres.ru/pub/c/cover_415/69962113.webp'
}
