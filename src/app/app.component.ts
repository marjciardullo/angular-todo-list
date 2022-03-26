import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  item: string = '';
  list: string[] = [];
  meuStorage = localStorage;

  adicionarItem() {
    this.list.push(this.item);
    for (let i = 0; i <= this.list.length; i++) {
      localStorage.setItem('item', this.list[i]);
    }
  }

  removerItem(i: number) {
    this.list.splice(i, 1);
  }
}
