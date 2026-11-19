// The Rolling Noodle's order functions. For you to finish.
//
// An order is an object such as { id: 1, customer: "Maya", dish: "Spicy Peanut Noodles", quantity: 2, price: 9.5 }.
// price is the price of one dish in dollars, so an order costs its quantity times its price. orders.json holds the
// day's six orders, and the examples below use them.
//
//   dayTotal(orders)                            97.75: each order's quantity times its price, all added up
//   dayTotal([])                                0: no orders, nothing earned
//   ordersFor(orders, "Spicy Peanut Noodles")   an array of orders 1 and 4, Maya's and Sam's, in that order
//   ordersFor(orders, "Tofu Bowl")              [], an empty array: no order is for that dish
//   receiptLines(orders)                        an array with one line of text for each order, in the same order:
//                                                 "#1 Maya: 2 x Spicy Peanut Noodles = $19.00"
//                                               the order's id, customer, quantity, dish, and its cost (quantity
//                                               times price) with two decimal places
//   toJson(orders)                              the orders as JSON text with no spaces or line breaks. For an array
//                                               holding order 2 alone, it returns
//                                                 '[{"id":2,"customer":"Jordan","dish":"Garlic Ramen","quantity":1,"price":11}]'
//   fromJson(text)                              the orders back as data, from JSON text like that: for the text
//                                               above, an array holding order 2
//   loadOrders(readText)                        an async function. readText is a function that gives back a promise
//                                               of the orders file's text. loadOrders awaits it and returns the
//                                               orders as data: the six orders for orders.json's text, and [] for
//                                               the text "[]". When the text isn't valid JSON, such as
//                                               "Maya: 2 noodles", it throws an Error with the message
//                                               "The orders file isn't valid JSON."
//
// Write each one as a function declaration or an arrow function, whichever you like: the tests only call them.
// For now, every function throws an error that says it isn't built yet.

export function dayTotal(orders) {
  throw new Error("Not built yet: dayTotal");
}

export function ordersFor(orders, dish) {
  throw new Error("Not built yet: ordersFor");
}

export function receiptLines(orders) {
  throw new Error("Not built yet: receiptLines");
}

export function toJson(orders) {
  throw new Error("Not built yet: toJson");
}

export function fromJson(text) {
  throw new Error("Not built yet: fromJson");
}

export async function loadOrders(readText) {
  throw new Error("Not built yet: loadOrders");
}
