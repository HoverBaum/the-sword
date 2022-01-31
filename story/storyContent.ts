export const storyContent = ﻿{"inkVersion":20,"root":[[{"#":"author: Hendrik Wallbaum"},{"#":"title: InkSword"},{"->":"Beginning"},["done",{"#n":"g-0"}],null],"done",{"mood_improve":[["ev",{"VAR?":"mood"},{"VAR?":"Neutral"},"==","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"Adventurous"},"/ev",{"VAR=":"mood","re":true},{"->":".^.^.^.2"},null]}],["ev",{"VAR?":"mood"},{"VAR?":"Skeptical"},"==","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"Neutral"},"/ev",{"VAR=":"mood","re":true},{"->":".^.^.^.2"},null]}],"nop","\n",null],"mood_worsen":[["ev",{"VAR?":"mood"},{"VAR?":"Neutral"},"==","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"Skeptical"},"/ev",{"VAR=":"mood","re":true},{"->":".^.^.^.2"},null]}],["ev",{"VAR?":"mood"},{"VAR?":"Adventurous"},"==","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"Neutral"},"/ev",{"VAR=":"mood","re":true},{"->":".^.^.^.2"},null]}],"nop","\n",null],"Library":[[{"#":"SCENE: library"},"^Welcome to Storytellers demo story \"Ink Sword\".","\n","^Please open this tab in full screen for the best experience (optimized for desktop).","\n","^You can use \"tab\" to select an option and \"enter\" to confirm. Or simply click on your choice.","\n","^And now, enjoy 😊","\n","ev","str","^Read story","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"Beginning"},"\n",{"#f":5}]}],null],"Beginning":[[{"#":"CLEAR"},{"#":"SCENE: bonfire"},{"#":"CHAPTER: At the bonfire"},"^It was one of those evenings around the bonfire where stories gush out like water from a spring and grow into cascading streams of adventure like rivers before they reach the sea.","\n","^And now, it was Bens turn to stand up...","\n","ev","str","^listen","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"BensStory"},"\n",{"#f":5}]}],null],"BensStory":[["^\"Once there was a sword signifying the rule over this land\" he began.","\n","^\"But soon after the king died it vanished into the realms of myth... Until one day, a mighty wizard appeared who struck it into a stone! So that it may rest there until the next true king of our great country come and find it.\"","\n","ev","str","^I listened intrigued","/str","/ev",{"*":".^.c-0","flg":20},["ev",{"^->":"BensStory.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"What nonsense\" I thought to myself.",{"->":"$r","var":true},null]}],{"c-0":["\n","ev",{"VAR?":"Adventurous"},"/ev",{"VAR=":"mood","re":true},"^I continued to listen intrigued by this story of long forgotten kings and magic.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"BensStory.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Skeptical"},"/ev",{"VAR=":"mood","re":true},"^But I never listened to Bens stories for the news they contained. It was the entertainment that bound all of us to his lips.","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^Ben continued \"rumor has it, the stone was found over in Budshire not long ago.\"","\n","^\"Some lads immediately tried pulling it out. Obviously with no success! Had to run back to their mommies, tails between their lags. And serves them right for thinking they could be king!\" He spat in the fire, making it sizzle.","\n","ev","str","^continue","/str","/ev",{"*":".^.c-2","flg":20},{"c-2":["\n",{"->":".^.^.^.g-1"},{"#f":5}]}],"g-1":["^Later that night, I went to bed,","\n","<>","^ ","ev",{"VAR?":"mood"},{"VAR?":"Adventurous"},"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^dreaming of the sword and the glory it promissed.","\n",{"->":".^.^.^.11"},null]}],[{"->":".^.b"},{"b":["\n","^knowing that a sword could never change anyones fate.","\n",{"->":".^.^.^.11"},null]}],"nop","\n","^Little did I know at this point what change Bens story would bring to my life.","\n","ev","str","^Sleep","/str","/ev",{"*":".^.c-3","flg":20},{"c-3":["^ ",{"->":"SettingOut"},"\n",{"#f":5}]}]}],null],"SettingOut":[[{"#":"CLEAR"},{"#":"SCENE: morning"},{"#":"CHAPTER: The next morning"},"ev","str","^Wake up","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^Waking up hungover, as most Saturdays seemed to be, I went to meet the lads early next morning","ev",{"VAR?":"mood"},{"VAR?":"Adventurous"},"==","/ev",[{"->":".^.b","c":true},{"b":["^, still filled witht he spirit of adventure",{"->":".^.^.^.7"},null]}],"nop","^.","\n","^\"What do you make of old Bens story then lads\" I asked my friends.","\n","^Chris gave me a sceprical look, he always had been the down to earth type: \"not sure what to tell you, but those stories are fairytales, nothing else.","ev",{"VAR?":"mood"},{"VAR?":"Skeptical"},"==","/ev",[{"->":".^.b","c":true},{"b":["^ I knew I could count on Chris to bring solid reasoning!",{"->":".^.^.^.19"},null]}],"nop","\n","^\"Not so sure about that\", interjected James, always the type to jump straight into action: \"to me this sounds like a grand adventure to be had!\"","ev",{"VAR?":"mood"},{"VAR?":"Adventurous"},"==","/ev",[{"->":".^.b","c":true},{"b":["^ I couldn't agree more.",{"->":".^.^.^.28"},null]}],"nop","\n","^\"Well sounds like we should go have a look, doesn't it?\" Rick had always been the one to make our small circle move into action and we all admired him for that. \"What do you think?\" he said looking my way.","\n",["ev",{"^->":"SettingOut.0.g-0.32.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"Let's do it!\"",{"->":"$r","var":true},null]}],{"c-1":["ev",{"^->":"SettingOut.0.g-0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.32.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-1"},{"#f":5}]}],"g-1":["<>","^ I said. And soon we were prepared.","\n","^There had always been two ways connecting our village to Budshire. One went straight through the forrest. A fast but dangerous road for bandits often lurked in the woods. The other took a bit longer to complete but rewarded you with quite the view, as it went over the mountain.","\n","ev","str","^We took the straight path","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^The mountain it was","/str","/ev",{"*":".^.c-3","flg":20},{"c-2":["^ ",{"->":"ForrestRoute"},"\n",{"#f":5}],"c-3":["^ ",{"->":"MountainRoute"},"\n",{"#f":5}]}]}],null],"ForrestRoute":[[{"#":"CLEAR"},{"#":"SCENE: forrest"},{"#":"CHAPTER: Into the woods"},"^The route through the forrest was sadly blocked by fallen trees from the last storm.","\n","ev","str","^We went up the mountain","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"MountainRoute"},"\n",{"#f":5}]}],null],"MountainRoute":[[{"#":"CLEAR"},{"#":"SCENE: mountain"},{"#":"CHAPTER: The high ground"},"^The view from atop the mountain was spectacular, as ever! The sun was shining, and flowers blooming on the side of the mountain.","\n","^It had been a long time since the four of us had been out like this together. \"So, Chris, how is the family?\" asked James, who really seemed to be enjoying this adventure. But much like the rest of us he hadn't managed to find a partner for the adventure of family, yet. Chris had suddenly matured two year ago when he married Lisa and their son Eithan was born not long after.","\n","^\"Ahh, you know how it is\" grinned Chris, his family being the only thing that got his spirits up. \"Eithan is still exploring the world, it's a joy to watch!\" his eyes sparkled: \"you wouldn't believe all he is looking at is a simple butterfly when you see how much his eyes sparkle\". Eithans reported sparkle seemed to be contagious, we all looked at the world around us with renewed interest.","\n",["ev",{"^->":"MountainRoute.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"What about Lisa, though?\"",{"->":"$r","var":true},null]}],["ev",{"^->":"MountainRoute.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"You really enjoy that, huh?\"",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"MountainRoute.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"^ I inquired.","\n","ev",true,"/ev",{"VAR=":"knows_about_chris_house","re":true},"^\"You know, she is still dreaming of a bigger house. And, I am trying to save up. But with expenses for Eithan piling up... Well, let's say our priorities are currently elsewhere.\" From the smile on his face, he didn't seem to mind to much.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"MountainRoute.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"^ I mockingly noted at Chris.","\n","^\"Being a dad?\" he replied. \"Ohh yeah, best thing to ever happen to me!\"","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^Thus we went on in high spirits for a while.","\n","ev",{"VAR?":"mood"},{"VAR?":"Skeptical"},"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^I still didn't belive in magic, but","\n",{"->":".^.^.^.9"},null]}],[{"->":".^.b"},{"b":["\n","^I could feel my excitement rising, as we neared our yourneys goal and","\n",{"->":".^.^.^.9"},null]}],"nop","\n","<>","^ it was fun spending time with everyone.","\n","ev","str","^continue","/str","/ev",{"*":".^.c-2","flg":20},{"c-2":["\n",{"->":".^.^.^.g-1"},{"#f":5}]}],"g-1":["^As we moved on, the forrest came into view. From above it looked not much different from a meadow. One, giant sea of green moving back and forth tot he rithm of the wind.","\n","^\"Uhh, whats that?\" shouted James \"looks like the old bandit hideout has new residents!\" And in deed there was smoke rising up from the cave you had to know was there. But it had been the hideout for a notorious group of bandits two years aga and all of us knew it only too well.","\n","^\"Best we let old Ben know once we get back, so they can do something about that\" Suggested Rick.","\n",["ev",{"^->":"MountainRoute.0.g-1.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^Looks like me missed that adventure",{"->":"$r","var":true},null]}],["ev",{"^->":"MountainRoute.0.g-1.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^I was glad we didn't go that way",{"->":"$r","var":true},null]}],{"c-3":["ev",{"^->":"MountainRoute.0.g-1.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"^. I would for sure have been a grand fight.","\n","ev",{"f()":"mood_improve"},"out","/ev","\n",{"->":".^.^.^.g-2"},{"#f":5}],"c-4":["ev",{"^->":"MountainRoute.0.g-1.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"^. Just goes to show that we made the right decision.","\n","ev",{"f()":"mood_worsen"},"out","/ev","\n",{"->":".^.^.^.g-2"},{"#f":5}]}],"g-2":["ev","str","^Walk on","/str","/ev",{"*":".^.c-5","flg":20},{"c-5":["^ ",{"->":"AlphaOver"},"\n",{"#f":5}]}]}],null],"ArrivingAtTheSword":[{"#":"CLEAR"},{"#":"SCENE: camp"},{"#":"CHAPTER: Like a Festival"},"^Finally we arrived at Budshire","ev",{"VAR?":"encountered_bandits"},true,"==","/ev",[{"->":".^.b","c":true},{"b":["^, exhausted from our fight but happy to have made it",{"->":".^.^.^.10"},null]}],"nop","^.","\n",{"->":"TryPuLlingTheSwordOut"},null],"TryPuLlingTheSwordOut":[[{"#":"SCENE: sword"},"^Do your best mate. Previous choices will dictate wether you can or not.","\n","ev","str","^Pull at the sword","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^I pulled... but nothing happened.","\n","ev","str","^Try again","/str","/ev",{"*":".^.c-1","flg":20},{"c-1":["\n",{"->":".^.^.^.g-1"},{"#f":5}]}],"g-1":["^One more try!","\n","ev",{"VAR?":"mood"},{"VAR?":"Adventurous"},"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^And suddenly I was holding it! Right there in my hand. As if it had always belonged there.","\n","ev","str","^continue","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.9"},{"c-0":["^ ",{"->":"YouBecomeKing"},"\n",{"#f":5}]}]}],[{"->":".^.b"},{"b":["\n","^But the sword was an immovable object.","\n","ev","str","^continue","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.9"},{"c-0":["^ ",{"->":"YouFailed"},"\n",{"#f":5}]}]}],"nop","\n",null]}],null],"YouBecomeKing":["^You become the king. Maybe lamet how nice it would be to not shoulder all the responsibility.","\n",{"->":"theEnd"},null],"YouFailed":["^You go home as you were. Someone else becomes king. You think about how nice it would be to be that person.","\n",{"->":"theEnd"},null],"AlphaOver":[{"#":"CHAPTER: Alpha End"},"^This concludes the Alpha.","\n","^Please do provide feedback 🙂","\n","end",null],"theEnd":["^Thank you for playing.","\n","end",null],"global decl":["ev",{"list":{"mood.Neutral":2}},{"VAR=":"mood"},false,{"VAR=":"knows_about_chris_house"},false,{"VAR=":"encountered_bandits"},"/ev","end",null]}],"listDefs":{"mood":{"Adventurous":1,"Neutral":2,"Skeptical":3}}}