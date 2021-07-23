import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'untitled';
  counter = 0
  updateAt?: number

  get cannotDecrease(): boolean {
    return this.counter <= 0
  }

  increase(): void {
    this.updateAt = Date.now()
    this.counter++
  }

  decrease(): void {
    this.updateAt = Date.now()
    this.counter--
  }

  toOne(): void {
    this.updateAt = Date.now()
    this.counter = 0
  }

  clack(e: MouseEvent) {
    if (e) {
      // e.target.style.background('green')
    }
    // console.log(e)
  }
}
