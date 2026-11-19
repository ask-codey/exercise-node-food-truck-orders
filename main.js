// Prints the Rolling Noodle's day: a receipt line for every order, how many orders were for Spicy Peanut Noodles,
// and the day's total. It reads orders.json through loadOrders, then uses your other functions from orders.js.
// Run it with: npm start (or npm run dev, which runs it again each time you save). Until orders.js is finished,
// it stops with an error that says "Not built yet".
// Ready to use: you don't need to change this file.
import { readFile } from "node:fs/promises";
import { dayTotal, loadOrders, ordersFor, receiptLines } from "./orders.js";

// readFile reads a file's text (Reading and Writing Files explains it). loadOrders is handed this reader and calls it.
const orders = await loadOrders(() => readFile("orders.json", "utf8"));

console.log("The Rolling Noodle: today's orders");
for (const line of receiptLines(orders)) {
  console.log(line);
}
console.log(`Spicy Peanut Noodles orders: ${ordersFor(orders, "Spicy Peanut Noodles").length}`);
console.log(`Day total: $${dayTotal(orders).toFixed(2)}`);
