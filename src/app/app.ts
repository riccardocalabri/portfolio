import { Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Homepage } from './components/homepage/homepage';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [Navbar, Homepage, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('portfolio');
}
