## 1) Вставляем содержимое файла <a href="https://github.com/NikAzaza/school-website/blob/master/lazy-image/markup.html" target="_blank">markup.html</a> на редактируемую страницу.
Строка 
```
<div class="custom-page-container">
```
должна быть первой строкой на создаваемой странице, т.к. нужна для ограничения влияния стилей нашей страницы на стили сайта. Закрывающийся тег ```</div>``` должен быть в коце страницы
 (или почти в конце, т.к после него можно дописывать стили через ```<style></style>``` или ```<link href="URL ссылка на файл стилей" rel="stylesheet" type="text/css"> ```). 
 Комментарии, выделенные символами ```<!-- ... Комментарий ... -->``` следует удалить.
 ## 2) заполняем данные для изображения
 ```
<img
    class="lazy-image-background"
    data-url="Url адрес изображения"
    src=""
    alt=""
    style=""
    onerror="javascript:((function l(e){var t=new Image;t.src=e.dataset.url,t.alt=e.alt,e.style.cssText&&(t.style.cssText=e.style.cssText);t.onload=t.onerror=function(){var s=e.classList;s.remove('lazy-image-background');for(var a=0;a<s.length;a++)t.classList.add(s.item(a));e.replaceWith(t)}})(this))">
```
* Строка ```class="lazy-image-background"```. В ней можно дописать классы, которые будут применены к загруженному изобраению
* Строка ```data-url="Url адрес изображения"```. В ней **следует** прописать url адрес изображения
* Строка ```src=""``` остается без изменений
* Строка ```alt=""```остается без изменений
* Строка ```style=""``` может быть заполнена стилями для изображения. Если стили не нужны, ее можно удалить
* Последняя строка остается без изменений

## 3) подключаем минифицированные стили предзагрузки изображений 
```<link rel="stylesheet" href="https://combinatronics.com/NikAzaza/school-website/master/lazy-image/minified-styles.css">```
