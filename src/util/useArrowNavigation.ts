import { KeyCode, useKeyboard } from '@geist-ui/core'

type nextIndexFunction = (activeIndex: number, totalElements: number) => number

export const useArrowNavigation = (ref: React.RefObject<HTMLElement>) => {
  const moveFocus = (nextIndex: nextIndexFunction) => (root: HTMLElement) => {
    const buttons = [...root.querySelectorAll('button')]
    const tabableButtons = buttons.filter(
      (button) => button.getAttribute('tabindex') !== '-1'
    )
    const activeIndex = tabableButtons.reduce((foundIndex, button, index) => {
      if (button === document.activeElement) return index
      return foundIndex
    }, -1)
    tabableButtons[nextIndex(activeIndex, tabableButtons.length)].focus()
  }

  const nextElement: nextIndexFunction = (
    activeIndex: number,
    totalElements: number
  ) => (activeIndex >= totalElements - 1 ? 0 : activeIndex + 1)

  const previousElement: nextIndexFunction = (
    activeIndex: number,
    totalElements: number
  ) => (activeIndex <= 0 ? totalElements - 1 : activeIndex - 1)

  const focusNextButton = moveFocus(nextElement)

  const focusPreviousButton = moveFocus(previousElement)

  useKeyboard(
    (event) => {
      const storyDiv = ref.current
      if (!storyDiv) return
      if (event.key === 'ArrowDown') focusNextButton(storyDiv)
      if (event.key === 'ArrowUp') focusPreviousButton(storyDiv)
    },
    [KeyCode.DownArrow, KeyCode.UpArrow]
  )
}
