## 1) Вставляем содержимое файла <a href="https://github.com/NikAzaza/school-website/blob/master/image-preview/example.html" target="_blank">example.html</a> на редактируемую страницу.
Строка 
```html
<div class="custom-page-container">
```
должна быть первой строкой на создаваемой странице, т.к. нужна для ограничения влияния стилей нашей страницы на стили сайта. Закрывающийся тег ```</div>``` должен быть в коце страницы
 (или почти в конце, т.к после него можно дописывать стили через ```<style></style>``` или ```<link href="URL ссылка на файл стилей" rel="stylesheet" type="text/css"> ```). 
 Комментарии, выделенные символами ```<!-- ... Комментарий ... -->``` следует удалить 
 
 
## 2) внутри контейнера можно размещать любой контент. Превью для изображений состоит из тегов 
```html 
<div id="images-full-size-container" onclick="javascript:(function l(e,t){t.path.includes(e.getElementsByTagName('img')[0])||document.getElementById('images-full-size-container').classList.remove('opened')}(this, event))">
    <div class="image-wrapper">
        <span class="close-button">x</span>
        <img>
    </div>
</div>
``` 
    и 
```html
<figure class="large-image-preview">
  <div class="large-image-preview-wrapper" onclick="javascript:(function q(e){var t=document.getElementById('images-full-size-container'),a=t.clientWidth;t.classList.add('opened');var l=e.getElementsByTagName('img')[0],i=l.naturalWidth,g=l.naturalHeight,n=t.getElementsByTagName('img')[0],s=g/i;n.style.width=i>=a?'100%':`${i}px`,n.style.height=i>=a?`${a*s}px`:`${g}px`,n.src=l.src,n.alt=l.alt}(this))">
    <div class="large-image-preview-curtain"></div>
    <img src="ссылка на изображение" alt="текст, если изображение недоступно">
  </div>
  <figcaption class="large-image-preview-description">Описание</figcaption>
</figure>
```
Первый - контейнер для показа полноразмерного изображения. Должен находиться в начале страницы, сразу за тегом контейнера ```<div class="custom-page-container">```
Второй - миниатюра изображения. Можно размещать несколько на странице в любом месте.
    
## 3) Добавляем изображения
Заменяем текст на URL изображения, добавляем текст, отображающbйся в случае ошибки загрузки изображения
```<img src="ссылка на изображение" alt="текст, если изображение недоступно">```
Можно добавить описание для картинки. Если описание не нужно, то тег ```<figcaption class="large-image-preview-description">Описание</figcaption>``` включать не нужно

    
