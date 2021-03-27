# Step-2: UI Components

เว็บไซต์สำหรับศึกษา: https://ionicframework.com/docs/components \
<span>=> </span>[Demo](https://stackblitz.com/github/AnechaS/ionic-workshop/tree/step2/helloworld)

ลองก๊อบปี้โค้ดจากลิงก์ด้านบน แล้วนำมาวางในไฟล์ `src/app/home/home.page.html`\
ตัวอย่าง:
```html
<ion-header [translucent]="true">
  <ion-toolbar>
    <ion-title> Home </ion-title>
  </ion-toolbar>
</ion-header>

<ion-content [fullscreen]="true">
 
  <!-- Button -->
  <ion-button color="primary">Primary</ion-button>
  <ion-button color="secondary">Secondary</ion-button>
  <ion-button color="tertiary">Tertiary</ion-button>
  <ion-button color="success">Success</ion-button>
  <ion-button color="warning">Warning</ion-button>
  <ion-button color="danger">Danger</ion-button>
  <ion-button color="light">Light</ion-button>
  <ion-button color="medium">Medium</ion-button>
  <ion-button color="dark">Dark</ion-button>
  
  ...
 
</ion-content>
```

## เพิ่มโค้ด HTML และ Style

ไฟล์ `src/app/home/home.page.html`

```html
<ion-content [fullscreen]="true">
  <h3 class="my-text">Hello</h3>
  <p class="my-text-desc">
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam, minus?
  </p>
</ion-content>
```

ไฟล์ `src/app/home/home.page.scss`

> **คำอธิบายเพิ่มเติม**
>
> ไฟล์ scss ก็คือ css เวอร์ชันอัปเกรด แต่ความพิเศษของ scss คือ เขียนโค้ดเป็นระเบียบ, สร้างเป็น module ได้, และอื่น ๆ\
> ศึกษาเพิ่มเติมได้จาก: https://sass-lang.com/

```scss
.my-text {
  color: #7FFFD4;
}

.my-text-desc {
  color: var(--ion-color-primary)
}

```

## เพิ่มรูป

ที่อยู่ของไฟล์ที่ไม่ใช่ไฟล์โค้ด จะอยู่ในไฟล์เดอร์ `assets` ให้นำรูปภาพไปใส่ในไฟล์เดอร์นี้ และลองเรียกใช้งาน

```html
 <img src="assets/ชื่อไฟล์รูป" />
```

## CSS Utilities

เว็บไซต์สำหรับศึกษา: https://ionicframework.com/docs/layout/css-utilities

ตัวอย่าง:
```html
<ion-content [fullscreen]="true" class="ion-padding">
  <div class="ion-text-uppercase">
    <h3>text-uppercase</h3>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ac vehicula lorem.
  </div>
</ion-content>
```
