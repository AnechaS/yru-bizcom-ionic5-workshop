import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  message = 'Hello';

  colorCard1 = 'primary';
  isHideCard2 = true;
  colorCard3 = 'darkslateblue';

  isShowItem = true;
  colors = ['black', 'white', 'orange'];

  constructor() {}

  onSave() {
    console.log('saved');
  }

  onChangeName(event) {
    console.log('name is', event.target.value)
  }
}
