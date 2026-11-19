// Tests for orders.js. Run them with: npm test
// Each test calls one of your functions with the day's orders from orders.json (or a small list of its own) and
// checks what comes back. loadOrders is handed a pretend reader, so no file is read.
// You don't need to change this file.
import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { dayTotal, fromJson, loadOrders, ordersFor, receiptLines, toJson } from "./orders.js";

const ordersText = readFileSync(new URL("./orders.json", import.meta.url), "utf8");
const orders = JSON.parse(ordersText);
const order = (id) => orders.find((o) => o.id === id);

test("1) dayTotal(orders) returns 97.75, the six orders' quantity times price added up", () => {
  const total = dayTotal(orders);
  assert.equal(total, 97.75, `dayTotal(orders) should return 97.75, but it returned ${total}.`);
});

test("2) dayTotal([]) returns 0: no orders, nothing earned", () => {
  const total = dayTotal([]);
  assert.equal(total, 0, `dayTotal([]) should return 0, but it returned ${total}. Does reduce have a starting value?`);
});

test('3) ordersFor(orders, "Spicy Peanut Noodles") returns orders 1 and 4, Maya\'s and Sam\'s', () => {
  const found = ordersFor(orders, "Spicy Peanut Noodles");
  assert.deepEqual(found, [order(1), order(4)],
    `It should return an array of orders 1 and 4, but it returned ${JSON.stringify(found)}.`);
});

test('4) ordersFor(orders, "Tofu Bowl") returns [], an empty array', () => {
  const found = ordersFor(orders, "Tofu Bowl");
  assert.deepEqual(found, [], `No order is for a Tofu Bowl, so it should return [], but it returned ${JSON.stringify(found)}.`);
});

test('5) receiptLines(orders) returns six lines, the first "#1 Maya: 2 x Spicy Peanut Noodles = $19.00"', () => {
  const lines = receiptLines(orders);
  assert.deepEqual(lines, [
    "#1 Maya: 2 x Spicy Peanut Noodles = $19.00",
    "#2 Jordan: 1 x Garlic Ramen = $11.00",
    "#3 Priya: 3 x Pork Dumplings = $18.75",
    "#4 Sam: 1 x Spicy Peanut Noodles = $9.50",
    "#5 Lena: 2 x Veggie Lo Mein = $17.50",
    "#6 Omar: 2 x Garlic Ramen = $22.00",
  ], `The lines should match the six shown here, but it returned ${JSON.stringify(lines)}.`);
});

test('6) toJson([order 2]) returns \'[{"id":2,"customer":"Jordan","dish":"Garlic Ramen","quantity":1,"price":11}]\'', () => {
  const text = toJson([order(2)]);
  assert.equal(text, '[{"id":2,"customer":"Jordan","dish":"Garlic Ramen","quantity":1,"price":11}]',
    `It should return JSON text with no spaces, but it returned ${JSON.stringify(text)}.`);
});

test('7) fromJson(\'[{"id":2,...}]\') returns order 2 as data, inside an array', () => {
  const data = fromJson('[{"id":2,"customer":"Jordan","dish":"Garlic Ramen","quantity":1,"price":11}]');
  assert.deepEqual(data, [order(2)], `It should return [order 2] as data, but it returned ${JSON.stringify(data)}.`);
});

test("8) fromJson(toJson(orders)) gives back all six orders, the same as before", () => {
  const roundTrip = fromJson(toJson(orders));
  assert.deepEqual(roundTrip, orders, "Turning the orders into JSON and back should give the same six orders.");
});

test("9) loadOrders(reader) resolves to the six orders when the reader gives orders.json's text", async () => {
  const reader = async () => ordersText;
  const loaded = await loadOrders(reader);
  assert.deepEqual(loaded, orders,
    `It should resolve to the six orders, but it resolved to ${JSON.stringify(loaded)}. Does it await the reader?`);
});

test("10) loadOrders(reader) resolves to [] when the reader gives the text \"[]\"", async () => {
  const loaded = await loadOrders(async () => "[]");
  assert.deepEqual(loaded, [], `It should resolve to [], but it resolved to ${JSON.stringify(loaded)}.`);
});

test('11) loadOrders(reader) rejects with "The orders file isn\'t valid JSON." when the reader gives "Maya: 2 noodles"', async () => {
  await assert.rejects(loadOrders(async () => "Maya: 2 noodles"),
    { message: "The orders file isn't valid JSON." },
    "It should throw an Error with the message \"The orders file isn't valid JSON.\"");
});
