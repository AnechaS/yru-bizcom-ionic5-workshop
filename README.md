# Step-3: พื้นฐานของ Angular + Ionic

## โครงสร้างไฟลเดอร์

เว็บไซต์สำหรับศึกษา: https://angular.io/guide/file-structure

## Property binding

เว็บไซต์สำหรับศึกษา: https://angular.io/guide/property-binding

ไฟล์ `src/app/home/home.page.ts`

```ts
...
export class HomePage {

  message: 'Hello';

  constructor() {}

}
```

ไฟล์ `src/app/home/home.page.html`

```html
<ion-content [fullscreen]="true">
  <ion-card>
    <ion-card-content> {{message}} </ion-card-content>
  </ion-card>
</ion-content>
```

## Attribute, class, and style bindings

เว็บไซต์สำหรับศึกษา: https://angular.io/guide/attribute-binding

ไฟล์ `src/app/home/home.page.ts`

```ts
...
export class HomePage {

  colorCard1 = 'primary';
  isHideCard2 = true;
  colorCard3 = 'darkslateblue';

  constructor() {}

}
```

ไฟล์ `src/app/home/home.page.html`

```html
<ion-content [fullscreen]="true">
  <!-- Attribute binding  -->
  <ion-card [color]="colorCard1">
    <ion-card-content>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
      consectetur fugiat ut beatae nesciunt! Impedit totam enim consequuntur
      veritatis aperiam fugit quod cupiditate autem ipsum?
    </ion-card-content>
  </ion-card>

  <!-- Class binding  -->
  <ion-card [class.ion-hide]="isHideCard2">
    <ion-card-content>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In, est!
    </ion-card-content>
  </ion-card>

  <!-- Style binding -->
  <ion-card [style.background-color]="colorCard3">
    <ion-card-content>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. In, est!
    </ion-card-content>
  </ion-card>
</ion-content>
```

## Event binding

เว็บไซต์สำหรับศึกษา: https://angular.io/guide/event-binding

## Directives

เว็บไซต์สำหรับศึกษา: https://angular.io/guide/built-in-directives#adding-or-removing-an-element-with-ngif

### `*ngIf`

ไฟล์ `src/app/home/home.page.ts`

```ts
export class HomePage {

  isShowItem = true

  constructor() {}

}
```

ไฟล์ `src/app/home/home.page.html`

```html
<ion-content [fullscreen]="true">
  <ion-card *ngIf="isShowItem">
    <ion-card-content>
      Lorem ipsum dolor sit.
    </ion-card-content>
  </ion-card>
</ion-content>
```

### `*ngFor`



## สร้าง Component

เว็บไซต์สำหรับศึกษา: https://angular.io/tutorial/toh-pt3

คำสั่งที่ใช้ในการสร้าง Component

```
$ ionic g component <name>
```

`<name>` คือ ชื่อ Component

ตัวอย่าง: 
```bash
$ ionic g component box-message
```

ไฟล์ `src/app/box-message`

```html
<ion-item lines="none" color="warning">
  <ion-label>msg: Hello</ion-label>
  <ion-icon name="close-outline" slot="end"></ion-icon>
</ion-item>
```

เรียกใช้งาน component นี้ในหน้า home

ไฟล์ `src/app/home/home.module.ts`

```ts
...
import { BoxMessageComponent } from '../box-message/box-message.component';

@NgModule({
  ...,
  declarations: [HomePage, BoxMessageComponent]
})
```

ไฟล์ `src/app/home/home.page.html`
```html
<ion-content [fullscreen]="true">
  <app-box-message></app-box-message>
</ion-content>
```
