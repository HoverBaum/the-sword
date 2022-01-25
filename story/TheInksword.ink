# author: Hendrik Wallbaum
# title: InkSword

LIST mood = adventurous, distrusting, (neutral)

-> Library

=== Library ===
#SCENE: library

Welcome to Storytellers demo story "Ink Sword".

Please open this tab in full screen for the best experience (optimized for desktop).

You can use "tab" to select an option and "enter" to confirm. Or simply click on your choice.

And now, enjoy 😊

* [Read story] -> Beginning

=== Beginning ===
#CLEAR
#SCENE: beginning/bonfire
#CHAPTER: At the bonfire

It was one of those evenings around the bonfire where stories gush out like water from a spring and grow into cascading streams of adventure like rivers before they reach the sea.

And now, it was Bens turn to stand up...

* [listen] -> BensStory

=== BensStory ===
#SCENE: beginning/sword

"Once there was a sword signifying the rule over this land" he began.

"But soon after the king died it vanished into the realms of myth... Until one day, a mighty wizard appeared who struck it into a stone! So that it may rest there until the next true king of our great country come and find it."

    // Should make character adventurous and experience bolder story telling.
    * [I listened intrigued]
    ~ mood = adventurous
    I continued to listen intrigued by this story of long forgotten kings and magic.

    // Character is more of a realist and will see things for what they are.
    * "What nonsense" I thought to myself.
    ~ mood = distrusting
    But I never listened to Bens stories for the news they contained. It was the entertainment that bound all of us to his lips.
  
- Ben continued "rumor has it, the stone was found over in Budshire not long ago."

Little did I know at this point what change Bens story would bring to my life.

mood: {mood}

* [continue] -> SettingOut

=== SettingOut ===
#CHAPTER: The next morning

Setting out...

[Mountains] -> MountainRoute
[Forrest] -> ForrestRoute

=== ForrestRoute ===

Meeting Bandids...

You wishfully look at the mountain. View is probably amazing and you can't picture bandits being there.

[] -> ArrivingAtTheSword

=== MountainRoute ===

Enjoy the view....

You see the forrest from above. Looks like bandits, could be dreadful or an adventure.

Put a tunnel here to see some animals. Maybe both routes can go to the same tunnel? Could be little button in the image that points out a goat or something.

[] -> ArrivingAtTheSword

=== ArrivingAtTheSword ===
#CLEAR
#SCENE: atTheSword/camp
#CHAPTER: Like a Festival

What a festival is going on

[] ->TryPuLlingTheSwordOut

=== TryPuLlingTheSwordOut ===

Do your best mate. Previous choices will dictate wether you can or not.

* Succeed -> YouBecomeKing

* Fail -> YouFailed

=== YouBecomeKing ===

You become the king. Maybe lamet how nice it would be to not shoulder all the responsibility.

-> theEnd

=== YouFailed ===

You go home as you were. Someone else becomes king. You think about how nice it would be to be that person.

-> theEnd


=== theEnd ===

Thank you for playing.

    -> END
