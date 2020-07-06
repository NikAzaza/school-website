function openImage(wrapper) {
  var element = document.getElementById('images-full-size-container');
  var width = element.clientWidth;
  element.classList.toggle('opened');

  var sourceImg =  wrapper.getElementsByTagName('img')[0];          
  var realWidth = sourceImg.naturalWidth;
  var realHeight = sourceImg.naturalHeight;
  var img = element.getElementsByTagName('img')[0];
  var aspectRation = realHeight / realWidth;

  img.style.width = realWidth >= width ? '100%' : `${realWidth}px`;
  img.style.height = realWidth >= width ? `${width * aspectRation}px` : `${realHeight}px`;
  img.src = sourceImg.src;
  img.alt = sourceImg.alt;
}
