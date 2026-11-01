//excercise 1 

const menuItems = ['Tea', 'Coffee', 'Sandwich', 'Cookie']

console.log(menuItems[0])
console.log(menuItems[2])
console.log(menuItems.length)
console.log(menuItems[menuItems.length - 1])

//////////////////
//excercise 2

const waitingCustomers = ['Aisha', 'Omar', 'Noor']

waitingCustomers[1] = 'Ali'
waitingCustomers.push('Dana')
console.log(waitingCustomers.length)
const removedCustomer = waitingCustomers.pop()
console.log(removedCustomer)
console.log(waitingCustomers)

//////////////////////////////////////
// excercise 3

const drinks = ['Water', 'Tea', 'Coffee', 'Juice'];

for (let i = 0; i < drinks.length; i++) {
    console.log((i + 1) + '. ' + drinks[i])
}


//////////////////////////////////////
// excercise 4
// const prices = [2, 5, 3, 6, 4];

// let totalPrice = 0;
// let expensiveItemCount = 0;

// prices.forEach(function(price) {
//     totalPrice += price;
// if (prices >= 4) {
//     expensiveItemCount++;
// }
// });
// console.log('total Price', totalPrice);
// console.log('expensive Item', expensiveItemCount);

const prices = [2, 5, 3, 6, 4];

let totalPrice = 0;
let expensiveItemCount = 0;

prices.forEach(price => {
    totalPrice += price;

    if (price >= 4) {
        expensiveItemCount++;
    }
});

console.log("Total Price:", totalPrice);
console.log("Expensive Items:", expensiveItemCount);

/////////////////////
// excercise 5 & 6

const drink = {
    name: 'Iced Coffee',
    price: 3,
    size: 'small',
    temporaryCode: 'TEMP-01',
};

const cafe = {
    name: 'Campus Café',
    location: 'Building A',
    seats: 24,
    isOpen: true
};

console.log(cafe.name + ' is located in ' + cafe.location + '.');
console.log('Available seats: ' + cafe.seats);

drink.size = 'large';
drink.price = drink.price + 1;
drink.isAvailable = true;

delete drink.temporaryCode;

console.log(drink);

/////////////////////////////
// excercise 7

const order = {
  customerName: 'Mariam',
  itemName: 'Sandwich',
  price: 4,
  quantity: 3,
  isPaid: false,
};
order.orderTotal = order.price * order.quantity;

console.log(`${order.customerName} ordered ${order.quantity} ${order.itemName} items.`);
console.log(`Order total: ${order.orderTotal}`);

if (order.isPaid) {
  console.log('Ready to prepare');
} else {
  console.log('Waiting for payment');
}
////////////////////////////
// excercise 8


const studySession = {
  title: 'JavaScript Practice',
  room: 'Lab 2',
  topics: ['Variables', 'Arrays'],
};
console.log(studySession.topics[0]);
studySession.topics.push('Objects');
console.log(studySession.topics.length);

studySession.topics.forEach(function(topic) {
  console.log(topic);
});

studySession.room = 'Lab 3';
console.log(`{studySession.title} will take place in {studySession.room}.`);
console.log(studySession.topics);

////////////////////////////
// excercise 9

const products = [
  { name: 'Tea', price: 2 },
  { name: 'Sandwich', price: 4 },
  { name: 'Cookie', price: 1 },
];

console.log(products[1].name);
products[1].price = 5;
products.push({ name: 'Juice', price: 3 });
products.forEach(function(product) {
  console.log(`${product.name} costs ${product.price} BD.`);
});

////////////////////////////
// excercise 10

const studyGroup = {
  name: 'JavaScript Crew',
  members: [
    { name: 'Aisha', completedHomework: true },
    { name: 'Omar', completedHomework: false },
    { name: 'Noor', completedHomework: true },
  ],
};

console.log(studyGroup.name);
console.log(studyGroup.members.length);

let completedCount = 0;

studyGroup.members.forEach(function(member) {
  if (member.completedHomework) {
    completedCount++;
  } else {
    console.log(`${member.name} needs to finish the homework.`);
  }
});

console.log(`Completed homework: ${completedCount}`);