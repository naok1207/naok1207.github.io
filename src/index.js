import "tailwindcss/tailwind.css"
import "./style.css"

var style = document.createElement("style");
document.head.appendChild( style );
var sheet = style.sheet;

const sections = document.getElementsByTagName('section');
const sectionsLength = sections.length

for(var i = 0; i < sectionsLength; i++) {
  sheet.insertRule(sectionBeforeCss(sections.item(i).id), i);
}

function sectionBeforeCss(id) {
  return `#${id}::before {
    content: ${id};
    position: absolute;
    left: 5.9rem;
    top: 50%;
    transform: rotate(-90deg) translateY(-50%);
    color: white;
    z-index: 50;
  }`
}