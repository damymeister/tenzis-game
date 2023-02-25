## Tenzi Game
This is a simple web-based implementation of the popular dice game Tenzi. It allows players to roll up to 10 dice at a time and tries to get all the dice to show the same number as fast as possible. This project was created using React and is intended as a simple example of how to use useState and useEffect hooks in a real-world project.

#How to Play
Clone the repository and navigate to the project directory in your terminal.
Run npm install to install all dependencies.
Run npm start to start the development server.
Open your browser and navigate to http://localhost:3000/.
Click the "Roll" button to roll the dice.
Keep rolling until you get all the dice to show the same number.
How it Works
The game logic is implemented in the Game component in src/components/Game.js. This component uses the useState hook to maintain the current state of the game, including the number of dice, the current roll values, and whether the game has been won. It also uses the useEffect hook to update the game state whenever the user clicks the "Roll" button.

The Dice component in src/components/Dice.js is responsible for rendering individual dice. It receives the current roll value as a prop and uses a switch statement to render the appropriate SVG image for each value.

#Contributions
This project was created as a learning exercise and is not currently seeking contributions. However, if you notice any bugs or have any suggestions for improvements, feel free to open an issue or pull request on the repository.

#License
This project is licensed under the MIT License. See LICENSE for more information.
