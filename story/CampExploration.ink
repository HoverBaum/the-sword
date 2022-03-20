=== CampExploration
#SCENE: camp
#SECTION: Just looking

// Here the protagonist can gather enough merrit to be worthy of the sword. Needed if didn't defeat bandits and doesn't know about Chirs' house wish. Else just aditional fun.

The sea of white tents stretched on for what seemed like miles, forming somethign closer to a city than a mere camp. Alleys formed between big tents and marketplaces had been errected where opening were created by dishartened adventures abanoned their quest for glory. 

One of these marketplaces had sprung up around an old wallnut tree. It's majestic canopy cast a cooling shadow unto the merchants trying to best each other in convincing their customers that yes, their bread was in fact better than the one next door.

  * [Keep exploring]
  * [Check the stalls]

    The first stall we arrived at was one of said street cries, offering the "finest bread this close to the sword."
    
      ** "The bread did look tempting."
        But we had brought our own provisions and no money to waste.
      ** {has_money} "We will take three, please."
        I said, happier than ever that we had come by some money.

- Moving on, we walked around the tree.

On the other side a small girl was looking up the branches, seemingly close to tears.

// Maybe we can tempt the player into ignoring the girl by teaching them abuot ignoring folks in an ealier encounter. Someone could try to scam them or something.

  * "Hey, whats wrong?["]" I asked, squatting down to her height. -> rescueCat ->
  * We moved along.

- After another dozen or so tents had passed us by we arrived at the next market. This time specialized in selling juwelery. 

There couldn't even be a thought of buying anything here, no matter how beautiful the creations were.

  * [Walk on]

- We continued to explore the camp some more but eventually it was time to focus on our adventure once again.

-> TheCamp.CampOverview

= rescueCat

She looked at me with her watery eyes and said, "my cat is up there in the tree and he's to scared to come back down."

"Ha, don't you worry less," said Rick, "we shall have him right down."

"My friends are good at this kind of things. Getting people out of trouble." Chris told the girl to comfort her. He was the best of us when it came to dealing with kids. "What's your name?"

"I am Rachel," said the girl.

"Well, don't you worry Rachel, we will get your cat back!"

  * I started climbing the tree.
  * I waited for James to move first.
    And, dependable as ever, James jumped straight into action.

    The first few branches didn't take him any time at all and soon he reached the cat. "Come here, kitty cat, good kitty cat," he tried to tempt the cat.

    But the cat didn't seem to like that very much, at least it scratched at his hand, making him lose his hold and tumble back down to the ground.

    Groaning he got back up, "guess it's your turn now."

      ** [continue]
        I started climbing the tree.

- Half way to the cat I remembered to look back to the girl and ask, "hey, Rachel what's your cats name?"

"He, is called Leo," replied Rachel, between covering here eyes with her hands.

Also at Leo, I tried a different approach.

  * "Here, Leo, Leo"

-<> I tried to temp the cat.

And with success for his named seemed to calm him down enough to allow me to carry him down.

On solid ground again Rachel was overjoyed to be reunited with her cat.

"Thank you so much, all of you!"

  * "Don't mention it[."]," I said. "Just make sure he learns how to get down."

- We all shared a laugh, before Rachel disappeared with Leo into the alley behind the next tent.

~ saved_the_cat = true

And we started moving again.

  * [continue]

- ->->