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
  <img class="image-container" src="ссылка на картинку" alt="Текст">
</div>
```
## 3) Придумываем ***УНИКАЛЬНЫЕ*** имена вместо строк "Уникальный ID для ...". 
Можно использовать сайты для генерации уникальных ID. Например,  <a href="https://www.guidgenerator.com/" target="_blank">Генератор GUID</a> или <a href="https://www.random.org/strings/" target="_blank">Генератор строк</a>
На последнем желательно включить в пул символов цифры, большие и маленькие буква латинского алфавита.

Подставляем в форму.
ID для тега```<input type="radio" id="Уникальный ID для radiobutton 2" name="slider">``` подставляем и в тег  ```<label for="Уникальный ID для radiobutton 2" class="indicator"></label>```.
Это нужно для корректного переключения слайдов.

## 4) указываем ID для перемещения на следующий и предыдущий слайды.
```
<label class="nav-button prev-button" for="Уникальный ID для предыдущей radiobutton"></label>
<label class="nav-button next-button" for="Уникальный ID для следующей radiobutton"></label>
```
Например, если есть всего 3 слайда. По умолчанию, первый слайд активен при загрузке. Ссылка на предыдущий должна вести на 3-ий, а ссылка на следующий - на второй.

Берем уникальный ID третьего слайда из тега ```<input type="radio" id="Уникальный ID для radiobutton 3" name="slider"> ``` и копируем в тег ```<label class="nav-button prev-button" for="Уникальный ID для предыдущей radiobutton"></label> ```.

Далее берем уникальный ID второго слайда из тега ```<input type="radio" id="Уникальный ID для radiobutton 2" name="slider"> ``` и копируем в тег ```<label class="nav-button next-button" for="Уникальный ID для следующей radiobutton"></label> ```.

## 5) добавляем картинки и стили
В тегах ```<img class="image-container" src="ссылка на картинку" alt="Текст">``` прописываем ссылку на изображени. Указываем текст, который будет отображен вместо картинки, если картинка по какой-либо причине станет недоступна.

В начале страницы (перед ```<div class="custom-page-container">```) вставляем тег ```<link href="URL ссылка на файл стилей" rel="stylesheet">```. Ссылку можно указать на файл из репозитория Github. Для этого нужно скопировать ссылку на <a href="https://raw.githubusercontent.com/NikAzaza/school-website/master/image-slider/slider-styles.min.css" target="_blank"> минифицированный файл стилей </a> и воспользоваться сервисом <a href="https://combinatronics.com/" target="_blank">https://combinatronics.com/</a>. 
Либо можно загрузить <a href="https://github.com/NikAzaza/school-website/blob/master/image-slider/slider-styles.min.css" target="_blank"> минифицированный файл стилей </a> в файловое хранилище на сервер сайта и воспользоваться полученной ссылкой
