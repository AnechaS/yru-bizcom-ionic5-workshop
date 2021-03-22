import { Component, OnInit } from '@angular/core';
import { Item } from './item.model';
import { ItemService } from './item.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  text: string;
  isAdding = false;
  items: Item[];
  errorMessage: string = '';

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.getItems();
  }

  toggleForm() {
    this.isAdding = !this.isAdding;
    this.text = '';
  }

  clearErrorMessage() {
    this.errorMessage = '';
  }

  async refresh(event) {
    await this.getItems();
    event.target.complete();
  }

  async getItems(): Promise<void> {
    this.clearErrorMessage();

    try {
      const data = await this.itemService.getAll();
      this.items = data.results;
    } catch (error) {
      this.errorMessage = 'Failed to fetch items';
    }
  }

  addItem() {
    this.clearErrorMessage();

    this.itemService.create({ title: this.text }).subscribe(
      (data) => {
        this.items.push(data);

        this.isAdding = false;
      },
      (error) => {
        this.errorMessage = 'Failed to create the item';
      }
    );
  }

  changeComplate(i: number, { item_id, completed /* , ...obj */ }: Item) {
    this.clearErrorMessage();

    this.itemService
      .update(item_id, { completed: completed ? 0 : 1 })
      .subscribe(
        (data) => {
          this.items.splice(i, 1, data);
        },
        (error) => {
          this.errorMessage = 'Failed to update the item';
        }
      );
  }

  deleteItem(i: number, object: Item) {
    this.clearErrorMessage();

    this.itemService.delete(object.item_id).subscribe(
      () => {
        this.items.splice(i, 1);
      },
      (error) => {
        this.errorMessage = 'Failed to delete the item';
      }
    );
  }
}
