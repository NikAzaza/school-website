function lazy(element, src) {
    var image = new Image();
    image.src = src;
    image.alt = element.alt;
    image.style.cssText = element.style.cssText;

    var replacer = function() {
        var collection = element.classList;
        collection.remove('lazy-image-background');

        for (var i = 0; i < collection.length; i++)
        image.classList.add(collection.item(i));

        element.replaceWith(image);
    }
    image.onload = image.onerror = replacer;
}
