import json from "./json/content.json" assert {type: 'json'};


const content = json;

const imgHeader = document.querySelector('#header-img-theme');
const titleHeader = document.querySelector('#header-h1-title');
const divExplication = document.querySelectorAll('.main-div-explication');
const explicationP = document.querySelectorAll('.explication-p-text');
const divSeparator = document.querySelectorAll('.main-div-separator');
const separatorTitle = document.querySelectorAll('.separator-h3-title');
const divImages = document.querySelector('.main-div-images');
const imgItem = document.querySelectorAll('.main-img-themeImg');
const mainVideo = document.querySelector('#main-video-1');
const mainUl = document.querySelector('#main-ul-complement');
const btnNext = document.querySelector('#main-btn-nextLesson');

// Troca de conteúdo:
imgHeader.src = content[0].unity[0].imgHeader;
titleHeader.textContent = content[0].unity[0].title;
explicationP[0].textContent = content[0].unity[0].p1;
separatorTitle[0].textContent = content[0].unity[0].subtitle;
explicationP[1].textContent = content[0].unity[0].p2;
mainVideo.src = content[3].unity[0].video;
mainUl.innerHTML = content[3].unity[0].mainUl;
divImages.innerHTML = content[0].unity[0].imgMain;
