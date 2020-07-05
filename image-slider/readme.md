## 1) Вставляем содержимое файла <a href="https://github.com/NikAzaza/school-website/blob/master/image-slider/slider-example.html" target="_blank">slider-example.html</a> на редактируемую страницу.
Строка 
```
<div class="custom-page-container">
```
должна быть первой строкой на создаваемой странице, т.к. нужна для ограничения влияния стилей нашей страницы на стили сайта. Закрывающийся тег ```</div>``` должен быть в коце страницы
 (или почти в конце, т.к после него можно дописывать стили через ```<style></style>``` или ```<link src="URL ссылка на файл стилей" rel="stylesheet" type="text/css"> ```)

## 2) внутри контейнера можно размещать любой контент. Слайдер состоит из тега ```<form ...></form>``` и его содержимого. Можно добавлять произвольное количество слайдов.
Количество тегов 
```
<label for="Уникальный ID для radiobutton 3" class="indicator"></label>
``` 
должно совпадать с количеством тегов 
```
<div class="slide">
  <input type="radio" id="Уникальный ID для radiobutton 3" checked name="slider">
  <div class="image-container" id="Уникальный ID для слайда 3"></div>
</div>
```
## 3) Придумываем ***УНИКАЛЬНЫЕ*** имена вместо строк "Уникальный ID для ...". 
Можно использовать сайты для генерации уникальных ID. Например,  <a href="https://www.guidgenerator.com/" target="_blank">Генератор GUID</a> или <a href="https://www.random.org/strings/" target="_blank">Генератор строк</a>
На последнем желательно включить в пул символов цифры, большие и маленькие буква латинского алфавита.

Подставляем в форму.
ID для тега```<input type="radio" id="Уникальный ID для radiobutton 2" name="slider">``` подставляем и в тег  ```<label for="Уникальный ID для radiobutton 2" class="indicator"></label>```.
Это нужно для корректного переключения слайдов.
Уникальный  ID для слайда ```<div class="image-container" id="Уникальный ID для слайда 2"></div> ``` нигде не дублируем!

## 4) указываем ID для перемещения на следующий и предыдущий слайды.
```
<label class="nav-button prev-button" for="Уникальный ID для предыдущей radiobutton"></label>
<label class="nav-button next-button" for="Уникальный ID для следующей radiobutton"></label>
```
Например, если есть всего 3 слайда. По умолчанию, первый слайд активен при загрузке. Ссылка на предыдущий должна вести на 3-ий, а ссылка на следующий - на второй.

Берем уникальный ID третьего слайда из тега ```<input type="radio" id="Уникальный ID для radiobutton 3" name="slider"> ``` и копируем в тег ```<label class="nav-button prev-button" for="Уникальный ID для предыдущей radiobutton"></label> ```.

Далее берем уникальный ID второго слайда из тега ```<input type="radio" id="Уникальный ID для radiobutton 2" name="slider"> ``` и копируем в тег ```<label class="nav-button next-button" for="Уникальный ID для следующей radiobutton"></label> ```.

## 5) добавляем стили
В конце страницы (после ```</div>```) вставляем тег ```<link href="URL ссылка на файл стилей" rel="stylesheet">```. Ссылку можно указать <a href="https://github.com/NikAzaza/school-website/blob/master/image-slider/slider-styles.min.css" target="_blank">на файл в репозитории Github</a>
, либо можно загрузить файл в файловый архив на сайте и указать ссылку на него. Даже если на странице несколько слайдеров, стили нужно подключить всего 1 раз.

Внутри тега ```<style></style>``` прописываем картинки для каждого слайда. Копируем уникальный ID для из слайда ```<div class="image-container" id="Уникальный ID для слайда 3"></div>```
и прописываем адреса картинок и заполнение. <a href="https://github.com/NikAzaza/school-website/blob/master/image-slider/slider-example.html" target="_blank">(Как в примере)</a>.

**Картинку для каждого слайда во всех слайдерах нужно прописать отдельно!** например, 2 слайдера по 5 фотографий =  нужно прописать 10 ID внутри ```<style></style>```  
