import {$, $$, render} from '/js/dom.js'

window.addEventListener('load', () => {
  // render common page elements
  renderHeader()
  renderFooter()

  // clean up common page elements
  decorateCodeBlocks()
})

function renderHeader () {
  $('body').prepend(render(`
    <header>
      <h1>${document.title}</h1>
    </header>
    <nav>
      <ul>
        <li><a href="/">Homepage</a></li>
        <li>Styles
          <ul>
            <li><a href="/typography.html">Typography</a></li>
            <li><a href="/sections.html">Sections</a></li>
            <li><a href="/forms.html">Forms</a></li>
          </ul>
        </li>
        <li>Components
          <ul>
            <li><a href="/alerts.html">Alerts</a></li>
          </ul>
        </li>        
      </ul>
    </nav>
  `))
}

function renderFooter () {
  $('body').append(render(`
    <footer>
      &copy; 2018 <a href="https://bluelinklabs.com" title="Blue Link Labs">Blue Link Labs</a> (<a href="/LICENSE" title="Open source license">MIT License</a>).
    </footer>
  `))
}

function decorateCodeBlocks () {
  $$('pre.code').forEach(codeEl => {
    // turn any html within to just code
    // also replace a few tokens
    var code = codeEl.innerHTML
    code = code.replace('$HERE', 'dat://' + window.location.host)
    code = code.replace(/(^\s)|(\s$)/, '') // strip whitespace at the beginning and end
    codeEl.textContent = code
  })
}