=== TheCamp ===
#CLEAR
#SCENE: camp
#CHAPTER: Like a Festival

~ won_against_bandits=false
~ has_money = won_against_bandits

Finally we arrived at Budshire{won_against_bandits == true:, exhausted from our fight but happy to have made it}.

    * Look around
    
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
    * [Stay silent]

- After a long moment Rick spoke "There's gotta' be a way to get us a chance. There just gotta' be!"

We all nodded in agreement.

-> CampOverview

= CampOverview

Looking around the camp there seemed to be a couple of options to explore.

    * [A fortune teller] -> FortuneTeller
    * [Some folk playing dice] -> DiceGame
    + [The Sword] -> AtTheSword

= FortuneTeller

She will tell you how likely you are to pull out the sword. You can change your chances.

-> END

= DiceGame

You can play for money. The players actions will ultimately decide whether they succeed. 

-> END