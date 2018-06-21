/**
HTML Examples

This code will find all <template> elements on the page,
and render them within #examples-comtainer as both the
code and the rendered HTML
**/

import {$, $$, render, safe} from '/js/dom.js'

window.addEventListener('load', () => {
  var container = $('#examples-container')
  $$('template').forEach(template => {
    container.append(render(`<div class="example">
      <div class="code"><pre><code>${safe(removeIndent(template.innerHTML))}</code></pre></div>
      <div class="rendered">${template.innerHTML}</div>
    </div>`))
  })
})

function removeIndent (str) {
  if (str.charAt(0) === '\n') {
    var i
    str = str.slice(1) // skip the newline
    for (i = 0; i < str.length; i++) {
      if (str.charAt(i) !== ' ' && str.charAt(i) !== '\n') break
    }
    return str.split('\n').map(piece => piece.slice(i)).join('\n')
  } return str
}