var denom = [{
  name: 'ONE HUNDRED',
  val: 100.00
},
{
  name: 'TWENTY',
  val: 20.00
},
{
  name: 'TEN',
  val: 10.00
},
{
  name: 'FIVE',
  val: 5.00
},
{
  name: 'ONE',
  val: 1.00
},
{
  name: 'QUARTER',
  val: 0.25
},
{
  name: 'DIME',
  val: 0.10
},
{
  name: 'NICKEL',
  val: 0.05
},
{
  name: 'PENNY',
  val: 0.01
}
]

function checkCashRegister (price, cash, cid) {
  var change = cash - price

  // Here is your change, ma'am.
  return change
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(3.26, 10.00, [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.10],
  ['QUARTER', 4.25],
  ['ONE', 90.00],
  ['FIVE', 55.00],
  ['TEN', 20.00],
  ['TWENTY', 60.00],
  ['ONE HUNDRED', 100.00]
])
