import { Component } from '@angular/core';
import { CountUpDirective } from 'ngx-countup';

@Component({
  selector: 'app-homepage',
  imports: [CountUpDirective],
  templateUrl: './homepage.html',
  styleUrl: './homepage.css',
})
export class Homepage {

  activeProject: number | null = null;

  toggleProject(index: number) {
    this.activeProject =
      this.activeProject === index ? null : index;
  }

}
