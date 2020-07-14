function closeHandler(container, event){
    if (!event.path.includes(container.getElementsByTagName('img')[0]))
    document.getElementById('images-full-size-container').classList.remove('opened');
}
