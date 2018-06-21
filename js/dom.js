export function $ (el, sel = undefined) {
  if (typeof sel === 'string') {
    return el.querySelector(sel)
  }
  return document.querySelector(el)
}

export function $$ (el, sel = undefined) {
  if (typeof sel === 'string') {
    return Array.from(el.querySelectorAll(sel))
  }
  return Array.from(document.querySelectorAll(el))
}

export function render (html) {
  var template = document.createElement('template')
  template.innerHTML = html
  return template.content
}

export function safe (str) {
  str = (str || '').toString()
  return str.replace(/</g, '&lt;').replace(/>/g, '&gt;')
}