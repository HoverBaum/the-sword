=== AtTheSword ===
#CLEAR
#SCENE: sword

~ temp entry = "{-> SwordIntro|-> ByTheSword}"

{entry}

= SwordIntro

We approcahed the sword, glistening auspiciously on top of a hill. It was a magnificent sight to behold.

Or at least it would have been, if not for the roped railing that had been setup around it. At one side a grumpy looking Sherif had setup a queque for people to go and have a try.

And, of cause he was charging 1 Coin per try. 

{has_money:
    Luckily we managed to come by enough cash for all four of us to have a go.
- else:
    Sadly we lacked the coins to try.
}

-> ByTheSword

= GoBackOption

    * "Let's go back["]," I said, wanting to prepare more. -> TheCamp.CampOverview

-> DONE

= WatchOptions

    <- GoBackOption
    * [We approched the Sherif] -> Sherif
    

-> DONE

= ByTheSword

{|There was still a line and the Sherif charging 1 coin per try.}

    <- GoBackOption 
    + We approched the Sherif{not has_money: anyway}. -> Sherif
    * We observed -> Observe
   

= Observe

We stayed and observed the people having a go at the sword.

One after another they walked up the hill, closed there hands on the swords hilt and tried pulling.

But the sword never budged.

    <- WatchOptions
    * [We kept watching]

-
Soon, a broad shouldered fellow staggered towards the sword. Cheered on by his crowed of drunkard friends.

"I don't see how that fellow should be worthy after all the rest," noted Chris.

And sure enough, the sword didn't budge for him. His friends cheered anyway and greated him with a new keg of ale.

    <- WatchOptions
    * [We kept watching]

-
Next up was a lass, no older than 20, with a sparkle in her bright, blue eyes.

"Looks like she could be a great queen," commented Rick.

"Yeah, might be a good change of pace after all those kings," added James, "maybe I could be her king?"

We shared a laugh, James was always quick to chat up the girls but so far hadn't found anyone that stuck.

    * [watch]

- 
Tensed, we watcher her take her turn. But she as well didn't have any luck.

"Wait here," said James, as he headed for the sword hills exit. Probably to comfort the lass and see if he could be her date, if not her king.

    * [We kept watching]

It took several participants, until James reappeared.

Sporting bright grin he told us, "I don't know abou the sword friends, but this James here got a data with Ellie next week."

And as far, as he was concerned, that seemed to be a bigger win than drawing out the sword itself.

    <- WatchOptions

-> DONE

= Sherif

"{~Well, well|Hello there}," said the Sherif, "{if it ain't a couple of new faces|welcome back}. Here to try your luck?"

    * {not has_money} "Wo don't have the coins[."]." I started, but the Sherif interrupted me, sternly.
        "No coin, no try!" He said in a definitive tone. "Same rules for everyone."
        "Try coming back after filling your pockets, there seem to be plenty of opprtunities for that around."
            ** We headed back to the camp. -> TheCamp.CampOverview
    * {has_money} "Yes, please[."]," I said, barely managing to contain my excitement.

- He took my coin and gave way to the sword.

I slowly walked up to it and closed my hands around the hilt.

    * [continue]

- This was it, the moment our adventure had led towards.

Would it move for me?

There was only one way to find out!

    * [Pull at the sword]

- I pulled... but nothing happened.

    * [Try again]

- One more try!

{can_pull_the_sword():
    And suddenly I was holding it! Right there in my hand. As if it had always belonged there.
    * [continue] -> YouBecomeKing
- else:
    But the sword was an immovable object.
    * [continue] -> YouFailed
}

=== YouBecomeKing ===

// You become the king. Maybe lamet how nice it would be to not shoulder all the responsibility.

I couldn't believe it!

And neither could the Sherif, looking at me in disbelieve. 

Only my friends erupted into cheers and laughter, screaming "long live the King! long live the King!"

Soon a crowed gathered, first just starring but soon erupting into celebration. For today, a new King had been found!

    * Time passed.

-
<> And soon I was crowned in a grand ceremony. I am still unsure how to handle this burden but my friends all moved into the castle to help me and together, we are looking into a bright future.

{knows_about_chris_house: Lisa even got her own little house for the family.}

-> theEnd

=== YouFailed ===

Devastated I stepped away from the sword...

When we sat out on this journey I hadn' been sure about all of this. But now, standing here, I wanted nothing more than for this sword to move. And it hadn't. It simply didn't move for me.

    * The otheres tried in turn.
    
- But with the same result. And finally, we had to admit...

It was time to go home.

At least we had seen something of the world that was more than some back home could say about their lifes. We had crossed the{took_mountain_route: mountain, enjoyed the views| forrest}{won_against_bandits: and even won again the bandits}. And here at the camp our adventure hadn't stopped but only really started.

    * [continue]
    
- 
~ mood = Cheerful
Thinking back on it now, it had been a good adventure!

-> theEnd