function lazy(element) {
    var image = new Image();
    image.src = element.dataset.url.src;
    image.alt = element.alt;
    if (element.style.cssText) image.style.cssText = element.style.cssText;

    var replacer = function() {
        var collection = element.classList;

        collection.remove('lazy-image-background');

        for (var i = 0; i < collection.length; i++)
        image.classList.add(collection.item(i));

        element.replaceWith(image);
    }
    image.onload = image.onerror = replacer;
}
