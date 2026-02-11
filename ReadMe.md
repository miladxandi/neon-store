<div dir="rtl">

<div align="center">

<img src="./screenshot.png" alt="پیش‌نمایش اپلیکیشن" width="600"/>

<br/>
<br/>

# 🛒 فروشگاه آنلاین

### جلسه ۹ و ۱۰ — قالب فرانت‌اند فروشگاهی مدرن و واکنش‌گرا

<br/>

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)](https://axios-http.com/)

[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg?style=for-the-badge)](https://opensource.org/licenses/MIT)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=for-the-badge)](http://makeapullrequest.com)
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg?style=for-the-badge)](https://github.com/username/repo/graphs/commit-activity)

<br/>

</div>


> [!CAUTION]
> ⚠️ **هشدار مهم**
>
> این قالب صرفاً برای **مصارف آموزشی** تهیه شده است و بهتر است بدون بررسی کامل، تست‌های امنیتی و ملاحظات فنی لازم، به صورت تجاری استفاده نشود.

---

## 📑 فهرست مطالب

- [✨ ویژگی‌ها](#-ویژگیها)
- [🚀 نصب و راه‌اندازی](#-نصب-و-راهاندازی)
- [📁 ساختار پروژه](#-ساختار-پروژه)
- [📖 آموزش کد — فایل `index.js`](#-آموزش-کد--فایل-indexjs)
  - [۱. آبجکت‌ها و آرایه‌ها](#۱-آبجکتها-و-آرایهها-در-جاوااسکریپت)
  - [۲. دریافت محصولات از API](#۲-تابع-دریافت-محصولات-از-api)
  - [۳. انتخاب المان‌های HTML](#۳-انتخاب-المانهای-html-با-جاوااسکریپت)
  - [۴. فراخوانی API](#۴-فراخوانی-api)
  - [۵. بروزرسانی سبد خرید](#۵-تابع-بروزرسانی-سبد-خرید)
  - [۶. نمایش محصولات](#۶-نمایش-محصولات)
  - [۷. کد کامنت‌شده — نمایش چند تصویر](#۷-کد-کامنتشده--نمایش-چند-تصویر)
  - [۸. رویداد کلیک — افزودن به سبد خرید](#۸-رویداد-کلیک--افزودن-به-سبد-خرید)
  - [۹. کد کامنت‌شده — روش اشتباه](#۹-کد-کامنتشده--روش-اشتباه)
  - [۱۰. مدیریت محصولات تکراری](#۱۰-روش-صحیح--مدیریت-محصولات-تکراری)
  - [۱۱. تنظیم اطلاعات کارت](#۱۱-تنظیم-اطلاعات-کارت)
- [📖 آموزش کد — فایل `product.js`](#-آموزش-کد--فایل-productjs)
  - [۱. DOMContentLoaded](#۱-domcontentloaded-event)
  - [۲. خواندن پارامتر URL](#۲-خواندن-پارامتر-url)
  - [۳. گالری تصاویر](#۳-گالری-تصاویر)
  - [۴. مودال زوم تصویر](#۴-مودال-زوم-تصویر)
  - [۵. دکمه علاقه‌مندی‌ها](#۵-دکمه-علاقهمندیها-wishlist)
  - [۶. انتخاب تعداد محصول](#۶-انتخاب-تعداد-محصول)
  - [۷. سیستم تب‌ها](#۷-سیستم-تبها)
  - [۸. کپی لینک](#۸-کپی-لینک-با-clipboard-api)
  - [۹. Toast Notification](#۹-سیستم-toast-notification)
  - [۱۰. Intersection Observer](#۱۰-intersection-observer)
- [🎯 نکات مهم برای مبتدیان](#-نکات-مهم-برای-مبتدیان)
- [🤝 مشارکت](#-مشارکت)
- [📝 لایسنس](#-لایسنس)

---

## ✨ ویژگی‌ها

| ویژگی | توضیح |
|:---:|:---|
| 🎨 | طراحی مدرن و زیبا |
| 📱 | کاملاً واکنش‌گرا (Responsive) |
| ⚡ | سریع و بهینه |
| 🔌 | اتصال به API با Axios |
| 🛍️ | صفحه لیست محصولات |
| 📄 | صفحه جزئیات محصول |
| 🛒 | سبد خرید با ذخیره‌سازی در LocalStorage |
| 🔍 | زوم تصاویر محصول |
| ❤️ | افزودن به علاقه‌مندی‌ها |
| ⭐ | سیستم امتیازدهی و نظرات |

---

## 🚀 نصب و راه‌اندازی

### پیش‌نیازها

قبل از شروع، مطمئن شوید که موارد زیر روی سیستم شما نصب است:

| ابزار | نسخه | لینک دانلود |
|:---:|:---:|:---:|
| **Node.js** | 16+ | [nodejs.org](https://nodejs.org) |
| **npm** | همراه Node.js | — |
| **VS Code** | آخرین نسخه | [code.visualstudio.com](https://code.visualstudio.com) |

### مراحل نصب
```bash
# ۱. کلون کردن پروژه از گیت‌هاب
# این دستور یک کپی از پروژه را روی سیستم شما دانلود می‌کند
git clone https://github.com/username/repo.git

# ۲. ورود به پوشه پروژه
cd repo

# ۳. نصب وابستگی‌ها
# npm install فایل package.json را می‌خواند و پکیج‌های لازم (مثل axios) را نصب می‌کند
npm install

### اجرای پروژه

> [!TIP]
> **روش ۱: استفاده از Live Server در VS Code (پیشنهادی)**
> 
> 1. اکستنشن "Live Server" را در VS Code نصب کنید
> 2. روی فایل `index.html` راست‌کلیک کنید
> 3. گزینه "Open with Live Server" را بزنید
> 4. مرورگر به صورت خودکار باز می‌شود

> [!NOTE]
> **روش ۲: باز کردن مستقیم در مرورگر**
> 
> فایل `index.html` را با مرورگر باز کنید (ممکن است برخی قابلیت‌ها کار نکنند)

---

## 📁 ساختار پروژه


📦 پروژه
├── 📄 index.html        ← صفحه اصلی - لیست محصولات
├── 📄 single.html       ← صفحه جزئیات هر محصول
├── 📜 index.js          ← کد جاوااسکریپت صفحه اصلی
├── 📜 product.js        ← کد جاوااسکریپت صفحه محصول
├── 🎨 style.css         ← استایل صفحه اصلی
├── 🎨 product.css       ← استایل صفحه محصول
├── 📋 package.json      ← تنظیمات npm و لیست وابستگی‌ها
└── 📋 package-lock.json ← قفل نسخه دقیق وابستگی‌ها

---

## 📖 آموزش کد — فایل `index.js`

> این فایل مسئول **نمایش لیست محصولات** و **مدیریت سبد خرید** است.

---

### ۱. آبجکت‌ها و آرایه‌ها در جاوااسکریپت

javascript
/*
💡 آموزش: آبجکت (Object)
─────────────────────────
آبجکت‌ها مجموعه‌ای از جفت‌های کلید-مقدار (key-value) هستند
برای ذخیره داده‌های مرتبط استفاده می‌شوند
*/

let jObject = {
"name" : "Milad",              // کلید: name، مقدار: "Milad" (رشته)
"lastname" : "Xandi",          // کلید: lastname، مقدار: "Xandi"
"national_number" : "001859674",
"nationality" : "IR",
"sub_persons":[                // این کلید یک آرایه از آبجکت‌ها را نگه می‌دارد
{
"name" : "Mamad",
"lastname" : "Xandi",
"national_number" : "001859687",
"nationality" : "IR",
},
{
"name" : "Reza",
"lastname" : "Xandi",
"national_number" : "001859688",
"nationality" : "IR",
},
]
}

/*
💡 آموزش: آرایه (Array)
────────────────────────
آرایه‌ها لیستی از مقادیر هستند
هر عنصر با یک ایندکس (شماره) قابل دسترسی است
⚠️ مهم: ایندکس از 0 شروع می‌شود!
*/

let arr = [5, 7, 9, 11, 13, 15, 17, 19]
//        ↑  ↑  ↑   ↑   ↑   ↑   ↑   ↑
//        0  1  2   3   4   5   6   7  ← ایندکس‌ها

console.log(arr[0])  // خروجی: 5 (اولین عنصر)
console.log(arr[3])  // خروجی: 11 (چهارمین عنصر)

---

### ۲. تابع دریافت محصولات از API

javascript
/*
💡 آموزش: async/await
──────────────────────
- async: مشخص می‌کند که این تابع غیرهمزمان (asynchronous) است
- await: منتظر می‌ماند تا عملیات کامل شود

چرا async/await؟
درخواست‌های HTTP زمان‌بر هستند. بدون await، کد ادامه پیدا می‌کند
قبل از اینکه داده‌ها برسند!
*/

async function fetchProducts() {
// axios.get یک درخواست HTTP GET ارسال می‌کند
// await منتظر می‌ماند تا پاسخ برسد
let response = await axios.get("https://api.escuelajs.co/api/v1/products");

// response شامل اطلاعات زیادی است:
// - response.status: کد وضعیت (مثلاً 200)
// - response.headers: هدرهای HTTP
// - response.data: داده‌های اصلی JSON ← این را می‌خواهیم!

return response.data;
}

---

### ۳. انتخاب المان‌های HTML با جاوااسکریپت

javascript
/*
💡 آموزش: DOM Selection
────────────────────────
DOM (Document Object Model) ساختار درختی HTML است
با querySelector می‌توانیم المان‌ها را انتخاب کنیم:

- "#id"    → انتخاب با id
- ".class" → انتخاب با class
- "tag"    → انتخاب با نام تگ
*/

// قالب‌های HTML که کپی می‌شوند
const productCard = document.querySelector("#card")           // قالب کارت محصول
const basketItem = document.querySelector("#item")            // قالب آیتم سبد خرید
const productImage = document.querySelector("#product-image") // قالب تصویر

// محل‌هایی که محتوا در آن‌ها قرار می‌گیرد
const holder = document.querySelector("#cards-holder")        // محل نمایش کارت‌ها
const basketCard = document.querySelector("#cart")            // محل نمایش سبد خرید
const totalQuantity = document.querySelector("#total-quantity") // نمایش تعداد

---

### ۴. فراخوانی API

javascript
/*
💡 آموزش: Top-level await
──────────────────────────
در ES2022 می‌توانیم await را در سطح بالای ماژول استفاده کنیم
⚠️ نیاز به type="module" در تگ script دارد:
<script type="module" src="index.js"></script>
*/

let products = await fetchProducts();
// حالا products یک آرایه از آبجکت‌های محصول است

---

### ۵. تابع بروزرسانی سبد خرید

javascript
/*
💡 آموزش: LocalStorage
───────────────────────
LocalStorage داده‌ها را در مرورگر ذخیره می‌کند
- حتی بعد از بستن مرورگر باقی می‌ماند
- فقط رشته (string) ذخیره می‌کند
- برای آبجکت‌ها باید از JSON استفاده کنیم
*/

function refreshBasket(){
// ۱. خواندن داده از LocalStorage
// JSON.parse: تبدیل رشته JSON به آبجکت جاوااسکریپت
let addedItems = JSON.parse(localStorage.getItem("products"));

// ۲. پاک کردن محتوای قبلی سبد
basketCard.innerHTML = "";

// ۳. بروزرسانی تعداد کل آیتم‌ها
totalQuantity.innerHTML = addedItems.length;

// ۴. نمایش هر آیتم در سبد خرید
/*
💡 آموزش: forEach
──────────────────
forEach روی هر عنصر آرایه یک تابع اجرا می‌کند
پارامترها:
- product: عنصر فعلی
- productIndex: ایندکس عنصر (اختیاری)
*/
addedItems.forEach((product, productIndex) => {
// cloneNode(true): کپی کامل المان (با فرزندان)
var item = basketItem.cloneNode(true);

// حذف کلاس d-none برای نمایش المان
// d-none یک کلاس Bootstrap است که display: none می‌دهد
item.classList.remove('d-none');

// پر کردن اطلاعات
item.querySelector('.header').innerHTML = product.title;
item.querySelector('.description').innerHTML = product.quantity;
item.querySelector('.extra').innerHTML = "$" + product.price;

// appendChild: اضافه کردن المان به انتهای والد
basketCard.appendChild(item);
})
}

---

### ۶. نمایش محصولات

javascript
/*
💡 آموزش: پیمایش و نمایش محصولات
──────────────────────────────────
برای هر محصول در آرایه، یک کارت HTML می‌سازیم
*/

products.forEach((product, productIndex) => {
// اضافه کردن فیلد quantity به هر محصول
products[productIndex]['quantity'] = 1;

// ساخت کپی از قالب کارت
var currentProductHtml = productCard.cloneNode(true);
currentProductHtml.classList.remove('d-none');
currentProductHtml.id = product.id;

/*
💡 آموزش: شرط‌های ترکیبی
─────────────────────────
&& (AND): هر دو شرط باید true باشند
|| (OR): حداقل یکی باید true باشد

product.images && product.images[0]
یعنی: آیا images وجود دارد و آیا حداقل یک تصویر دارد؟
*/
if (product.images && product.images[0]) {
var currentImage = productImage.cloneNode(true);
currentImage.classList.remove('d-none');

// تنظیم تصویر پس‌زمینه با CSS
currentImage.style.backgroundImage = "url(" + product.images[0] + ")";
currentImage.id = product.id;
currentImage.classList.remove('hidden');
currentImage.classList.add('visible');

// اضافه کردن تصویر به کارت
currentProductHtml.querySelector("div").appendChild(currentImage);
}

---

### ۷. کد کامنت‌شده — نمایش چند تصویر

javascript
/*
💡 آموزش: این کد کامنت شده است
─────────────────────────────────
این روش قبلی برای نمایش تصاویر بود
فقط تصویر اول (index===0) نمایش داده می‌شد
کد بالا ساده‌تر است و همان کار را انجام می‌دهد
*/

// product.images.forEach((image, index) => {
//     if (index === 0) {
//         var currentImage = productImage.cloneNode(true);
//         currentImage.classList.remove('d-none');
//         currentImage.style.backgroundImage = "url(" + image + ")";
//         currentImage.id = product.id + '-' + index;
//         currentImage.classList.remove('hidden');
//         currentImage.classList.add('visible');
//         currentProductHtml.querySelector("div").appendChild(currentImage);
//     }
// })

---

### ۸. رویداد کلیک — افزودن به سبد خرید

javascript
/*
💡 آموزش: Event Listener
─────────────────────────
addEventListener به یک المان می‌گوید که به یک رویداد گوش بدهد

element.addEventListener('نوع رویداد', تابع callback)

رویدادهای رایج:
- 'click': کلیک ماوس
- 'submit': ارسال فرم
- 'keydown': فشردن کلید
- 'mouseover': ورود ماوس
*/

currentProductHtml.querySelector('button').addEventListener('click', (e) => {
// e یا event: آبجکتی شامل اطلاعات رویداد
console.log('clicked on element ' + productIndex + " which is for " + product.title);

// خواندن سبد خرید فعلی از LocalStorage
let addedProducts = JSON.parse(localStorage.getItem("products"));

/*
💡 آموزش: بررسی null و undefined
──────────────────────────────────
- null: مقدار عمداً خالی است
- undefined: مقدار تعریف نشده است
- length === 0: آرایه خالی است
*/
if (addedProducts === null || addedProducts === undefined || addedProducts.length === 0) {
// سبد خالی است، آرایه جدید با این محصول بساز
addedProducts = [products[productIndex]];
} else {

---

### ۹. کد کامنت‌شده — روش اشتباه

javascript
/*
💡 آموزش: این کد اشتباه بود و کامنت شده
─────────────────────────────────────────
⚠️ مشکل: Array.remove یک متد استاندارد نیست!
در جاوااسکریپت چنین متدی وجود ندارد

برای حذف از آرایه باید از روش‌های زیر استفاده کنید:
- splice(index, 1): حذف از ایندکس مشخص
- filter(): ساخت آرایه جدید بدون عنصر خاص
*/

// let items = addedProducts.find(p => p.id === products[productIndex].id);
// console.log(items);
// if (items !== null && items !== undefined) {
//     console.log(1)
//     products[productIndex].quantity += items.quantity;
//     addedProducts.Array.remove(items);  // ❌ اشتباه!
//     addedProducts.push(products[productIndex]);
// }
// else {
//     addedProducts.push(products[productIndex]);
// }

---

### ۱۰. روش صحیح — مدیریت محصولات تکراری

javascript
/*
💡 آموزش: findIndex
────────────────────
findIndex ایندکس اولین عنصری که شرط را برآورده کند برمی‌گرداند
اگر پیدا نشود، -1 برمی‌گرداند

p => p.id === ...
این یک Arrow Function است، معادل:
function(p) { return p.id === ...; }
*/

let foundIndex = addedProducts.findIndex(p => p.id === products[productIndex].id);

if (foundIndex !== -1) {
// محصول قبلاً در سبد هست → فقط تعداد را +1 کن
addedProducts[foundIndex].quantity += 1;
}
else {
// محصول جدید است → به سبد اضافه کن
addedProducts.push(products[productIndex]);
}
}

/*
💡 آموزش: ذخیره در LocalStorage
─────────────────────────────────
JSON.stringify: تبدیل آبجکت به رشته JSON
LocalStorage فقط رشته می‌پذیرد
*/
localStorage.setItem("products", JSON.stringify(addedProducts));

// بروزرسانی نمایش سبد خرید
refreshBasket();
})

---

### ۱۱. تنظیم اطلاعات کارت

javascript
/*
💡 آموزش: innerHTML vs textContent
────────────────────────────────────
- innerHTML: می‌تواند HTML را parse کند (خطر XSS!)
- textContent: فقط متن ساده (امن‌تر)

💡 آموزش: substring
────────────────────
substring(start, end) بخشی از رشته را برمی‌گرداند
substring(0, 50) → از کاراکتر 0 تا 50
*/

currentProductHtml.querySelector('.product-title').innerHTML = product.title;

// لینک به صفحه جزئیات با Query String
// ?slug=xxx یک پارامتر URL است که در صفحه بعد خوانده می‌شود
currentProductHtml.querySelector('.product-title').href = "/single.html?slug=" + product.slug;

// نمایش 50 کاراکتر اول توضیحات + ...
currentProductHtml.querySelector('.product-description').innerHTML = 
product.description.substring(0, 50) + "...";

currentProductHtml.querySelector('.product-price').innerHTML = product.price + "$";

// اضافه کردن کارت کامل‌شده به صفحه
holder.appendChild(currentProductHtml);
})

// در پایان، سبد خرید را نمایش بده
refreshBasket();

---

## 📖 آموزش کد — فایل `product.js`

> این فایل مسئول **صفحه جزئیات محصول** است.

---

### ۱. DOMContentLoaded Event

javascript
/*
💡 آموزش: DOMContentLoaded
───────────────────────────
این رویداد زمانی fire می‌شود که HTML کاملاً parse شده باشد
(بدون انتظار برای تصاویر و stylesheet‌ها)

چرا مهم است؟
اگر بدون این رویداد، کد اجرا شود ممکن است
المان‌های HTML هنوز وجود نداشته باشند!
*/

document.addEventListener('DOMContentLoaded', async () => {
// تمام کد داخل این callback است
// async اجازه استفاده از await را می‌دهد
});

---

### ۲. خواندن پارامتر URL

javascript
/*
💡 آموزش: URLSearchParams
──────────────────────────
برای خواندن Query String از URL استفاده می‌شود

مثال URL: single.html?slug=product-name&color=red

window.location.search → "?slug=product-name&color=red"
*/

// ساخت آبجکت URLSearchParams
var params = new URLSearchParams(window.location.search);

// entries() یک iterator برمی‌گرداند
// find اولین جفت که کلیدش "slug" است را پیدا می‌کند
var slug = params.entries().find(entry => entry[0] === "slug");
// slug = ["slug", "product-name"]
// slug[0] = "slug" (کلید)
// slug[1] = "product-name" (مقدار)

// پیدا کردن محصول با این slug
const currentProduct = products.find(p => p.slug === slug[1]);

---

### ۳. گالری تصاویر

javascript
/*
💡 آموزش: گالری با Thumbnail
─────────────────────────────
- تصاویر کوچک (thumbnail) در کنار نمایش داده می‌شوند
- با کلیک روی هر کدام، تصویر اصلی عوض می‌شود
*/

const mainImage = document.getElementById('main-product-image');
const thumbs = document.querySelectorAll('.gallery-thumb');

// تنظیم عنوان محصول در همه جاهایی که کلاس product-title دارند
document.querySelectorAll('.product-title').forEach(title => {
title.innerHTML = currentProduct.title;
})

thumbs.forEach((thumb, index) => {
// بررسی وجود تصویر برای این ایندکس
if (currentProduct.images !== null && currentProduct.images[index]) {
// تنظیم src تصویر کوچک
thumb.querySelector("img").setAttribute("src", currentProduct.images[index]);

// تصویر اول را به عنوان تصویر اصلی نمایش بده
if (index === 0) {
const newSrc = currentProduct.images[index];

/*
💡 آموزش: انیمیشن Fade
────────────────────────
۱. opacity را 0 کن (محو شود)
۲. scale را کوچک‌تر کن
۳. بعد از کمی تأخیر، تصویر جدید را بگذار
۴. opacity را 1 کن (ظاهر شود)
*/
mainImage.style.opacity = '0';
mainImage.style.transform = 'scale(0.95)';

// setTimeout: اجرای کد با تأخیر
// پارامتر دوم: میلی‌ثانیه (200ms = 0.2 ثانیه)
setTimeout(() => {
mainImage.src = newSrc;
mainImage.style.opacity = '1';
mainImage.style.transform = 'scale(1)';
}, 200);
}

// رویداد کلیک برای هر thumbnail
thumb.addEventListener('click', () => {
// حذف کلاس active از همه thumbnail‌ها
thumbs.forEach(t => t.classList.remove('active'));

// اضافه کردن active به thumbnail کلیک‌شده
thumb.classList.add('active');

// تغییر تصویر اصلی با انیمیشن
if (currentProduct.images !== null && currentProduct.images[index]) {
const newSrc = currentProduct.images[index];
mainImage.style.opacity = '0';
mainImage.style.transform = 'scale(0.95)';
setTimeout(() => {
mainImage.src = newSrc;
mainImage.style.opacity = '1';
mainImage.style.transform = 'scale(1)';
}, 200);
}
});
}
else {
// اگر تصویری برای این ایندکس نیست، thumbnail را حذف کن
thumb.remove()
}
});

// تنظیم transition برای انیمیشن روان
mainImage.style.transition = 'opacity 0.3s ease, transform 0.3s ease';

---

### ۴. مودال زوم تصویر

javascript
/*
💡 آموزش: Modal
─────────────────
Modal یک پنجره popup است که روی محتوای اصلی ظاهر می‌شود
معمولاً یک پس‌زمینه تیره (backdrop) دارد
*/

const zoomBtn = document.getElementById('zoom-btn');
const zoomModal = document.getElementById('zoom-modal');
const zoomImage = document.getElementById('zoom-image');
const zoomClose = document.getElementById('zoom-close');
const zoomBackdrop = zoomModal?.querySelector('.zoom-modal-backdrop');

/*
💡 آموزش: Optional Chaining (?.)
─────────────────────────────────
zoomModal?.querySelector یعنی:
اگر zoomModal وجود داشت، querySelector را صدا بزن
اگر null یا undefined بود، undefined برگردان (بدون خطا)
*/

if (zoomBtn && zoomModal) {
// باز کردن مودال با کلیک روی دکمه زوم
zoomBtn.addEventListener('click', () => {
// تصویر مودال را برابر تصویر اصلی قرار بده
zoomImage.src = mainImage.src;

// نمایش مودال با اضافه کردن کلاس active
zoomModal.classList.add('active');

// غیرفعال کردن اسکرول صفحه
document.body.style.overflow = 'hidden';
});

// تابع بستن مودال
const closeZoom = () => {
zoomModal.classList.remove('active');
document.body.style.overflow = '';  // برگرداندن اسکرول
};

// بستن با کلیک روی دکمه X
zoomClose?.addEventListener('click', closeZoom);

// بستن با کلیک روی پس‌زمینه
zoomBackdrop?.addEventListener('click', closeZoom);

/*
💡 آموزش: Keyboard Events
──────────────────────────
keydown: وقتی کلیدی فشرده می‌شود
e.key: نام کلید فشرده‌شده
*/
document.addEventListener('keydown', (e) => {
if (e.key === 'Escape' && zoomModal.classList.contains('active')) {
closeZoom();
}
});
}

---

### ۵. دکمه علاقه‌مندی‌ها (Wishlist)

javascript
/*
💡 آموزش: Toggle Pattern
─────────────────────────
toggle یک الگوی رایج است:
اگر فعال است → غیرفعال کن
اگر غیرفعال است → فعال کن
*/

const wishlistBtn = document.getElementById('wishlist-btn');

if (wishlistBtn) {
wishlistBtn.addEventListener('click', () => {
// classList.toggle: کلاس را اضافه/حذف می‌کند
wishlistBtn.classList.toggle('active');

const icon = wishlistBtn.querySelector('i');

if (wishlistBtn.classList.contains('active')) {
/*
💡 آموزش: Font Awesome Icon Classes
─────────────────────────────────────
far = Font Awesome Regular (آیکون خالی/outline)
fas = Font Awesome Solid (آیکون پر/filled)
*/
icon.classList.remove('far');
icon.classList.add('fas');
showToast('به علاقه‌مندی‌ها اضافه شد', 'success', 'fas fa-heart');
} else {
icon.classList.remove('fas');
icon.classList.add('far');
showToast('از علاقه‌مندی‌ها حذف شد', 'info', 'far fa-heart');
}
});
}

---

### ۶. انتخاب تعداد محصول

javascript
/*
💡 آموزش: Quantity Selector
────────────────────────────
یک input عددی با دکمه‌های + و - برای کنترل بهتر
*/

const qtyInput = document.getElementById('qty-input');
const qtyMinus = document.getElementById('qty-minus');
const qtyPlus = document.getElementById('qty-plus');

if (qtyInput && qtyMinus && qtyPlus) {
// دکمه منها
qtyMinus.addEventListener('click', () => {
/*
💡 آموزش: parseInt و مقدار پیش‌فرض
─────────────────────────────────────
parseInt("5") → 5
parseInt("abc") → NaN (Not a Number)

|| 1 یعنی: اگر NaN بود، از 1 استفاده کن
*/
let val = parseInt(qtyInput.value) || 1;

if (val > 1) {
qtyInput.value = val - 1;
animateQty();  // انیمیشن بصری
}
});

// دکمه بعلاوه
qtyPlus.addEventListener('click', () => {
let val = parseInt(qtyInput.value) || 1;
let max = parseInt(qtyInput.max) || 10;

if (val < max) {
qtyInput.value = val + 1;
animateQty();
}
});

/*
💡 آموزش: Input Validation
───────────────────────────
اعتبارسنجی ورودی کاربر مهم است!
کاربر ممکن است مقدار نامعتبر وارد کند
*/
qtyInput.addEventListener('change', () => {
let val = parseInt(qtyInput.value) || 1;
let min = parseInt(qtyInput.min) || 1;
let max = parseInt(qtyInput.max) || 10;

// اطمینان از اینکه مقدار در محدوده مجاز است
if (val < min) qtyInput.value = min;
if (val > max) qtyInput.value = max;
});

// انیمیشن کوچک برای فیدبک بصری
function animateQty() {
qtyInput.style.transform = 'scale(1.2)';
setTimeout(() => {
qtyInput.style.transform = 'scale(1)';
}, 150);
}

qtyInput.style.transition = 'transform 0.15s ease';
}

---

### ۷. سیستم تب‌ها

javascript
/*
💡 آموزش: Tabs UI Pattern
──────────────────────────
تب‌ها برای نمایش محتوای مختلف در یک فضای محدود استفاده می‌شوند

ساختار:
- Tab Buttons: دکمه‌های بالا برای انتخاب
- Tab Panels: محتوای هر تب (فقط یکی نمایش داده می‌شود)
*/

const tabBtns = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
btn.addEventListener('click', () => {
/*
💡 آموزش: Data Attributes
──────────────────────────
data-* attributes برای ذخیره اطلاعات سفارشی در HTML

<button data-tab="reviews">نظرات</button>
btn.getAttribute('data-tab') → "reviews"
*/
const tabId = btn.getAttribute('data-tab');

// غیرفعال کردن همه دکمه‌ها
tabBtns.forEach(b => b.classList.remove('active'));
btn.classList.add('active');

// مخفی کردن همه پنل‌ها
tabPanels.forEach(panel => panel.classList.remove('active'));

/*
💡 آموزش: Template Literals
────────────────────────────
`tab-${tabId}` معادل "tab-" + tabId است
اما خواناتر و قدرتمندتر
*/
const targetPanel = document.getElementById(`tab-${tabId}`);
if (targetPanel) {
targetPanel.classList.add('active');
}
});
});

---

### ۸. کپی لینک با Clipboard API

javascript
/*
💡 آموزش: Clipboard API
────────────────────────
API مدرن برای کار با clipboard (کپی/پیست)

⚠️ نکته: نیاز به HTTPS یا localhost دارد
*/

const copyLinkBtn = document.getElementById('copy-link');

if (copyLinkBtn) {
copyLinkBtn.addEventListener('click', () => {
/*
💡 آموزش: Promises
───────────────────
navigator.clipboard.writeText یک Promise برمی‌گرداند
.then(): وقتی موفق شد
.catch(): وقتی خطا داد
*/
navigator.clipboard.writeText(window.location.href)
.then(() => {
showToast('لینک محصول کپی شد!', 'success', 'fas fa-link');
})
.catch(() => {
showToast('خطا در کپی لینک', 'info', 'fas fa-exclamation-circle');
});
});
}

---

### ۹. سیستم Toast Notification

javascript
/*
💡 آموزش: Toast Notifications
───────────────────────────────
Toast یک پیام کوتاه است که موقتاً نمایش داده می‌شود
معمولاً در گوشه صفحه ظاهر می‌شود و خودکار محو می‌شود

پارامترها:
- message: متن پیام
- type: نوع (success, info, error, warning) برای استایل
- icon: کلاس آیکون Font Awesome
*/

function showToast(message, type = 'info', icon = 'fas fa-info-circle') {
const container = document.getElementById('toast-container');
if (!container) return;

/*
💡 آموزش: createElement
────────────────────────
برای ساخت المان‌های جدید به صورت داینامیک
*/
const toast = document.createElement('div');
toast.className = `toast toast-${type}`;
toast.innerHTML = `<i class="${icon}"></i> <span>${message}</span>`;

container.appendChild(toast);

// حذف خودکار بعد از 3 ثانیه
setTimeout(() => {
toast.classList.add('toast-out');  // شروع انیمیشن خروج

setTimeout(() => {
toast.remove();  // حذف کامل از DOM
}, 400);  // بعد از پایان انیمیشن
}, 3000);  // 3 ثانیه نمایش
}

/*
💡 آموزش: Global Function
──────────────────────────
با قرار دادن در window، تابع از همه جا قابل دسترسی است
*/
window.showToast = showToast;

---

### ۱۰. Intersection Observer

javascript
/*
💡 آموزش: Intersection Observer API
─────────────────────────────────────
برای تشخیص اینکه آیا یک المان در viewport (قسمت قابل مشاهده صفحه) است

کاربردها:
- Lazy loading تصاویر
- انیمیشن‌های scroll-triggered
- Infinite scroll
*/

const observerOptions = {
threshold: 0.1,  // 10% المان باید قابل مشاهده باشد تا trigger شود
rootMargin: '0px 0px -50px 0px'  // حاشیه اضافی (بالا راست پایین چپ)
};

const observer = new IntersectionObserver((entries) => {
entries.forEach(entry => {
/*
💡 آموزش: entry.isIntersecting
─────────────────────────────────
true: المان وارد viewport شده
false: المان از viewport خارج شده
*/
if (entry.isIntersecting) {
// المان وارد صفحه شد → انیمیشن fade-in
entry.target.style.opacity = '1';
entry.target.style.transform = 'translateY(0)';

// دیگر observe نکن (انیمیشن یکبار اجرا شود)
observer.unobserve(entry.target);
}
});
}, observerOptions);

// انتخاب المان‌هایی که باید انیمیشن داشته باشند
const animatedElements = document.querySelectorAll(
'.product-detail-container, .product-tabs-container, .related-products-container, .product-card'
);

// تنظیم اولیه و شروع observe
animatedElements.forEach(el => {
// حالت اولیه: نامرئی و کمی پایین‌تر
el.style.opacity = '0';
el.style.transform = 'translateY(30px)';
el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

// شروع observe
observer.observe(el);
});

---

## 🎯 نکات مهم برای مبتدیان

### ۱. Debugging با Console

javascript
// برای دیباگ از console استفاده کنید
console.log("مقدار متغیر:", myVariable);
console.error("پیام خطا");
console.warn("پیام اخطار");
console.table(myArray);  // نمایش آرایه به صورت جدول

### ۲. Error Handling

javascript
// همیشه خطاها را مدیریت کنید
try {
// کد خطرناک
let data = JSON.parse(badInput);
} catch (error) {
console.error("خطا:", error.message);
}

### ۳. کد تمیز بنویسید

javascript
// ❌ بد
let x = document.querySelector("#a").innerHTML;

// ✅ خوب
const productTitle = document.querySelector("#product-title");
const titleText = productTitle.innerHTML;

---

## 🤝 مشارکت

از مشارکت شما استقبال می‌کنیم! لطفاً:

1. یک Fork از پروژه بسازید
2. یک Branch جدید ایجاد کنید (`git checkout -b feature/amazing-feature`)
3. تغییرات را Commit کنید (`git commit -m 'Add amazing feature'`)
4. به Branch خود Push کنید (`git push origin feature/amazing-feature`)
5. یک Pull Request باز کنید

---

## 📝 لایسنس

این پروژه تحت لایسنس [MIT](LICENSE) منتشر شده است.

---

<div align="center">

ساخته شده با ❤️ برای جامعه توسعه‌دهندگان فارسی‌زبان

⭐ اگر این پروژه برایتان مفید بود، یک ستاره بدهید!

</div>

</div>
