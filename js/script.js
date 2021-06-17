let togglePopup = () => {
    let popup = document.getElementById('popup');
    popup.style.display === 'flex' ? popup.style.display = 'none' : popup.style.display = 'flex';
    console.log(popup);
}