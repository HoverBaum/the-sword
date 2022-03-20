=== MountainRoute ===
#CLEAR
#SCENE: mountain
#CHAPTER: The high ground

~ took_mountain_route = true

The view from atop the mountain was spectacular, as ever! The sun was shining, and flowers bloomed on the side of the mountain.

It had been a long time since the four of us had been out like this together. "So, Chris, how is the family?" asked James, who really seemed to be enjoying this adventure. But much like the rest of us he hadn't managed to find a partner for the adventure of family, yet. Chris had suddenly matured two year ago when he married Lisa and their son Eithan was born not long after.

"Ahh, you know how it is" grinned Chris, his family being the only thing that got his spirits up. "Eithan is still exploring the world, it's a joy to watch!" his eyes sparkled: "you wouldn't believe all he is looking at is a simple butterfly when you see his eyes glissening with excitement". Eithans reported sparkle seemed to be contagious, we all looked at the world around us with renewed interest.

    *"What about Lisa, though?"[] I inquired.
    ~ knows_about_chris_house = true
    
    "You know, she is still dreaming of a bigger house. And, I am trying to save up. But with expenses for Eithan piling up... Well, let's say our priorities are currently elsewhere." From the smile on his face, he didn't seem to mind to much.

    *"You really enjoy that, huh?"[] I mockingly noted at Chris.
    
    "Being a dad?" he replied. "Ohh yeah, best thing to ever happen to me!"
    
    
- Thus we went on in high spirits for a while.

{mood == Prudent:
    I still didn't belive in magic swords, but 
- else:
    I could feel my excitement rising, as we neared our journeys goal and 
}
<> it was fun spending time with everyone.

    * [continue]

- As we moved on, the forrest came into view. From above it looked not much different from a meadow. One, giant sea of green moving back and forth to the rythm of the wind.

"Uhh, whats that?" shouted James pointing at a glade in the forrest "looks like the old bandit hideout has new residents!" And in deed there was smoke rising up from the cave you had to know was there. But it had been the hideout of the Crimson Bandits a notorious group of thiefs only two years ago and all of us knew that only too well!

"Best we let old Ben know once we get back, so they can do something about that" Suggested Rick.

    * Looks like me missed that adventure[]. It would for sure have been a grand fight.
        ~ mood = Adventurous

    * I was glad we didn't go that way[]. Just goes to show that we made the right decision.
        ~ mood = Prudent

- 
// Put a tunnel here to see some animals. Maybe both routes can go to the same tunnel? Could be little button in the image that points out a goat or something.

    * [Walk on] -> TheCamp

