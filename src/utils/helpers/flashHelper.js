import { render, h } from 'vue'

/**
 *
 * @param {string} variant
 * @param {string} message
 */
export const flash = (
  variant = 'danger',
  message = '發生未知錯誤，請重新整理'
) => {
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
