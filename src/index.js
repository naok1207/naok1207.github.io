import "tailwindcss/tailwind.css"
import "./style.css"
import SmoothScroll from 'smooth-scroll';

// 初期化
var sectionNowIndex = 0;

// スタイル追加のための定義
var style = document.createElement("style");
document.head.appendChild( style );
var sheet = style.sheet;

// section情報を用いた処理 -----------------------------------
const sections = document.getElementsByTagName('section');
const sectionsLength = sections.length

// 左側にサブタイトルを追加
for(var i = 0; i < sectionsLength; i++) {
  sheet.insertRule(sectionBeforeCss(sections.item(i).id), i);
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

// 右下矢印クリックによる移動処理
const upArrow = document.getElementById('arrow-up');
const downArrow = document.getElementById('arrow-down');　

upArrow.addEventListener('click', function() {
  if (sectionNowIndex == sectionsLength - 1) { return; }

  moveSection(1);
});

downArrow.addEventListener('click', function() {
  if (sectionNowIndex == 0) { return; }

  moveSection(-1);
})

function moveSection(moveTo) {
  sectionNowIndex += moveTo
  var scroll = new SmoothScroll();
  var anchor = sections.item(sectionNowIndex);
  scroll.animateScroll(anchor);
}
