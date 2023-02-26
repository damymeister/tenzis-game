## Tenzi Game
This is a simple web-based implementation of the popular dice game Tenzi. It allows players to roll up to 10 dice at a time and tries 
to get all the dice to show the same number as fast as possible. 
This project was created using React and is intended as a example of how to use useState and useEffect hooks in a real-world project.

## How to Play
Open your browser and navigate to https://damymeister.github.io/tenzis-game/.
Click the "Roll" button to roll the dice.
Keep rolling until you get all the dice to show the same number. After you have done it, "react-confetti" will show up to your screen!

## How it Works
The game logic is implemented in the Game component in src/App.js. This component uses the useState hook to maintain the current state of the game, including the number of dice, the current roll values, and whether the game has been won. It also uses the useEffect hook to update the game state whenever the user clicks the "Roll" button.

The Die component in src/components/Die.js is responsible for rendering individual dice. It receives the current roll value as a prop and uses a dots in array to render the appropriate number of dots for each value.

## Contributions

This project was created as a learning exercise but some of functionalities will be improved soon. 

## Updates

Update 1.1 - Timer that measures the game time and storing the best time in localStorage were added.
