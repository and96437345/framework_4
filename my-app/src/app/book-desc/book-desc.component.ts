import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-book-desc',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './book-desc.component.html',
  styleUrl: './book-desc.component.css'
})
export class BookDescComponent {
  bookTitle = 'Незванный гость';
  bookYear = '2023';
  bookPages = '310';
  publishing = 'аст'
  review = 'Четыре человека собираются на ужин. Для одного из них он станет последним...'
  bookAutor = 'Б.П. Уолтер'
  bookAutorImage = 'https://i.livelib.ru/auface/2376337/140x140/0861/B._P._Uolter.jpg'
  bookPrice = '1595';
}
