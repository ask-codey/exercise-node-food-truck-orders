# Exercise: Food Truck Orders

Exercise code for the lesson **Exercise: Food Truck Orders** in the Node.js in Depth course on [ask-codey.com](https://www.ask-codey.com).

The Rolling Noodle, a food truck, keeps each day's orders as a JSON file, and its owner wants a program that sums up the day. You'll finish the functions in `orders.js` with the JavaScript Node code leans on: the day's total with reduce, the orders for one dish with filter, receipt lines with map and destructuring, JSON in both directions, and an async loader that waits for the file's text and gives a clear error when it isn't valid JSON. Tests check every function.

## What's here

- `orders.js`: the six functions, for you to finish. For now each one throws an error that says it isn't built yet. The comment at the top says what each should return, with examples.
- `orders.json`: the day's six orders. Each has an `id`, a `customer`, a `dish`, a `quantity` and a `price` (one dish's price, in dollars). Ready to use.
- `main.js`: reads `orders.json` with your `loadOrders`, then prints a receipt line for every order, how many orders were for Spicy Peanut Noodles, and the day's total. Ready to use.
- `orders.test.js`: tests that call each of your functions and check what comes back. You don't need to change this file.
- `package.json` and `package-lock.json`: the project's settings and its scripts (`start`, `dev` and `test`). The exercise uses no packages, only what comes with Node. Ready to use.

## Before you start

There's nothing to install: the tests use Node's own test runner. (`npm install` is safe to run, and has nothing to add.)

## Run it

```bash
npm start
```

Until `orders.js` is finished, it stops with an error that says *Not built yet: loadOrders*. When every function works, it prints the day's receipt lines and its total. `npm run dev` runs it with `node --watch`, so it runs again each time you save; stop it with **Ctrl+C**.

## Check your work

```bash
npm test
```

At first every test fails: that is expected. Each function you finish turns its tests green. A failing test's message says what it expected and what came back, for example *dayTotal(orders) should return 97.75, but it returned 0.*

## The rules

- Finish the six functions in `orders.js`, keeping their names and their `export`: `main.js` and the tests import them by name.
- Write each one as a function declaration or an arrow function, whichever you like.
- Don't change `orders.json`: the tests compare your answers with it.
- `loadOrders` reads nothing itself: it calls the function it's handed (`readText`), awaits the text, and turns it into data.

## Tips

- One order's cost is its `quantity` times its `price`. Work out order 1 by hand first: 2 times 9.5 is 19.
- `reduce` needs a starting value, `0`, or `dayTotal([])` has nothing to start from.
- Destructuring in a parameter, such as `({ id, customer }) => ...`, unpacks each order as map hands it over.
- `(18.75).toFixed(2)` gives the text `"18.75"`, and `(19).toFixed(2)` gives `"19.00"`: two decimal places, always.
- `JSON.parse` throws when the text isn't valid JSON. Catch that error and throw your own, with the message the comment gives.

## Hand it in

When it works, push your solution to a public repo of your own on GitHub, then paste that repo's address into **Submit your exercise** on the lesson page at [ask-codey.com](https://www.ask-codey.com). That's what completes the lesson. The lesson page shows the Git commands, step by step.
