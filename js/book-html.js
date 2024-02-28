function changeImageOpacity() {
  const images = document.getElementsByTagName('img');
  for (let i = 0; i < images.length; i++) {
    images[i].style.opacity = '0.5';
  }
}
function loadHTMLFile(filePath) {
    const response = new XMLHttpRequest();
    response.onload = function() {
        if (response.status === 200) {
            document.getElementById('details').innerHTML = response.responseText;
        }
    };
    response.open('GET', filePath, true);
    response.send();
}

const donQuixoteImage = document.getElementById('don-quixote-img');
donQuixoteImage.addEventListener('click', function() {
  loadHTMLFile("/data/cervantes-data.html");
  changeImageOpacity();
  donQuixoteImage.style.opacity = '1';
});
const taleOfTwoCitiesImage = document.getElementById('two-cities-img');
taleOfTwoCitiesImage.addEventListener('click', function() {
  loadHTMLFile("/data/dickens-data.html");
  changeImageOpacity();
  taleOfTwoCitiesImage.style.opacity = '1';
});
const lordOfTheRingsImage = document.getElementById('lotr-img');
lordOfTheRingsImage.addEventListener('click', function() {
  loadHTMLFile("/data/tolkien-data.html");
  changeImageOpacity();
  lordOfTheRingsImage.style.opacity = '1';
});
