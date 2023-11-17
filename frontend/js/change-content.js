import json from "./json/content.json" assert {type: 'json'}

const content = json;

const imgHeader = document.querySelector('#header-img-theme');
const titleHeader = document.querySelector('#header-h1-title');
const divExplication = document.querySelectorAll('.main-div-explication');
const explicationP = document.querySelectorAll('.explication-p-text');
const divSeparator = document.querySelectorAll('.main-div-separator');
const separatorTitle = document.querySelectorAll('.separator-h3-title');
const divImages = document.querySelectorAll('.main-img-images');
const mainVideo = document.querySelector('#main-video-1');
const mainUl = document.querySelector('#main-ul-complement');
const btnNext = document.querySelector('#main-btn-nextLesson');

// Unidade 1, fase 1: 
imgHeader.src = content[0].unity1_fase1.imgHeader;
titleHeader.textContent = content[0].unity1_fase1.title;
explicationP[0].textContent = content[0].unity1_fase1.p1;
separatorTitle[0].textContent = content[0].unity1_fase1.subtitle;
explicationP[1].textContent = content[0].unity1_fase1.p2;
mainVideo.src = content[0].unity1_fase1.video;
mainUl.innerHTML = "<li>"+ content[0].unity1_fase1.li1 +  "</li>" + "<li>"+ content[0].unity1_fase1.li2 +  "</li>";
