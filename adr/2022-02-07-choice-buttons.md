# Choice Buttons

This documents a couple of decidions around Choice Buttons.

## Hovering

When focussing one button and hovering another both buttons went into the "focused" state.

As a solution ChoiceButtons now listen for mouse overs and on this event set themselfs focussed.

## Readability

The default, rather slim font was hard to read when buttons are "focused". The slim, dark letters were hard to read on the white backgrounds.

As a solution we make text bold in "focused" state.

This caused an issue with button widths changing on focus.

We solve this by making the text bold initially, noting the width for this and forcing the button to always have that width. Thus creating room for the tex to "grow into".
