const baseConfid = {
  wordFadeInTime: 0.5,
  wordDelayTime: 0.1,
}

const textSpeed = 10

export const config = {
  INITIALLY_DISPLAYED_WORDS: 3,
  WORD_FADE_IN_TIME: baseConfid.wordFadeInTime / textSpeed,
  WORD_DELAY_TIME: baseConfid.wordDelayTime / textSpeed,
}
