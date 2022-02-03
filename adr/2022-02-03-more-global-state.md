## Problem

When navigating from and to the story we loose the state of which lines are displayed and which ones have faded already.

## Solution

We move state of lines being faded up into the global Redux store. While this bloats up the global store with information that didn't need to be there, we can now navigate back and forth while keeping state.