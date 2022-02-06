# HashRouter

## Problem

I wanted to get the game onto Itch but it wasn't loading everything, even after switching to relative base path.

On Itch the background color was right and the Alpha tag was displayed. However none of the games content was showing up.

Upon investigation I noticed that all the contents of the router was not showing up. This makes perfect sense, as the BrowserRouter didn't have a route for `/the-sword` to display something.

## Solution

We are switching to HashRouter to solve this. The HashRouter takes over from wherever the application is hosted and simply adds a hash for routing, no need to know the base path.

As a caveat paths on our own domains will be less clean but that is super okay for a game.