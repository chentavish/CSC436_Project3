# Pokémon Size Compare

A React app for seeing how you'd measure up next to a Pokémon. Create your trainer, enter your height, and pick any of the original 151 Pokémon to see the two of you side by side at real scale.

Live site: 

## Features

- **Create your character:** choose a male or female trainer and enter your height in feet and inches.
- **Size comparison:** your trainer and the Pokémon are drawn to scale, with both heights listed above them.
- **Search:** filter the Pokémon list by name as you type.
- **Pokédex info:** each Pokémon shows its number, type and weight.
- **Loading and error states:** a spinner shows while data loads, and if a request fails you get a message with a Try again button.

## Run it locally

You'll need Node.js installed.

```bash
git clone https://github.com/chentavish/CSC436_Project3
cd CSC436_Project3
npm install
npm run dev
```

Then open http://localhost:5173.

## Built with

React and Vite, with data from [PokéAPI](https://pokeapi.co/). Deployed on Netlify.
