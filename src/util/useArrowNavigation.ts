import { KeyCode, useKeyboard } from '@geist-ui/core'

type nextIndexFunction = (activeIndex: number, totalElements: number) => number

/**
 * Enable navigation between "tabbable" buttons using arrows keys.
 * Buttons are "tabbable" if they "tabindex" !== -1.
 * @param ref React ref on which to use arrow navigation.
 * @param offset Number of elements to skip navigation for.
 */
export const useArrowNavigation = (
  ref: React.RefObject<HTMLElement>,
  offset = 0
) => {
  const moveFocus = (nextIndex: nextIndexFunction) => (root: HTMLElement) => {
    const buttons = [...root.querySelectorAll('button')]
    const tabableButtons = buttons.filter(
      (button) => button.getAttribute('tabindex') !== '-1'
    )
    const activeIndex = tabableButtons.reduce((foundIndex, button, index) => {
      if (button === document.activeElement) return index
      return foundIndex
    }, -1 + offset)
    tabableButtons[nextIndex(activeIndex, tabableButtons.length)].focus()
  }

  const nextElement: nextIndexFunction = (
    activeIndex: number,
    totalElements: number
  ) => (activeIndex >= totalElements - 1 ? activeIndex : activeIndex + 1)

  const previousElement: nextIndexFunction = (activeIndex: number) =>
    activeIndex <= 0 ? activeIndex : activeIndex - 1

  const focusNextButton = moveFocus(nextElement)

  const focusPreviousButton = moveFocus(previousElement)

  useKeyboard(
    (event) => {
      const storyDiv = ref.current
      if (!storyDiv) return
      if (event.key === 'ArrowDown' || event.key === 's')
        focusNextButton(storyDiv)
      if (event.key === 'ArrowUp' || event.key === 'w')
        focusPreviousButton(storyDiv)
    },
    [KeyCode.DownArrow, KeyCode.UpArrow, KeyCode.KEY_W, KeyCode.KEY_S]
  )
}
