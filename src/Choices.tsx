import { Button } from "@geist-ui/core"
import { ComponentType } from "react"
import { useDispatch, useSelector } from "react-redux"
import { StoryState } from "./store"
import { makeChoice } from "./story.slice"

export type ChoicesProps = {}

export const Choices: ComponentType<ChoicesProps> = () => {
  const { choices } = useSelector((state: StoryState) => state.story)
  const dispatch = useDispatch()
  return (
    <div>
      {choices.map((choice) => (
        <div key={choice.index + choice.text}>
          <br />
          <Button
            key={choice.index + choice.text}
            onClick={() => dispatch(makeChoice(choice))}
            autoFocus={choice.index === 0}
          >
            {choice.text}
          </Button>
          <br />
        </div>
      ))}
    </div>
  )
}
