# author: Hendrik Wallbaum
# title: InkSword

LIST mood = Adventurous, (Neutral), Skeptical 
VAR knows_about_chris_house = false
VAR encountered_bandits = false

-> Beginning

=== function mood_improve ===
{
    - mood == Neutral: 
        ~mood = Adventurous
    - mood == Skeptical: 
        ~mood = Neutral
}

=== function mood_worsen ===
{
    - mood == Neutral: 
        ~mood = Skeptical
    - mood == Adventurous: 
        ~mood = Neutral
}

=== Library ===
#SCENE: library

Welcome to Storytellers demo story "Ink Sword".

Please open this tab in full screen for the best experience (optimized for desktop).

You can use "tab" to select an option and "enter" to confirm. Or simply click on your choice.

And now, enjoy 😊

* [Read story] -> Beginning

=== Beginning ===
#CLEAR
#SCENE: bonfire
#CHAPTER: At the bonfire

It was one of those evenings around the bonfire where stories gush out like water from a spring and grow into cascading streams of adventure like rivers before they reach the sea.

And now, it was Bens turn to stand up...

* [listen] -> BensStory

=== BensStory ===

"Once there was a sword signifying the rule over this land" he began.

"But soon after the king died it vanished into the realms of myth... Until one day, a mighty wizard appeared who struck it into a stone! So that it may rest there until the next true king of our great country come and find it."

    // Should make character adventurous and experience bolder story telling.
    * [I listened intrigued]
    ~ mood = Adventurous
    I continued to listen intrigued by this story of long forgotten kings and magic.

    // Character is more of a realist and will see things for what they are.
    * "What nonsense" I thought to myself.
    ~ mood = Skeptical
    But I never listened to Bens stories for the news they contained. It was the entertainment that bound all of us to his lips.
  
- Ben continued "rumor has it, the stone was found over in Budshire not long ago."

"Some lads immediately tried pulling it out. Obviously with no success! Had to run back to their mommies, tails between their lags. And serves them right for thinking they could be king!" He spat in the fire, making it sizzle.

* [continue]

- Later that night, I went to bed, 
<> {mood == Adventurous:
    dreaming of the sword and the glory it promissed.
- else:
    knowing that a sword could never change anyones fate.
}

Little did I know at this point what change Bens story would bring to my life.

* [Sleep] -> SettingOut

=== SettingOut ===
#CLEAR
#SCENE: morning
#CHAPTER: The next morning

* [Wake up]

- Waking up hungover, as most Saturdays seemed to be, I went to meet the lads early next morning{mood == Adventurous:, still filled witht he spirit of adventure}.

"What do you make of old Bens story then lads" I asked my friends.

Chris gave me a sceprical look, he always had been the down to earth type: "not sure what to tell you, but those stories are fairytales, nothing else.{mood == Skeptical: I knew I could count on Chris to bring solid reasoning!}

"Not so sure about that", interjected James, always the type to jump straight into action: "to me this sounds like a grand adventure to be had!"{mood == Adventurous: I couldn't agree more.}

"Well sounds like we should go have a look, doesn't it?" Rick had always been the one to make our small circle move into action and we all admired him for that. "What do you think?" he said looking my way.

*"Let's do it!"

- <> I said. And soon we were prepared.

There had always been two ways connecting our village to Budshire. One went straight through the forrest. A fast but dangerous road for bandits often lurked in the woods. The other took a bit longer to complete but rewarded you with quite the view, as it went over the mountain.

*[We took the straight path] -> ForrestRoute
*[The mountain it was] -> MountainRoute

=== ForrestRoute ===
#CLEAR
#SCENE: forrest
#CHAPTER: Into the woods

// Meeting Bandids...

// You wishfully look at the mountain. View is probably amazing and you can't picture bandits being there.

The route through the forrest was sadly blocked by fallen trees from the last storm.

*[We went up the mountain] -> MountainRoute

=== MountainRoute ===
#CLEAR
#SCENE: mountain
#CHAPTER: The high ground

The view from atop the mountain was spectacular, as ever! The sun was shining, and flowers blooming on the side of the mountain.

It had been a long time since the four of us had been out like this together. "So, Chris, how is the family?" asked James, who really seemed to be enjoying this adventure. But much like the rest of us he hadn't managed to find a partner for the adventure of family, yet. Chris had suddenly matured two year ago when he married Lisa and their son Eithan was born not long after.

"Ahh, you know how it is" grinned Chris, his family being the only thing that got his spirits up. "Eithan is still exploring the world, it's a joy to watch!" his eyes sparkled: "you wouldn't believe all he is looking at is a simple butterfly when you see how much his eyes sparkle". Eithans reported sparkle seemed to be contagious, we all looked at the world around us with renewed interest.

    *"What about Lisa, though?"[] I inquired.
    ~ knows_about_chris_house = true
    
    "You know, she is still dreaming of a bigger house. And, I am trying to save up. But with expenses for Eithan piling up... Well, let's say our priorities are currently elsewhere." From the smile on his face, he didn't seem to mind to much.

    *"You really enjoy that, huh?"[] I mockingly noted at Chris.
    
    "Being a dad?" he replied. "Ohh yeah, best thing to ever happen to me!"
    
    
- Thus we went on in high spirits for a while.

{mood == Skeptical:
    I still didn't belive in magic, but 
- else:
    I could feel my excitement rising, as we neared our yourneys goal and 
}
<> it was fun spending time with everyone.

    * [continue]

- As we moved on, the forrest came into view. From above it looked not much different from a meadow. One, giant sea of green moving back and forth tot he rithm of the wind.

"Uhh, whats that?" shouted James "looks like the old bandit hideout has new residents!" And in deed there was smoke rising up from the cave you had to know was there. But it had been the hideout for a notorious group of bandits two years aga and all of us knew it only too well.

"Best we let old Ben know once we get back, so they can do something about that" Suggested Rick.

    * Looks like me missed that adventure[]. I would for sure have been a grand fight.
    {mood_improve()}

    * I was glad we didn't go that way[]. Just goes to show that we made the right decision.
    {mood_worsen()}

- 
// Put a tunnel here to see some animals. Maybe both routes can go to the same tunnel? Could be little button in the image that points out a goat or something.

* [Walk on] -> AlphaOver

=== ArrivingAtTheSword ===
#CLEAR
#SCENE: camp
#CHAPTER: Like a Festival

Finally we arrived at Budshire{encountered_bandits == true:, exhausted from our fight but happy to have made it}.

->TryPuLlingTheSwordOut

=== TryPuLlingTheSwordOut ===
#SCENE: sword

Do your best mate. Previous choices will dictate wether you can or not.

* [Pull at the sword]

- I pulled... but nothing happened.

* [Try again]

- One more try!

{mood == Adventurous:
    And suddenly I was holding it! Right there in my hand. As if it had always belonged there.
    * [continue] -> YouBecomeKing
- else:
    But the sword was an immovable object.
    * [continue] -> YouFailed
}

=== YouBecomeKing ===

You become the king. Maybe lamet how nice it would be to not shoulder all the responsibility.

-> theEnd

=== YouFailed ===

You go home as you were. Someone else becomes king. You think about how nice it would be to be that person.

-> theEnd

=== AlphaOver ===
#CHAPTER: Alpha End

This concludes the Alpha.

Please do provide feedback 🙂

-> END

=== theEnd ===

Thank you for playing.

    -> END
