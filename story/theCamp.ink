=== TheCamp ===
#CLEAR
#SCENE: camp
#CHAPTER: Like a Festival

~ has_money = won_against_bandits

Finally we arrived at Budshire{won_against_bandits == true:, exhausted from our fight but happy to have made it}.

    * [Look around]
    
- A big camp had sprawled up, houndreds of tents and busting people filled the wide meadow. Looking over the sea of tents we could see the sword glistening on a small hill. It looked like it was only waiting for someone to reach for the stars together with.

"Let's go straight for the sword!" exclaimed James, excited as ever.

"Ha, good luck with that one" laughed a man emerging from one of the nearest tents. "By now the local Sherif setup an 'orderly process' for all the adventorous folk trying to have a go at it. Of cause that involves getting in line and paying a fee if you want a try".

"Money hungry bastard" he spat on the ground.

We looked at each other{won_against_bandits == true: grinning brightly}.

{won_against_bandits == true: 
    Good thing that we had beaten those bandits on our way here. Their remains hat yielded a good amount of money. Looks like we wouldn't have trouble for now. 
        * [continue]-> CampOverview
- else:
    -> noCash
}

= noCash

    * "I didn't bring much cash"[] I said. And by the looks in their faces, neither did they.
    * [I stayed silent]

- After a long moment Rick spoke "There's gotta' be a way to get us a chance. There just gotta' be!"

We all nodded in agreement.

-> CampOverview

= CampOverview
#SECTION: At the camp
#SCENE: camp

Looking around the camp there seemed to be a couple of options{| still open}.

// Maybe there needs to be a path here that fails the game. User could lose all money and be unable to reach the sword.

    * [A fortune teller] -> FortuneTeller
    * [Some folk playing dice] -> DiceGame
    * [Explore the camp further] -> CampExploration
    + [The Sword] -> AtTheSword

= FortuneTeller
#CLEAR
#SECTION: The fortune teller
#SCENE: fortune

// If the protagonist takes her up, Madame Lyzette will give hints on how to win the game.

~ mood = Curious

Fog drifts out of the round, purple tent right at the camps edge. Big letters above the entrance read: "Madame Lyzette - fortune telling".

    * [continue]

- {
    -mood <= Rested:
        "Looks promissing, aye?" was Ricks comment, as he pushed us through the curtain.
    -else:
        "Not sure if that kind of place can be trusted," note Chris, as James was already pushing us through the curtain.
}

Insight the tent the fog turned into thick smoke, rising from counteless incense sticks around the room. They filled the air with a thousand smells of exotic herbs, deep forrests and cozy cottages. It made me want to stay here.

"Hello dears", said a smokey voice from teh shadows, "how can I help you?"

    * "Sorry, wrong tent[!"]," was all I could think off, eager to leave this place.
        ** [continue] -> CampOverview
    * "Madam Lyzette?"
        I asked cautiously.

- "The very same," she replied.

"Come, have a seat and let me gaze into your future."

    * I sat down.
    * "I am not here for that!"
        "Ohh, aren't you?" She asked. "But I am sure that you can discover more about yourself by listening to what I have to say."
            ** Intrigued, I sat down.
            ** "No, I don't think so["]," I said and left her tent. -> CampOverview

- She looked at me over her crystal ball and frowned. "The ball reveals all there is to see, my dearest."

"And your fate is particularly facettet!"

    * I leaned forwrad[.], intent on catching her every word.

- {
    -can_pull_the_sword():
        "As you are right now, all doors are open to you!" She said in a hushed voice, "but that can change, it might be best to not waste the opportunity you are given."

    -else:
        -> DarkFortune
        
}

= DarkFortune

// This stitch informes the protagonist where they are on their journey to get the sword.

"Your fate is interesting, but you are yet far from realizing your dream!" 
"In fact," she continued, "there might never be a chance to make them real."

    * [continue]

- I sat there, stunned by her refelation, as she finally gave some advice.

{
    -not won_against_bandits && not knows_about_chris_house:
        "What keeps you from growing, is your lack of the unknown," she continued. "Try finding it first."
    -else:
        "Your life so far lives up to your ambitions," she continued.
}

{
    -not has_money:
        "And finally," she concluded, "you lack in it, that makes the world turn. But fear not, for the reckless will always find it."
    -else:
        "At least it doesn't look like you need to worry about money," she finished.
}

    * [continue]

- "And now, out of my shop! There are more customers waiting."

With that, she shued us out of her tent.

    *[We left] -> CampOverview

-> END



