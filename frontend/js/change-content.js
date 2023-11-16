import json from "./json/content.json" assert {type: 'json'}

const teste = json;

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

console.log(teste[0].unity1_fase1.title);

titleHeader.textContent = teste[0].unity1_fase1.title.toUpperCase();

explicationP[0].textContent = teste[0].unity1_fase1.p1


/* 
------Tópico 1 ----------
Choques

O que são choques?
Estado de Hipoperfusão Tecidual Sistêmica.
Ou seja falta de oxigenação nos tecidos. 
Caso o indivíduo não possua sangue, o mesmo terá choque, visto que, o oxigênio é encontrado no sangue através das células vermelhas.

Saber mais
----- barra suspensa-----------------
Entenda melhor como funciona a circulação sanguínea que leva o oxigênio para o corpo humano

--------video------------------
https://youtu.be/lrzCIUTBgds?si=FdOtM1HCbTiZ1Zbe
------------------------------
Material complementar: 

https://youtu.be/g1gW4coZL3I?si=6aQw48lVg04yc_zq;

https://youtu.be/lrzCIUTBgds?si=FdOtM1HCbTiZ1Zbe
*/