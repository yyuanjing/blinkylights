# Pre-work - *Memory Game*

**Memory Game** is a Light & Sound Memory game to apply for CodePath's SITE Program. 

Submitted by: Yuanjing Yuan

Time spent: 1.5 hours spent in total

Link to project: https://glitch.com/embed/#!/magical-amplified-azimuth?path=script.js%3A1%3A0

## Required Functionality

The following **required** functionality is complete:

* [ ] Game interface has a heading (h1 tag), a line of body text (p tag), and four buttons that match the demo app
* [ ] "Start" button toggles between "Start" and "Stop" when clicked. 
* [ ] Game buttons each light up and play a sound when clicked. 
* [ ] Computer plays back sequence of clues including sound and visual cue for each button
* [ ] Play progresses to the next turn (the user gets the next step in the pattern) after a correct guess. 
* [ ] User wins the game after guessing a complete pattern
* [ ] User loses the game after an incorrect guess

The following **optional** features are implemented:

* [ ] Any HTML page elements (including game buttons) has been styled differently than in the tutorial
* [ ] Buttons use a pitch (frequency) other than the ones in the tutorial
* [ ] More than 4 functional game buttons
* [ ] Playback speeds up on each turn
* [ ] Computer picks a different pattern each time the game is played
* [ ] Player only loses after 3 mistakes (instead of on the first mistake)
* [ ] Game button appearance change goes beyond color (e.g. add an image)
* [ ] Game button sound is more complex than a single tone (e.g. an audio file, a chord, a sequence of multiple tones)
* [ ] User has a limited amount of time to enter their guess on each turn

The following **additional** features are implemented:

- [ ] List anything else that you can get done to improve the app!

## Video Walkthrough (GIF)

Here's a walkthrough of implemented user stories:
This first GIF shows the game being started and stopped using the button features.

![](https://i.imgur.com/LeI3M9B.gif)

The user's 3 stikes can be observed below. Because each game's pattern is random, a new pattern than the one in the first GIF is used.

![](https://i.imgur.com/93iGUr4.gif)

This last GIF shows the user winning the game. A little "win sequence" can be seen, as well as the increased speed of the last round, as the speed in which the pattern plays increases each round.

![](https://i.imgur.com/8FKzMd7.gif)

## Reflection Questions
1. If you used any outside resources to help complete your submission (websites, books, people, etc) list them here. 

https://www.w3schools.com/colors/colors_picker.asp was used to find a new color for the app's background.

2. What was a challenge you encountered in creating this submission (be specific)? How did you overcome it? (recommended 200 - 400 words) 

Implementing the 3 strikes function was the trickiest part in creating this submission. At first, I had only added a "strike" variable which would be increased in guess() each time the player's guess was incorrect, and once strike was equal to 3, I called loseGame(). While I added an alert that would prompt the user to try again, I forgot to set guessCounter to 0. This caused me to keep getting more strikes after I tried to click the correct pattern, as I thought I was supposed to start that round's sequence over from the beginning but had forgotten to restart the guessCounter. To overcome this issue, I thoroughly went through my code to see what each line did to find which element I was missing. Additionally, I also faced some small issues like forgetting to set strike to 0 during the beginning of each new game. 

Another challenge I faced was making the pattern play faster as the rounds went on. I didn't reset clueHoldTime and cluePauseTime after the end of each game the first time I implemented this feature, and I also forgot to change the delay times for the "win sequence." I wanted each button to be lit when the user won the game, but I found that since the clueHoldTime and cluePauseTime values decreased even after the final pattern is played, the win sequence was played too quickly, and the user couldn't see the last two buttons playing. Thus, I changed the delay times in playWinSequence() to constants.  

3. What questions about web development do you have after completing your submission? (recommended 100 - 300 words) 

Creating this submission gave me an introduction to web development, and I think it's incredibly interesting how so many aspects of a game, like the simple one I created, are features that players wouldn't usually think of. I'm curious about other logical functions that must be implemented in different apps. I was also thinking of the running time of my code while I was working on this submission, and I want to learn how web developers optimize runtime and about which functions must be prioritized for optimal running times for a better user experience. 


4. If you had a few more hours to work on this project, what would you spend them doing (for example: refactoring certain functions, adding additional features, etc). Be specific. (recommended 100 - 300 words) 

I would add the ticking clock feature. I attempted this addition but unfortunately ran out of time to figure it out completely. My main issue was resetting the clock at the appropriate times. I used clearInterval() at the start of each new game and sequence run, as I believed the clock should restart each time the player gets through a round or starts a new game. However, I kept running into issues where I would stop the game but the timer wouldn't stop, or the timer would run throughout multiple rounds. With a few more hours, I would work on going through the logic of starting and stopping the timer in relation to the game to figure out why I was running into the issues I faced. 



## Interview Recording URL Link

[My 5-minute Interview Recording] https://www.kapwing.com/videos/6263569e6b400d00a566c45d


## License

    Copyright Yuanjing Yuan

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
