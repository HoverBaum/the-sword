INCLUDE TheCamp.ink
INCLUDE AtTheSword.ink
INCLUDE DiceGame.ink
INCLUDE CampExploration.ink
INCLUDE MountainRoute.ink

# author: Hendrik Wallbaum
# title: InkSword

LIST mood = Adventurous, Curious, Energetic, Cheerful, Excited, Rested, Prudent, Fearful, Dishearted
VAR knows_about_chris_house = false
VAR took_mountain_route = false
VAR won_against_bandits = false
VAR saved_the_cat = false
VAR has_money = false

-> Beginning

=== function can_pull_the_sword() ===

~return mood < Rested && (won_against_bandits || knows_about_chris_house || saved_the_cat)

=== function mood_event(event) ===
{
    - mood == Adventurous && event == "sleep":
        ~ mood = Energetic
    - mood == Prudent && event == "sleep":
        ~ mood = Rested
}

=== Beginning ===
#CLEAR
#SCENE: bonfire
#CHAPTER: At the bonfire

It was one of those evenings around the bonfire where stories gush out like water from a spring and grow into cascading streams of adventure like rivers before they reach the sea.

And now, it was Bens turn to stand up...

    * [listen] -> BensStory

=== BensStory ===

~ mood = Curious

"Once there was a sword signifying the rule over this land" he began.

"But soon after the king died it vanished into the realm of myth... Until one day, a mighty wizard appeared who struck it into a stone! So that it may rest there until the next true king of our great country come and find it."

    // Should make character adventurous and experience bolder story telling.
    * [I listened intrigued]
    ~ mood = Adventurous
    I continued to listen, intrigued by this story of long forgotten kings and magic.

    // Character is more of a realist and will see things for what they are.
    * "What nonsense" I thought to myself.
    ~ mood = Prudent
    But I never listened to Bens stories for their credibility. It was the entertainment that bound all of us to his lips.
  
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

{mood_event("sleep")}

    * [Wake up]

- Waking up hungover, as most Saturdays seemed to be, I went to meet the lads early next morning{mood == Adventurous:, still filled witht he spirit of adventure}.

"What do you make of old Bens story then lads" I asked my friends.

Chris gave me a sceprical look, he always had been the down to earth type: "not sure what to tell you, but those stories are fairytales, nothing else.{mood == Prudent: I knew I could count on Chris to bring solid reasoning!}

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

The Hillwood forrest had been one of our favorite places to play in as kids.

Back then it had been a bright place full of wonders to discover and adventures to be had. But, over time, it had started to become darker and darker until it became what it is today. 

{mood == Adventurous: <>A trove of adventure only fit for the bravest. | <>A dark place where shadows lurk and bandits hide.}
* {mood == Adventurous} Time to take it head on!
* {mood != Adventurous} Let's hope we don't meet them.
- And we went into the woods.

    * [continue]

- After walking for a while I started to wonder whether my {mood == Adventurous: excitement | fears} had been for naught.

// Twice as likely to meet bandits than to have a boring but fast walk through the forrest.
{~ -> BoringForrestWalk | -> MeetBanditsInForrest | -> MeetBanditsInForrest}
//-> MeetBanditsInForrest

=== BoringForrestWalk ===

And nothing happened for all the time that we walked through the woods. Except all of us wishfully glancing up at the mountain, there we would at least have had a good view. {mood == Prudent: Though secretly I was happy about my fears being unfounded.}

* Soon, we arrived -> AlphaOver

=== MeetBanditsInForrest ===

It was only when we arrived at a log barring the road that my suspiciouns arose again. That was exactly what the crimson Bandits used to do when they terrorized the Hillwoods two years again.

"Their hideout used to be around these parts, didn't it?" asked Rick, cautiously looking around.

"You are right!" said James excitedly. The whole affair two years ago had all been a great adventure to him. {mood == Adventurous: And I could totally see why!}

"What should we do?" that was Chris, practical as ever.

    * {mood == Adventurous} "Let's look for the bandits!"[]
        I said, eager for an adventure and started climbing over the trunk.
    
    * [I was hoping for no bandits]
        ~ mood = Fearful
        "We should move carefully from here on" I said, looking left and right as I climed over the trunk.
    
    * {mood == Prudent}"This looks like bandits[!]", I said while cautiously climbing over the trunk.
    
    * ["Probably just fell over"]
        ~ mood = Energetic
        "Probably just fall over during the last storm", I said while starting to climb over.
    
- And while we were still busy crossing the obstacle it happened. Suddenly multiple, ragged looking and foul grinning thugs jumped out of the brushes. With Chris and Rick still climbing the trunk and James getting his bearing after enthusiastically jumping down, it fell to me to respond.

-> BanditEncounterFight

= BanditEncounterFight
~temp hasFought = false

    * {mood == Prudent || mood == Fearful} [We were prepared!]
        Knowing this path to be trecherous we had come prepared! And my first response was a quick strike at the chap next to me who fell down screaming.
        Now the boys joined in, drawing their swords, prepared for just this occasion. The forrest was filled with the sound of swords striking each other.
            * [Press on] -> BanditEncounterWin
    * "We have nothing!"[] <>I shouted, hoping that we could talk our way out of this.
        "wuahaha, think us stupid enough to believe that now, do you?", spat a particularly fould looking bandit. -> BanditEncounterFight
    * "Please don't hurt us!"[] <>I begged for there was nothing else to do. -> BanditsCaptureUs
    * {mood == Adventurous || mood == Energetic}[Fight!]
        ~ hasFought = true
        There was nothing like a good fight to start your Adventure with! After all this was our tripp to become kings, some bandits weren't going to stop us. 
        They sure put on a good fight, I have to give them that.
            ** [Push on] -> BanditEncounterWin
            ** [Fight bravely] -> BanditEncounterWin
            ** [We were stronger] -> LooseToBanditsAndDie
    * ->
    
- Fighting was all we could do! -> BanditEncounterWin
    
    
    * [continue] -> AlphaOver
    
= BanditEncounterWin
~won_against_bandits = true

Soon we managed to push the bandits back into the woods where they belonged.

    * "Heureka!"[] I shouted, turning to my friends in celebration who wore {mood < Rested bright | exhaused} smiles.
    
~ has_money = true
- All through the clearing lay remains of the fight. We gathered up the coins dropped by the fleeing bandits and took a rest before moving on through the woods.

    * [Soon after, we arrived] -> AlphaOver
    
= LooseToBanditsAndDie

"We were stronger", was the last thing I thought before a thugs dagger hit me in the back.

    * [continue]

- It was the last thing I ever remembered. Now only my ghost, a mere fraction of my former self remains to tell the story.

-> AlphaOver

= BanditsCaptureUs
~mood = Dishearted

But the bandits wouldn't have any of it. They took all we had, tied us up and hurled us to their hideout.

We had last been in this place when the Crimson Bandits had been subjugated two years ago. And it looked even more run down than back then.

    * [continue]

- And this time we only left the place after our tormentors were sure they had really taken everythign from us, including extorting a good sum of ransom from our frineds back in the village.

    * [continue]

- Almost a week later we trotted back into the village square, heads held low and hearing Ben tell tales of how he had seen a yountg lad named Arthur pull the Sword out of the stone and claim the throne.

It just wasn't ment to be our adventure.

-> AlphaOver


=== AlphaOver ===
#CHAPTER: Alpha End

This concludes the Alpha.

Please do provide feedback 🙂

-> END

=== theEnd ===

    -> END
