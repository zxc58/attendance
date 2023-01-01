import { render, h } from 'vue'
export const flash = ({ variant, message }) => {
  const flash = h(
    'div',
    { class: `alert-${variant} alert fade show flash` },
    message
  )
  render(flash, document.querySelector('.flash-container'))
  setTimeout(() => {
    render(null, document.querySelector('.flash-container'))
  }, 4000)
}
