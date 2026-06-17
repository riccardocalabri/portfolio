import { AfterViewInit, Component, signal } from '@angular/core';
import { Navbar } from './components/navbar/navbar';
import { Homepage } from './components/homepage/homepage';
import { Footer } from './components/footer/footer';
import AOS from 'aos';

@Component({
  selector: 'app-root',
  imports: [Navbar, Homepage, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements AfterViewInit {
  protected readonly title = signal('portfolio');

  ngAfterViewInit(): void {
    AOS.init(
      {
        duration: 900,
        once: true
      }
    );
  }
}
