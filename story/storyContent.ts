export const storyContent = ﻿{"inkVersion":20,"root":[["\n","\n",{"#":"author: Hendrik Wallbaum"},{"#":"title: InkSword"},{"->":"TheCamp"},["done",{"#n":"g-0"}],null],"done",{"can_pull_the_sword":["ev",{"VAR?":"won_against_bandits"},{"VAR?":"mood"},{"VAR?":"Rested"},"<","&&",{"VAR?":"knows_about_chris_house"},"||",{"VAR?":"mood"},{"VAR?":"Rested"},"<","&&","/ev","~ret",null],"mood_event":[{"temp=":"event"},"^>>> Mood event, initial mood: ","ev",{"VAR?":"mood"},"out","/ev","^, event: ","ev",{"VAR?":"event"},"out","/ev","\n",["ev",{"VAR?":"mood"},{"VAR?":"Adventurous"},"==",{"VAR?":"event"},"str","^sleep","/str","==","&&","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"Energetic"},"/ev",{"VAR=":"mood","re":true},{"->":".^.^.^.14"},null]}],["ev",{"VAR?":"mood"},{"VAR?":"Prudent"},"==",{"VAR?":"event"},"str","^sleep","/str","==","&&","/ev",{"->":".^.b","c":true},{"b":["\n","ev",{"VAR?":"Rested"},"/ev",{"VAR=":"mood","re":true},{"->":".^.^.^.14"},null]}],"nop","\n","^>>> New mood: ","ev",{"VAR?":"mood"},"out","/ev","\n",null],"Beginning":[[{"#":"CLEAR"},{"#":"SCENE: bonfire"},{"#":"CHAPTER: At the bonfire"},"^Mood: ","ev",{"VAR?":"mood"},"out","/ev","\n","^It was one of those evenings around the bonfire where stories gush out like water from a spring and grow into cascading streams of adventure like rivers before they reach the sea.","\n","^And now, it was Bens turn to stand up...","\n","ev","str","^listen","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"BensStory"},"\n",{"#f":5}]}],null],"BensStory":[["ev",{"VAR?":"Curious"},"/ev",{"VAR=":"mood","re":true},"^\"Once there was a sword signifying the rule over this land\" he began.","\n","^\"But soon after the king died it vanished into the realm of myth... Until one day, a mighty wizard appeared who struck it into a stone! So that it may rest there until the next true king of our great country come and find it.\"","\n","ev","str","^I listened intrigued","/str","/ev",{"*":".^.c-0","flg":20},["ev",{"^->":"BensStory.0.14.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"What nonsense\" I thought to myself.",{"->":"$r","var":true},null]}],{"c-0":["\n","ev",{"VAR?":"Adventurous"},"/ev",{"VAR=":"mood","re":true},"^I continued to listen intrigued by this story of long forgotten kings and magic.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"BensStory.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.14.s"},[{"#n":"$r2"}],"\n","ev",{"VAR?":"Prudent"},"/ev",{"VAR=":"mood","re":true},"^But I never listened to Bens stories for their credibility. It was the entertainment that bound all of us to his lips.","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^Ben continued \"rumor has it, the stone was found over in Budshire not long ago.\"","\n","^\"Some lads immediately tried pulling it out. Obviously with no success! Had to run back to their mommies, tails between their lags. And serves them right for thinking they could be king!\" He spat in the fire, making it sizzle.","\n","ev","str","^continue","/str","/ev",{"*":".^.c-2","flg":20},{"c-2":["\n",{"->":".^.^.^.g-1"},{"#f":5}]}],"g-1":["^Later that night, I went to bed,","\n","<>","^ ","ev",{"VAR?":"mood"},{"VAR?":"Adventurous"},"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^dreaming of the sword and the glory it promissed.","\n",{"->":".^.^.^.11"},null]}],[{"->":".^.b"},{"b":["\n","^knowing that a sword could never change anyones fate.","\n",{"->":".^.^.^.11"},null]}],"nop","\n","^Little did I know at this point what change Bens story would bring to my life.","\n","ev","str","^Sleep","/str","/ev",{"*":".^.c-3","flg":20},{"c-3":["^ ",{"->":"SettingOut"},"\n",{"#f":5}]}]}],null],"SettingOut":[[{"#":"CLEAR"},{"#":"SCENE: morning"},{"#":"CHAPTER: The next morning"},"ev","str","^sleep","/str",{"f()":"mood_event"},"out","/ev","\n","ev","str","^Wake up","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^Waking up hungover, as most Saturdays seemed to be, I went to meet the lads early next morning","ev",{"VAR?":"mood"},{"VAR?":"Adventurous"},"==","/ev",[{"->":".^.b","c":true},{"b":["^, still filled witht he spirit of adventure",{"->":".^.^.^.7"},null]}],"nop","^.","\n","^\"What do you make of old Bens story then lads\" I asked my friends.","\n","^Chris gave me a sceprical look, he always had been the down to earth type: \"not sure what to tell you, but those stories are fairytales, nothing else.","ev",{"VAR?":"mood"},{"VAR?":"Prudent"},"==","/ev",[{"->":".^.b","c":true},{"b":["^ I knew I could count on Chris to bring solid reasoning!",{"->":".^.^.^.19"},null]}],"nop","\n","^\"Not so sure about that\", interjected James, always the type to jump straight into action: \"to me this sounds like a grand adventure to be had!\"","ev",{"VAR?":"mood"},{"VAR?":"Adventurous"},"==","/ev",[{"->":".^.b","c":true},{"b":["^ I couldn't agree more.",{"->":".^.^.^.28"},null]}],"nop","\n","^\"Well sounds like we should go have a look, doesn't it?\" Rick had always been the one to make our small circle move into action and we all admired him for that. \"What do you think?\" he said looking my way.","\n",["ev",{"^->":"SettingOut.0.g-0.32.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"Let's do it!\"",{"->":"$r","var":true},null]}],{"c-1":["ev",{"^->":"SettingOut.0.g-0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.32.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-1"},{"#f":5}]}],"g-1":["<>","^ I said. And soon we were prepared.","\n","^There had always been two ways connecting our village to Budshire. One went straight through the forrest. A fast but dangerous road for bandits often lurked in the woods. The other took a bit longer to complete but rewarded you with quite the view, as it went over the mountain.","\n","ev","str","^We took the straight path","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^The mountain it was","/str","/ev",{"*":".^.c-3","flg":20},{"c-2":["^ ",{"->":"ForrestRoute"},"\n",{"#f":5}],"c-3":["^ ",{"->":"MountainRoute"},"\n",{"#f":5}]}]}],null],"ForrestRoute":[[{"#":"CLEAR"},{"#":"SCENE: forrest"},{"#":"CHAPTER: Into the woods"},"^The Hillwood forrest had been one of our favorite places to play in as kids.","\n","^Back then it had been a bright place full of wonders to discover and adventures to be had. But, over time, it had started to become darker and darker until it became what it is today.","\n","ev",{"VAR?":"mood"},{"VAR?":"Adventurous"},"==","/ev",[{"->":".^.b","c":true},{"b":["^ ","<>","^A trove of adventure only fit for the bravest. ",{"->":".^.^.^.14"},null]}],[{"->":".^.b"},{"b":["^ ","<>","^A dark place where shadows lurk and bandits hide.",{"->":".^.^.^.14"},null]}],"nop","\n",["ev",{"^->":"ForrestRoute.0.16.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"mood"},{"VAR?":"Adventurous"},"==","/ev",{"*":".^.^.c-0","flg":19},{"s":["^Time to take it head on!",{"->":"$r","var":true},null]}],["ev",{"^->":"ForrestRoute.0.17.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"mood"},{"VAR?":"Adventurous"},"!=","/ev",{"*":".^.^.c-1","flg":19},{"s":["^Let's hope we don't meet them.",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"ForrestRoute.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.16.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"ForrestRoute.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.17.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^And we went into the woods.","\n","ev","str","^continue","/str","/ev",{"*":".^.c-2","flg":20},{"c-2":["\n",{"->":".^.^.^.g-1"},{"#f":5}]}],"g-1":["^After walking for a while I started to wonder whether my ","ev",{"VAR?":"mood"},{"VAR?":"Adventurous"},"==","/ev",[{"->":".^.b","c":true},{"b":["^ excitement ",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["^ fears",{"->":".^.^.^.8"},null]}],"nop","^ had been for naught.","\n",{"->":"MeetBanditsInForrest"},null]}],null],"BoringForrestWalk":[["^And nothing happened for all the time that we walked through the woods. Except all of us wishfully glancing up at the mountain, there we would at least have had a good view. ","ev",{"VAR?":"mood"},{"VAR?":"Prudent"},"==","/ev",[{"->":".^.b","c":true},{"b":["^ Though secretly I was happy about my fears being unfounded.",{"->":".^.^.^.7"},null]}],"nop","\n",["ev",{"^->":"BoringForrestWalk.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Soon, we arrived ",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"BoringForrestWalk.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],{"->":"AlphaOver"},"\n",{"#f":5}]}],null],"MeetBanditsInForrest":[["^It was only when we arrived at a log barring the road that my suspiciouns arose again. That was exactly what the crimson Bandits used to do when they terrorized the Hillwoods two years again.","\n","^\"Their hideout used to be around these parts, didn't it?\" asked Rick, cautiously looking around.","\n","^\"You are right!\" said James excitedly. The whole affair two years ago had all been a great adventure to him. ","ev",{"VAR?":"mood"},{"VAR?":"Adventurous"},"==","/ev",[{"->":".^.b","c":true},{"b":["^ And I could totally see why!",{"->":".^.^.^.11"},null]}],"nop","\n","^\"What should we do?\" that was Chris, practical as ever.","\n",["ev",{"^->":"MeetBanditsInForrest.0.15.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str",{"VAR?":"mood"},{"VAR?":"Adventurous"},"==","/ev",{"*":".^.^.c-0","flg":19},{"s":["^\"Let's look for the bandits!\"",{"->":"$r","var":true},null]}],"ev","str","^I was hoping for no bandits","/str","/ev",{"*":".^.c-1","flg":20},["ev",{"^->":"MeetBanditsInForrest.0.22.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^!","/str",{"VAR?":"mood"},{"VAR?":"Prudent"},"==","/ev",{"*":".^.^.c-2","flg":23},{"s":["^\"This looks like bandits",{"->":"$r","var":true},null]}],"ev","str","^\"Probably just fell over\"","/str","/ev",{"*":".^.c-3","flg":20},{"c-0":["ev",{"^->":"MeetBanditsInForrest.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.15.s"},[{"#n":"$r2"}],"\n","^I said, eager for an adventure and started climbing over the trunk.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n","ev",{"VAR?":"Fearful"},"/ev",{"VAR=":"mood","re":true},"^\"We should move carefully from here on\" I said, looking left and right as I climed over the trunk.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-2":["ev",{"^->":"MeetBanditsInForrest.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.22.s"},[{"#n":"$r2"}],"^\", I said while cautiously climbing over the trunk.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-3":["\n","ev",{"VAR?":"Energetic"},"/ev",{"VAR=":"mood","re":true},"^\"Probably just fall over during the last storm\", I said while starting to climb over.","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^And while we were still busy crossing the obstacle it happened. Suddenly multiple, ragged looking and foul grinning thugs jumped out of the brushes. With Chris and Rick still climbing the trunk and James getting his bearing after enthusiastically jumping down, it fell to me to respond.","\n",{"->":".^.^.^.BanditEncounterFight"},null]}],{"BanditEncounterFight":[["ev",false,"/ev",{"temp=":"hasFought"},"ev","str","^We were prepared!","/str",{"VAR?":"mood"},{"VAR?":"Prudent"},"==",{"VAR?":"mood"},{"VAR?":"Fearful"},"==","||","/ev",{"*":".^.c-0","flg":21},"ev","str","^Press on","/str","/ev",{"*":".^.c-1","flg":20},["ev",{"^->":"MeetBanditsInForrest.BanditEncounterFight.0.23.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^\"We have nothing!\"",{"->":"$r","var":true},null]}],["ev",{"^->":"MeetBanditsInForrest.BanditEncounterFight.0.24.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^\"Please don't hurt us!\"",{"->":"$r","var":true},null]}],"ev","str","^Fight!","/str",{"VAR?":"mood"},{"VAR?":"Adventurous"},"==",{"VAR?":"mood"},{"VAR?":"Energetic"},"==","||","/ev",{"*":".^.c-4","flg":21},{"*":".^.c-5","flg":24},{"c-0":["\n","^Knowing this path to be trecherous we had come prepared! And my first response was a quick strike at the chap next to me who fell down screaming.","\n","^Now the boys joined in, drawing their swords, prepared for just this occasion. The forrest was filled with the sound of swords striking each other.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["^ ",{"->":".^.^.^.^.BanditEncounterWin"},"\n",{"->":".^.^.g-0"},{"#f":5}],"c-2":["ev",{"^->":"MeetBanditsInForrest.BanditEncounterFight.0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.23.s"},[{"#n":"$r2"}],"^ ","<>","^I shouted, hoping that we could talk our way out of this.","\n","^\"wuahaha, think us stupid enough to believe that now, do you?\", spat a particularly fould looking bandit. ",{"->":".^.^.^"},"\n",{"->":".^.^.g-0"},{"#f":5}],"c-3":["ev",{"^->":"MeetBanditsInForrest.BanditEncounterFight.0.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.24.s"},[{"#n":"$r2"}],"^ ","<>","^I begged for there was nothing else to do. ",{"->":".^.^.^.^.BanditsCaptureUs"},"\n",{"->":".^.^.g-0"},{"#f":5}],"c-4":["\n","ev",true,"/ev",{"temp=":"hasFought","re":true},"^There was nothing like a good fight to start your Adventure with! After all this was our tripp to become kings, some bandits weren't going to stop us.","\n","^They sure put on a good fight, I have to give them that.","\n",["ev","str","^Push on","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Fight bravely","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^We were stronger","/str","/ev",{"*":".^.c-2","flg":20},{"c-0":["^ ",{"->":".^.^.^.^.^.^.BanditEncounterWin"},"\n",{"->":".^.^.^.^.g-0"},{"#f":5}],"c-1":["^ ",{"->":".^.^.^.^.^.^.BanditEncounterWin"},"\n",{"->":".^.^.^.^.g-0"},{"#f":5}],"c-2":["^ ",{"->":".^.^.^.^.^.^.LooseToBanditsAndDie"},"\n",{"->":".^.^.^.^.g-0"},{"#f":5}]}],{"#f":5}],"c-5":["\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^Fighting was all we could do! ",{"->":".^.^.^.^.BanditEncounterWin"},"\n","ev","str","^continue","/str","/ev",{"*":".^.c-6","flg":20},{"c-6":["^ ",{"->":"AlphaOver"},"\n",{"#f":5}]}]}],null],"BanditEncounterWin":[["ev",true,"/ev",{"VAR=":"won_against_bandits","re":true},"^Soon we managed to push the bandits back into the woods where they belonged.","\n",["ev",{"^->":"MeetBanditsInForrest.BanditEncounterWin.0.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"Heureka!\"",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"MeetBanditsInForrest.BanditEncounterWin.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"^ I shouted, turning to my friends in celebration who wore ",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop","^mood == Adventurous bright ",{"->":".^.^.17"},null],"s1":["pop","^ exhaused",{"->":".^.^.17"},null],"#f":5}],"^ smiles.","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^We took a rest before moving on through the woods.","\n","ev","str","^Soon after, we arrived","/str","/ev",{"*":".^.c-1","flg":20},{"c-1":["^ ",{"->":"AlphaOver"},"\n",{"#f":5}]}]}],null],"LooseToBanditsAndDie":[["^\"We were stronger\", was the last thing I thought before a thugs dagger hit me in the back.","\n","ev","str","^continue","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^It was the last thing I ever remembered. Now only my ghost, a mere fraction of my former self remains to tell the story.","\n",{"->":"AlphaOver"},null]}],null],"BanditsCaptureUs":[["ev",{"VAR?":"Dishearted"},"/ev",{"VAR=":"mood","re":true},"^But the bandits wouldn't have any of it. They took all we had, tied us up and hurled us to their hideout.","\n","^We had last been in this place when the Crimson Bandits had been subjugated two years ago. And it looked even more run down than back then.","\n","ev","str","^continue","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^And this time we only left the place after our tormentors were sure they had really taken everythign from us, including extorting a good sum of ransom from our frineds back in the village.","\n","ev","str","^continue","/str","/ev",{"*":".^.c-1","flg":20},{"c-1":["\n",{"->":".^.^.^.g-1"},{"#f":5}]}],"g-1":["^Almost a week later we trotted back into the village square, heads held low and hearing Ben tell tales of how he had seen a yountg lad named Arthur pull the Sword out of the stone and claim the throne.","\n","^It just wasn't ment to be our adventure.","\n",{"->":"AlphaOver"},null]}],null]}],"MountainRoute":[[{"#":"CLEAR"},{"#":"SCENE: mountain"},{"#":"CHAPTER: The high ground"},"^The view from atop the mountain was spectacular, as ever! The sun was shining, and flowers bloomed on the side of the mountain.","\n","^It had been a long time since the four of us had been out like this together. \"So, Chris, how is the family?\" asked James, who really seemed to be enjoying this adventure. But much like the rest of us he hadn't managed to find a partner for the adventure of family, yet. Chris had suddenly matured two year ago when he married Lisa and their son Eithan was born not long after.","\n","^\"Ahh, you know how it is\" grinned Chris, his family being the only thing that got his spirits up. \"Eithan is still exploring the world, it's a joy to watch!\" his eyes sparkled: \"you wouldn't believe all he is looking at is a simple butterfly when you see his eyes glissening with excitement\". Eithans reported sparkle seemed to be contagious, we all looked at the world around us with renewed interest.","\n",["ev",{"^->":"MountainRoute.0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"What about Lisa, though?\"",{"->":"$r","var":true},null]}],["ev",{"^->":"MountainRoute.0.10.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-1","flg":18},{"s":["^\"You really enjoy that, huh?\"",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"MountainRoute.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"^ I inquired.","\n","ev",true,"/ev",{"VAR=":"knows_about_chris_house","re":true},"^\"You know, she is still dreaming of a bigger house. And, I am trying to save up. But with expenses for Eithan piling up... Well, let's say our priorities are currently elsewhere.\" From the smile on his face, he didn't seem to mind to much.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["ev",{"^->":"MountainRoute.0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.10.s"},[{"#n":"$r2"}],"^ I mockingly noted at Chris.","\n","^\"Being a dad?\" he replied. \"Ohh yeah, best thing to ever happen to me!\"","\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^Thus we went on in high spirits for a while.","\n","ev",{"VAR?":"mood"},{"VAR?":"Prudent"},"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^I still didn't belive in magic swords, but","\n",{"->":".^.^.^.9"},null]}],[{"->":".^.b"},{"b":["\n","^I could feel my excitement rising, as we neared our journeys goal and","\n",{"->":".^.^.^.9"},null]}],"nop","\n","<>","^ it was fun spending time with everyone.","\n","ev","str","^continue","/str","/ev",{"*":".^.c-2","flg":20},{"c-2":["\n",{"->":".^.^.^.g-1"},{"#f":5}]}],"g-1":["^As we moved on, the forrest came into view. From above it looked not much different from a meadow. One, giant sea of green moving back and forth to the rythm of the wind.","\n","^\"Uhh, whats that?\" shouted James pointing at a glade in the forrest \"looks like the old bandit hideout has new residents!\" And in deed there was smoke rising up from the cave you had to know was there. But it had been the hideout of the Crimson Bandits a notorious group of thiefs only two years ago and all of us knew that only too well!","\n","^\"Best we let old Ben know once we get back, so they can do something about that\" Suggested Rick.","\n",["ev",{"^->":"MountainRoute.0.g-1.6.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^Looks like me missed that adventure",{"->":"$r","var":true},null]}],["ev",{"^->":"MountainRoute.0.g-1.7.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^I was glad we didn't go that way",{"->":"$r","var":true},null]}],{"c-3":["ev",{"^->":"MountainRoute.0.g-1.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.6.s"},[{"#n":"$r2"}],"^. It would for sure have been a grand fight.","\n","ev",{"VAR?":"Adventurous"},"/ev",{"VAR=":"mood","re":true},{"->":".^.^.^.g-2"},{"#f":5}],"c-4":["ev",{"^->":"MountainRoute.0.g-1.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.7.s"},[{"#n":"$r2"}],"^. Just goes to show that we made the right decision.","\n","ev",{"VAR?":"Prudent"},"/ev",{"VAR=":"mood","re":true},{"->":".^.^.^.g-2"},{"#f":5}]}],"g-2":["ev","str","^Walk on","/str","/ev",{"*":".^.c-5","flg":20},{"c-5":["^ ",{"->":"AlphaOver"},"\n",{"#f":5}]}]}],null],"AlphaOver":[{"#":"CHAPTER: Alpha End"},"^This concludes the Alpha.","\n","^Please do provide feedback 🙂","\n","end",null],"theEnd":["end",null],"TheCamp":[[{"#":"CLEAR"},{"#":"SCENE: camp"},{"#":"CHAPTER: Like a Festival"},"ev",false,"/ev",{"VAR=":"won_against_bandits","re":true},"ev",{"VAR?":"won_against_bandits"},"/ev",{"VAR=":"has_money","re":true},"^Finally we arrived at Budshire","ev",{"VAR?":"won_against_bandits"},true,"==","/ev",[{"->":".^.b","c":true},{"b":["^, exhausted from our fight but happy to have made it",{"->":".^.^.^.18"},null]}],"nop","^.","\n","ev","str","^Look around","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^A big camp had sprawled up, houndreds of tents and busting people filled the wide meadow. Looking over the sea of tents we could see the sword glistening on a small hill. It looked like it was only waiting for someone to reach for the stars together with.","\n","^\"Let's go straight for the sword!\" exclaimed James, excited as ever.","\n","^\"Ha, good luck with that one\" laughed a man emerging from one of the nearest tents. \"By now the local Sherif setup an 'orderly process' for all the adventorous folk trying to have a go at it. Of cause that involves getting in line and paying a fee if you want a try\".","\n","^\"Money hungry bastard\" he spat on the ground.","\n","^We looked at each other","ev",{"VAR?":"won_against_bandits"},true,"==","/ev",[{"->":".^.b","c":true},{"b":["^ grinning brightly",{"->":".^.^.^.15"},null]}],"nop","^.","\n","ev",{"VAR?":"won_against_bandits"},true,"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^Good thing that we had beaten those bandits on our way here. Their remains hat yielded a good amount of money. Looks like we wouldn't have trouble for now.","\n","ev","str","^continue","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.25"},{"c-0":[{"->":"TheCamp.CampOverview"},"\n",{"#f":5}]}]}],[{"->":".^.b"},{"b":["\n",{"->":"TheCamp.noCash"},{"->":".^.^.^.25"},null]}],"nop","\n",null]}],{"noCash":[[["ev",{"^->":"TheCamp.noCash.0.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^\"I didn't bring much cash\"",{"->":"$r","var":true},null]}],"ev","str","^I stayed silent","/str","/ev",{"*":".^.c-1","flg":20},{"c-0":["ev",{"^->":"TheCamp.noCash.0.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"^ I said. And by the looks in their faces, neither did they.","\n",{"->":".^.^.g-0"},{"#f":5}],"c-1":["\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^After a long moment Rick spoke \"There's gotta' be a way to get us a chance. There just gotta' be!\"","\n","^We all nodded in agreement.","\n",{"->":"TheCamp.CampOverview"},null]}],null],"CampOverview":[[{"#":"SCENE: camp"},"^Looking around the camp there seemed to be a couple of options",["ev","visit",1,"MIN","/ev","ev","du",0,"==","/ev",{"->":".^.s0","c":true},"ev","du",1,"==","/ev",{"->":".^.s1","c":true},"nop",{"s0":["pop",{"->":".^.^.17"},null],"s1":["pop","^ still open",{"->":".^.^.17"},null],"#f":5}],"^.","\n","ev","str","^A fortune teller","/str","/ev",{"*":".^.c-0","flg":20},"ev","str","^Some folk playing dice","/str","/ev",{"*":".^.c-1","flg":20},"ev","str","^Explore the camp further","/str","/ev",{"*":".^.c-2","flg":20},"ev","str","^A makeshift tavern","/str",{"VAR?":"can_visit_tavern"},"/ev",{"*":".^.c-3","flg":21},"ev","str","^The Sword","/str","/ev",{"*":".^.c-4","flg":4},{"c-0":["^ ",{"->":"TheCamp.FortuneTeller"},"\n",{"#f":5}],"c-1":["^ ",{"->":"TheCamp.DiceGame"},"\n",{"#f":5}],"c-2":["^ ",{"->":"TheCamp.CampExploration"},"\n",{"#f":5}],"c-3":["^ ",{"->":"TheCamp.CampTavern"},"\n",{"#f":5}],"c-4":["^ ",{"->":"AtTheSword"},"\n",null]}],null],"FortuneTeller":[[{"#":"SECTION: The fortune teller"},{"#":"SCENE: fortune"},"^Fog drifts out of the round, purple tent right at the camps edge. Big letters above the entrance read: \"Madame Lyzette - fortune telling\".","\n","ev","str","^continue","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":[["ev",{"VAR?":"mood"},{"VAR?":"Rested"},"<=","/ev",{"->":".^.b","c":true},{"b":["\n","^\"Looks promissing, aye?\" was Ricks comment, as he pushed us through the curtain.","\n",{"->":".^.^.^.2"},null]}],[{"->":".^.b"},{"b":["\n","^\"Not sure if that kind of place can be trusted,\" note Chris, as James was already pushing us through the curtain.","\n",{"->":".^.^.^.2"},null]}],"nop","\n","^Insight the tent the fog turned into thick smoke, rising from counteless incense sticks around the room. They filled the air with a thousand smells of exotic herbs, deep forrests and cozy cottages. It made me want to stay here.","\n","^\"Hello dears\", said a smokey voice from teh shadows, \"how can I help you?\"","\n",["ev",{"^->":"TheCamp.FortuneTeller.0.g-0.8.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^!\"","/str","/ev",{"*":".^.^.c-1","flg":22},{"s":["^\"Sorry, wrong tent",{"->":"$r","var":true},null]}],["ev",{"^->":"TheCamp.FortuneTeller.0.g-0.9.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-2","flg":18},{"s":["^\"Madam Lyzette?\"",{"->":"$r","var":true},null]}],{"c-1":["ev",{"^->":"TheCamp.FortuneTeller.0.g-0.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.8.s"},[{"#n":"$r2"}],"^,\" was all I could think off, eager to leave this place.","\n",["ev","str","^continue","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["^ ",{"->":"TheCamp.CampOverview"},"\n",{"->":".^.^.^.^.^.g-1"},{"#f":5}]}],{"#f":5}],"c-2":["ev",{"^->":"TheCamp.FortuneTeller.0.g-0.c-2.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.9.s"},[{"#n":"$r2"}],"\n","^I asked cautiously.","\n",{"->":".^.^.^.g-1"},{"#f":5}]}],"g-1":["^\"The very same,\" she replied.","\n","^\"Come, have a seat and let me gaze into your future.\"","\n",["ev",{"^->":"TheCamp.FortuneTeller.0.g-1.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-3","flg":18},{"s":["^I sat down.",{"->":"$r","var":true},null]}],["ev",{"^->":"TheCamp.FortuneTeller.0.g-1.5.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-4","flg":18},{"s":["^\"I am not here for that!\"",{"->":"$r","var":true},null]}],{"c-3":["ev",{"^->":"TheCamp.FortuneTeller.0.g-1.c-3.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.g-2"},{"#f":5}],"c-4":["ev",{"^->":"TheCamp.FortuneTeller.0.g-1.c-4.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.5.s"},[{"#n":"$r2"}],"\n","^\"Ohh, aren't you?\" She asked. \"But I am sure that you can discover more about yourself by listening to what I have to say.\"","\n",[["ev",{"^->":"TheCamp.FortuneTeller.0.g-1.c-4.9.0.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","/ev",{"*":".^.^.c-0","flg":18},{"s":["^Intrigued, I sat down.",{"->":"$r","var":true},null]}],["ev",{"^->":"TheCamp.FortuneTeller.0.g-1.c-4.9.1.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^\"","/str","/ev",{"*":".^.^.c-1","flg":22},{"s":["^\"No, I don't think so",{"->":"$r","var":true},null]}],{"c-0":["ev",{"^->":"TheCamp.FortuneTeller.0.g-1.c-4.9.c-0.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.0.s"},[{"#n":"$r2"}],"\n",{"->":".^.^.^.^.^.g-2"},{"#f":5}],"c-1":["ev",{"^->":"TheCamp.FortuneTeller.0.g-1.c-4.9.c-1.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.1.s"},[{"#n":"$r2"}],"^,\" I said and left her tent. ",{"->":"TheCamp.CampOverview"},"\n",{"->":".^.^.^.^.^.g-2"},{"#f":5}]}],{"#f":5}]}],"g-2":["^She looked at me over her crystal ball and frowned. \"The ball reveals all there is to see, my dearest.\"","\n","^\"And your fate is particularly facettet!\"","\n",["ev",{"^->":"TheCamp.FortuneTeller.0.g-2.4.$r1"},{"temp=":"$r"},"str",{"->":".^.s"},[{"#n":"$r1"}],"/str","str","^.","/str","/ev",{"*":".^.^.c-5","flg":22},{"s":["^I leaned forwrad",{"->":"$r","var":true},null]}],{"c-5":["ev",{"^->":"TheCamp.FortuneTeller.0.g-2.c-5.$r2"},"/ev",{"temp=":"$r"},{"->":".^.^.4.s"},[{"#n":"$r2"}],"^, intent on catching her every word.","\n",{"->":".^.^.^.g-3"},{"#f":5}]}],"g-3":[["ev",{"f()":"can_pull_the_sword"},"/ev",{"->":".^.b","c":true},{"b":["\n","^\"As you are right now, all doors are open to you!\" She said in a hushed voice, \"but that can change, it might be best to not waste the opportunity you are given.\"","\n",{"->":".^.^.^.2"},null]}],[{"->":".^.b"},{"b":["\n",{"->":"TheCamp.DarkFortune"},{"->":".^.^.^.2"},null]}],"nop","\n",null]}],null],"DarkFortune":[["^\"Your fate is interesting, but you are yet far from realizing your dream!\"","\n","^\"In fact,\" she continued, \"there might never be a chance to make them real.\"","\n","ev","str","^continue","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^I sat there, stunned by her refelation, as she finally gave some advice.","\n",["ev",{"VAR?":"won_against_bandits"},{"VAR?":"knows_about_chris_house"},"||",{"VAR?":"mood"},{"VAR?":"Rested"},">","&&","/ev",{"->":".^.b","c":true},{"b":["\n","^\"Your path should lead you, where every weary traveller goes.\" She said and then prophecised, \"often in live it is more about our spirit than anything else.\"","\n",{"->":".^.^.^.4"},null]}],[{"->":".^.b"},{"b":["\n","^\"Your mind is, where it should be!\" She started.","\n",{"->":".^.^.^.4"},null]}],"nop","\n",["ev",{"VAR?":"won_against_bandits"},"!",{"VAR?":"knows_about_chris_house"},"!","&&","/ev",{"->":".^.b","c":true},{"b":["\n","^\"What keeps you from growing, is your lack of the unknown,\" she continued. \"Try finding it first.\"","\n",{"->":".^.^.^.8"},null]}],[{"->":".^.b"},{"b":["\n","^\"Your life so far lives up to your ambitions,\" she continued.","\n",{"->":".^.^.^.8"},null]}],"nop","\n",["ev",{"VAR?":"has_money"},"!","/ev",{"->":".^.b","c":true},{"b":["\n","^\"And finally,\" she concluded, \"you lack in it, that makes the world turn. But fear not, for the reckless will always find it.\"","\n",{"->":".^.^.^.12"},null]}],[{"->":".^.b"},{"b":["\n","^\"At least it doesn't look like you need to worry about money,\" she finished.","\n",{"->":".^.^.^.12"},null]}],"nop","\n","ev","str","^continue","/str","/ev",{"*":".^.c-1","flg":20},{"c-1":["\n",{"->":".^.^.^.g-1"},{"#f":5}]}],"g-1":["^\"And now, out of my shop! There are more customers waiting.\"","\n","^With that, she shued us out of her tent.","\n","ev","str","^We left","/str","/ev",{"*":".^.c-2","flg":20},{"c-2":["^ ",{"->":"TheCamp.CampOverview"},"\n","end",{"#f":5}]}]}],null],"CampExploration":["end",null],"CampTavern":[{"#":"SECTION: The Drunken Hilt"},"end",null],"DiceGame":[{"#":"SECTION: All or nothing"},"^You can play for money. The players actions will ultimately decide whether they succeed.","\n","end",null]}],"AtTheSword":[[{"#":"SCENE: sword"},"^Do your best mate. Previous choices will dictate wether you can or not.","\n","ev","str","^Pull at the sword","/str","/ev",{"*":".^.c-0","flg":20},{"c-0":["\n",{"->":".^.^.g-0"},{"#f":5}],"g-0":["^I pulled... but nothing happened.","\n","ev","str","^Try again","/str","/ev",{"*":".^.c-1","flg":20},{"c-1":["\n",{"->":".^.^.^.g-1"},{"#f":5}]}],"g-1":["^One more try!","\n","ev",{"VAR?":"mood"},{"VAR?":"Adventurous"},"==","/ev",[{"->":".^.b","c":true},{"b":["\n","^And suddenly I was holding it! Right there in my hand. As if it had always belonged there.","\n","ev","str","^continue","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.9"},{"c-0":["^ ",{"->":"YouBecomeKing"},"\n",{"#f":5}]}]}],[{"->":".^.b"},{"b":["\n","^But the sword was an immovable object.","\n","ev","str","^continue","/str","/ev",{"*":".^.c-0","flg":20},{"->":".^.^.^.9"},{"c-0":["^ ",{"->":"YouFailed"},"\n",{"#f":5}]}]}],"nop","\n",null]}],null],"YouBecomeKing":["^You become the king. Maybe lamet how nice it would be to not shoulder all the responsibility.","\n",{"->":"theEnd"},null],"YouFailed":["^You go home as you were. Someone else becomes king. You think about how nice it would be to be that person.","\n",{"->":"theEnd"},null],"global decl":["ev",{"list":{},"origins":["mood"]},{"VAR=":"mood"},false,{"VAR=":"knows_about_chris_house"},false,{"VAR=":"won_against_bandits"},false,{"VAR=":"has_money"},false,{"VAR=":"can_visit_tavern"},"/ev","end",null]}],"listDefs":{"mood":{"Adventurous":1,"Curious":2,"Energetic":3,"Chearful":4,"Rested":5,"Prudent":6,"Fearful":7,"Dishearted":8}}}