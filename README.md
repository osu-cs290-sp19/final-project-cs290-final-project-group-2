# CS 290 Final Project - KTANE Defuser

## This website provides helper modules for the popular game [Keep Talking and Nobody Explodes.](https://keeptalkinggame.com/)
The basic idea of the game is that there is bomb that needs to be defused by a team of "Experts" by completing all the modules present on the bomb. A module is essentially a small puzzle which only has one correct answer. Experts can reference the "[Bomb Manual](http://www.bombmanual.com/)" for the game to learn how to solve each module. This website simplifies that task by using client-side Javascript to quickly process logic necessary for completing a module. In addition to helping a user solve modules, the website also records basic statistics about the user's previously defused bombs, which can be found on the Stats page.

## General steps for using the website:
1. Login with a username. This can be a new user or one that has been logged in previously.
2. Select a level from one of the section menus on the homepage and click Solve!
3. Enter the general information (found in game) about the bomb and click Enter
4. Pick any module you want help with and enter the relevant information to get the solution.
5. At any time while defusing a bomb, you can add strikes to the counter, edit the bomb info, or press Solved when finished. Pressing Solved will record your stats for that level to the database, and send you to the homepage to solve another level.

## Steps for getting the website running:
1. After cloning the repo type ```npm install```
2. Setup environment variables by editing the mongoEnv file, then run ```. ./mongoEnv```
3. Run ```npm run start``` to start the server.

### For grading purposes:
Joseph Andrews and [GAndrews98](https://github.com/GAndrews98) are the same person  
Ryan Russell and [russelry](https://github.com/russelry) are the same person  
Alexander Rash and [AERash](https://github.com/AERash) are the same person  
