import "tailwindcss/tailwind.css"
import "./style.css"
import SmoothScroll from 'smooth-scroll';

// 初期化
// var sectionNowIndex = 0;
var sectionNowIndex = new controlIndex();

// スタイル追加のための定義
var style = document.createElement("style");
document.head.appendChild( style );
var sheet = style.sheet;

// 要素追加のための定義
const menu = document.getElementById('menu');

// section情報を用いた処理 -----------------------------------
const sections = document.getElementsByTagName('section');
const sectionsLength = sections.length

// 要素・スタイル追加処理
// 左側にサブタイトルを追加
for(var i = 0; i < sectionsLength; i++) {
  sheet.insertRule(sectionBeforeCss(sections.item(i).id), i);
  menu.appendChild(createMenuElement(i));
}

function sectionBeforeCss(id) {
  return `#${id}::before {
    content: '${id}';
    position: absolute;
    left: 5.9rem;
    top: 50%;
    transform: rotate(-90deg) translateY(-50%);
    color: white;
    z-index: 40;
  }`
}

function createMenuElement(index) {
  var newElement = document.createElement('div');
  newElement.setAttribute("data-value", index);
  newElement.innerHTML = getdoubleDigestNumer(index + 1);
  return newElement;
}

function getdoubleDigestNumer(number) {
  return ("0" + number).slice(-2)
}

// 右下矢印クリックによる移動処理
const upArrow = document.getElementById('arrow-up');
const downArrow = document.getElementById('arrow-down');　

upArrow.addEventListener('click', function() {
  if (sectionNowIndex.get() == sectionsLength - 1) { return; }

  moveSection(1);
});

downArrow.addEventListener('click', function() {
  if (sectionNowIndex.get() == 0) { return; }

  moveSection(-1);
})

function moveSection(moveTo) {
  sectionNowIndex.add(moveTo);
  var scroll = new SmoothScroll();
  var anchor = sections.item(sectionNowIndex.get());
  scroll.animateScroll(anchor.offsetTop);
}

// メニューバーによる移動処理
const menuButtons = document.querySelectorAll('.menu div');
[...menuButtons].map(function(element, index) {
  element.addEventListener('click', function() {
    moveSection(index - sectionNowIndex.get());
  })
})

// スクロール時のsectionNowIndex の制御
const sectionElements = document.querySelectorAll('section');
const sectionTops = [...sectionElements].reduce(function(result, element) {
  result.push(element.offsetTop);
  return result;
}, []);

const sectionHeight = sectionElements.item(0).offsetHeight;
window.addEventListener('scroll', function(){
  var windowTop = window.scrollY;
  sectionTops.map(function(height, index) {
    if(height - sectionHeight / 3 < windowTop && windowTop < height + sectionHeight / 3) {
      sectionNowIndex.set(index);
    }
  })
})

function controlIndex() {
  var index;

  this.get = function() {
    return index;
  };

  this.set = function(val) {
    index = val;
    menuButtonsToggle(val);
  };

  this.add = function(val) {
    index += val;
    menuButtonsToggle(val);
  };
}

function menuButtonsToggle(index) {
  [...menuButtons].map(function(element, elementIndex) {
    element.classList.toggle('active', index == elementIndex);
  })
}