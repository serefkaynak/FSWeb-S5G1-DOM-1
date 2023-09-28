const siteContent = { // BU NESNEYİ DEĞİŞTİRMEYİN
  nav: {
    "nav-item-1": "Servisler",
    "nav-item-2": "Ürünler",
    "nav-item-3": "Vizyon",
    "nav-item-4": "Özellikler",
    "nav-item-5": "Hakkımızda",
    "nav-item-6": "İletişim",
  },
  cta: {
    "h1": "Bu DOM Mükemmel",
    "button": "Başlayın",
  },
  "ana-içerik": {
    "özellikler-h4": "Özellikler",
    "özellikler-içerik": "Özellikler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "hakkımızda-h4": "Hakkında",
    "hakkımızda-içerik": "Hakkında içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "servisler-h4": "Servisler",
    "servisler-içeriği": "Servisler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "ürünler-h4": "Ürünler",
    "ürünler-içeriği": "Ürünler içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vizyon-h4": "Vizyon",
    "vizyon-içeriği": "Vizyon içeriği elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  iletisim: {
    "iletişim-h4": "İletişim",
    "adres": "100 numara Bilmem ne sokak Ankara'da bir semt, Türkiye",
    "telefon": "+90 (123) 456-7899",
    "email": "satis@birsirketsitesi.com.tr",
  },
  footer: {
    "copyright": "Copyright Bir Şirket Sitesi 2022",
  },
  images: {
    "logo-img": "http://localhost:9000/img/logo.png",
    "cta-img": "http://localhost:9000/img/cta.png",
    "accent-img": "http://localhost:9000/img/accent.png",
  },
};

console.log('Proje açıldı!')


/* Kodlar Buradan aşağıya */
/*NAV HEADER START */
const nav = document.querySelector('nav');
const navLinks = nav.querySelectorAll('a');
const navContents = Object.values(siteContent.nav);

navLinks.forEach((link, index) => {
  link.className = "italic";
  link.textContent = navContents[index];
});
/* NAV HEADER END */

/* LOGO START */
const logoImg = document.querySelector('#logo-img');
logoImg.setAttribute('src', siteContent.images['logo-img']);
/* LOGO END */

/* CTA START */
const ctaText = document.querySelector('.cta-text h1');
ctaText.textContent = siteContent.cta.h1;

const ctaButton = document.querySelector('.cta-text button');
ctaButton.textContent = siteContent.cta.button;

const ctaImg = document.getElementById('cta-img');
ctaImg.setAttribute('src', siteContent.images['cta-img']);
/* CTA END */

/* CONTENT START */
const h4list = document.querySelectorAll('.text-content h4');
const plist = document.querySelectorAll('.text-content p');

h4list[0].textContent = siteContent['ana-içerik']['özellikler-h4'];
plist[0].textContent = siteContent['ana-içerik']['özellikler-içerik'];

h4list[1].textContent = siteContent['ana-içerik']['hakkımızda-h4'];
plist[1].textContent = siteContent['ana-içerik']['hakkımızda-içerik'];

h4list[2].textContent = siteContent['ana-içerik']['servisler-h4'];
plist[2].textContent = siteContent['ana-içerik']['servisler-içeriği'];

h4list[3].textContent = siteContent['ana-içerik']['ürünler-h4'];
plist[3].textContent = siteContent['ana-içerik']['ürünler-içeriği'];

h4list[4].textContent = siteContent['ana-içerik']['vizyon-h4'];
plist[4].textContent = siteContent['ana-içerik']['vizyon-içeriği'];

const img3 = document.getElementById('middle-img');
img3.setAttribute('src', siteContent.images['accent-img']);

const h4Element = document.querySelector(".contact h4");
h4Element.textContent = siteContent.iletisim['iletişim-h4'];

const contactPList = document.querySelectorAll(".contact p");
contactPList[0].textContent = siteContent.iletisim.adres;
contactPList[1].textContent = siteContent.iletisim.telefon;
contactPList[2].textContent = siteContent.iletisim.email;

const footerText = document.querySelector("footer a");
footerText.textContent = siteContent.footer.copyright;
footerText.className = "bold";
