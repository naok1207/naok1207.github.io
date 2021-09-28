// スタイル追加のための定義
var style = document.createElement("style");
document.head.appendChild( style );
var sheet = style.sheet;

const skill_status = [...document.getElementsByClassName('skill-status')];
skill_status.forEach(function(element, index) {
  sheet.insertRule(skillStatusBeforeCss(element.id), index);
})

function skillStatusBeforeCss(id) {
  return `#${id}::before {
    content: '${id.toUpperCase()}';
    color: white;
    z-index: 40;
    display: block;
    position: absolute;
    left: -10px;
    top: -40px;
  }`
}
