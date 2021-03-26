# Step-3: พื้นฐานของ Angular + Ionic

## โครงสร้างไฟลเดอร์

เว็บไซต์สำหรับศึกษา: https://angular.io/guide/file-structure

## Property binding

ไฟล์ `src/app/home/home.page.ts`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  message: 'Hello';

  constructor() {}

}
```

ไฟล์ `src/app/home/home.page.html`

```html
<ion-content [fullscreen]="true">
    <p>{{message}}</p>
</ion-content>
```

## Sketch Content
- Components + Templates
    - Create component
    - Manual add component

    - Example add code html and css
    - Ionic Component

    - Property binding
    - Attribute, class, and style bindings
    - Event binding
    - Template variables

    - Sharing data between child and parent directives and components
    - Component interaction
    - Two-way binding
- Directives
- Dependency injection
