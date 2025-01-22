document.getElementById('noButton').addEventListener('mouseover', function () {
    // Ekran boyutları ve buton boyutlarını al
    const buttonWidth = this.offsetWidth;
    const buttonHeight = this.offsetHeight;
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;

    // Butonun ekran dışına taşmaması için minimum ve maksimum sınırları hesapla
    const maxX = windowWidth - buttonWidth;
    const maxY = windowHeight - buttonHeight;

    // Rastgele konum hesapla (sınırlar içinde)
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;

    // Butonu yeni konuma yerleştir
    this.style.position = "absolute";
    this.style.left = `${x}px`;
    this.style.top = `${y}px`;

    // Görünürlüğünü garanti altına almak için z-index ayarla
    this.style.zIndex = 1000;
});

document.getElementById('yesButton').addEventListener('click', function () {
    // Evet butonuna tıklandığında ana içerik gizlenir
    document.getElementById('container').style.display = 'none';

    // Yuupii yazısı ve yeni görsel gösterilir
    const result = document.getElementById('result');
    result.classList.remove('hidden');
    result.querySelector('#newImage').src = 'https://c.tenor.com/9CPzp06cA4YAAAAC/tenor.gif';

    // Kalpleri ekleyelim
    for (let i = 0; i < 10; i++) {
        createHeart();
    }
});

function createHeart() {
    // Kalp elementi oluştur
    const heart = document.createElement("i");
    heart.className = "fas fa-heart";
    heart.style.position = "absolute";
    heart.style.left = (Math.random() * 100) + "vw";
    heart.style.animationDuration = (Math.random() * 3) + 2 + "s";

    // Kalp elementini ekleyelim
    document.getElementById('result').appendChild(heart);

    // Kalp sayısını kontrol edelim ve gerekiyorsa kalpleri temizleyelim
    const heartArr = document.querySelectorAll(".fa-heart");
    if (heartArr.length > 200) {
        heartArr[0].remove();
    }
}

// Kalp oluşturma fonksiyonunu belirli bir aralıkta çağıralım
setInterval(createHeart, 100);
