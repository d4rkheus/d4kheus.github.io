document.getElementById('noButton').addEventListener('mouseover', function () {
    const OFFSET = 50; // Rastgele konumlandırma mesafesi için bir offset

    // Mevcut butonun konumu ve boyutları
    const buttonBox = this.getBoundingClientRect();

    // Ekran boyutlarını al
    const windowBox = document.body.getBoundingClientRect();

    // Yeni konumu hesapla
    let left = Math.random() * (windowBox.width - buttonBox.width - OFFSET);
    let top = Math.random() * (windowBox.height - buttonBox.height - OFFSET);

    // Butonun sayfa dışına çıkmamasını sağla
    if (left < 0) left = OFFSET;
    if (left + buttonBox.width > windowBox.width) left = windowBox.width - buttonBox.width - OFFSET;
    if (top < 0) top = OFFSET;
    if (top + buttonBox.height > windowBox.height) top = windowBox.height - buttonBox.height - OFFSET;

    // Butonun pozisyonunu güncelle
    this.style.position = "absolute";
    this.style.left = `${left}px`;
    this.style.top = `${top}px`;
    this.style.zIndex = 1000; // Görünürlüğünü garanti etmek için
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
