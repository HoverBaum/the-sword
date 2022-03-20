=== DiceGame
#Clear
#SCENE: diceGame
#SECTION: All or nothing

// Here the protagonist will aquire money.
// Highly pseudo random for now. But should be good enough to fool a player if they only do a couple of play throughs.

Not far from the camps entrance a couple of blokes sat hunched over a table, playing dice.

As we approached one of them, a bold fellow sporting a red feather on his cap, looks up. "Hey there mates, wanna join us for a game?"

    * "Thanks, only watching[."]," I replied.
        "Suit yourselfs then," he replied with a littel grunt. -> watchDiceGame
    * "Sounds fun!"
        We joined the table. -> playDiceGame
    * {has_money} "We even brough some coin to wager!"
        Confidently we joined the table. -> playDiceGame


=== winningDice

// Winning dice are always above 9.

<>{~four, six and two|five, four and four|five, five and six|three, five and four|one, six and three|six and two threes|six, one and five}.

-> DONE

=== loosingDice

// Loosing dice are always below or equal to 9.

<>  {~two, three and one|one, one and three|two, four and two|two, one and four|three and two twos|one and two threes|one, six and two}.

-> DONE

=== watchDiceGame

// You can watch the men play dice for as long, as you want.
// Maybe we should limit this to like 5 games?

~temp player1Wins = RANDOM(1,2) == 1
~temp player1 = "{&Piet|Bryan}"
~temp player2 = "{&Bryan|Piet}"

Your turn {player1} said the red feathered man.

{player1} picked up the dice and threw them.

They landed on {player1Wins:
    <- winningDice
    - else:
    <- loosingDice
}

<> "{~Not bad mate|Bet, I can beat that|I have seen you do better|Let me show you, how it's done}," said {player2}, picking up the dice to beat it.

And again the dice rolled, this time landing on {player1Wins:
    <- loosingDice
    - else:
    <- winningDice
}

{~"Ha, my win!"|"Got you this time!"|"Luck was on my side!"} {~exclaimed|celebrated|shouted} {player1Wins:
    <>{player1}
    - else:
    <>{player2}
}
<>, taking the wagered money.

    + We stayed for another round. 
        -> watchDiceGame
    * We left them to it.
        -> END
    * "I would love to join" 
        -> playDiceGame

=== playDiceGame

"Well then, sit down." Said the man witht the red feather in my direction. "I am Clark and these here," he points at his companions in turn, "are Piet and Bryan."

A curt nod is all Piet and Bryan give us.

    * I sat down.
    
- "The rules are quite simple," explained Clark, "there are three dice. Both of you throw them. Whoever gets the most eyes to show up wins."

"Since we already have a price pool, the first game is on us." Said the one identified as Piet, smiling in my direction.

"I will go first." said Bryan, grabbing the dice.

    * [watch]
    
- He threw the dice, rolling a solid <- loosingDice

    * "My turn!"
    
- 
~mood = Excited
Grabbing the dice, I could feel the excitement rising in my cest.

And they landed on <- winningDice

    * "Ha, our victory!"
    
- <> I said, unable to hide my excitement.

"Great game mate," said Clark patronizing, "care for another one?"

I knew when someone was trying to tempt my luck from the men back home and this fellow was definitely trying to pull a number on us!

    * "Thanks, but no thanks!"
        <>I said, "I think that was all of my luck for today".
        
- And we turned back to wandering the camp, leaving the disgruntled men behind.

    * [continue] -> TheCamp.CampOverview


-> END