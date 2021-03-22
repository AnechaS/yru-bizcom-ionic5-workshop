import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { items as mockupItems } from './mock-items';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  text: string;
  isAdding = false;
  items: Item[];

  constructor() {}

  ngOnInit() {
    this.getItems();
  }

  toggleForm() {
    this.isAdding = !this.isAdding;
    this.text = '';
  }

  getItems() {
    this.items = mockupItems as Item[];
  }

  addItem() {
    const items: Item = {
      item_id: this.items.length + 1,
      title: this.text,
      completed: 0,
    };

    this.items.push(items);

    this.isAdding = false;
  }

  changeComplate(i: number, { completed, ...obj }: Item) {
    this.items.splice(i, 1, {
      ...obj,
      completed: completed ? 0 : 1
    });
  }

  deleteItem(i: number, object: Item) {
    this.items.splice(i, 1);
  }
}
