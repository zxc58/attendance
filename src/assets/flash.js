import { Alert } from 'bootstrap'
import { render, h } from 'vue'

export const flash = ({ variant, message }) => {
  const flash = h(
    'div',
    { class: `alert-${variant} alert fade show flash` },
    message
  )
  // document.createElement('div')
  // alertDiv.classList.add('alert', `alert-${variant}`, 'fade', 'show', 'flash')
  // const textNode = document.createTextNode(message)
  // alertDiv.appendChild(textNode)
  // document.querySelector('#flash-block').appendChild(alertDiv)
  render(flash, document.querySelector('.flash-container'))
  var alert = Alert.getOrCreateInstance('.flash-container')
  setTimeout(() => {
    alert.close()
  }, 4000)
}
