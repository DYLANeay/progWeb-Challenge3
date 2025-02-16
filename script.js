"use strict"

// données de base 
const register = [
    {
        tableID: 0,
        orders: [
            {
                item: "coffee",
                qty: 3,
                price: 3.5
            },
            {
                item: "salad",
                qty: 3,
                price: 8
            },
            {
                item: "steak",
                qty: 3,
                price: 28
            },
            {
                item: "ice cream",
                qty: 3,
                price: 5
            }
        ]
    },
    {
        tableID: 1,
        orders: [
            {
                item: "coffee",
                qty: 2,
                price: 3.5
            },
            {
                item: "salad",
                qty: 2,
                price: 8
            },
            {
                item: "steak",
                qty: 2,
                price: 28
            },
            {
                item: "ice cream",
                qty: 2,
                price: 5
            }
        ]
    }
];

const getSubTotal = (table) => {
    let subTotal = 0;
    table.orders.forEach((order) => {
        subTotal = subTotal + (order.price * order.qty)
    });

    return subTotal;
}

const calcPercentage = (subTotal, percentage) => {
    return ((subTotal / 100) * percentage).toFixed(2);

}

const createBill = (table) => {
    const subTotal = getSubTotal(table);
    const tax = calcPercentage(subTotal, 7.2);
    const tip = calcPercentage(subTotal, 10);

    const bill = {
        subTotal: subTotal,
        tax: tax,
        tip: tip,
        //obligatoire d'utiliser parseFloat ici, car il sont de base des strings et pas des ints, ce qui pose problème car "toFixed" renvoie un string
        total: `CHF ${(parseFloat(subTotal) + parseFloat(tax) + parseFloat(tip)).toFixed(2)}`
    };

    return bill;

}


//table fait allusion aux différents objets présents dans register, qui est un tableau 
register.forEach((table) => {
    console.log(createBill(table));
});

