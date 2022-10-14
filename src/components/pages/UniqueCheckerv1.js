//NOTE: DIBIKIN MODULE KALO UDAH BISA SEMUA TAPI KAPAN KAPAN AJA

//callback function
// function isUnique(value, index, array) {
//     return array.indexOf(value) === array.lastIndexOf(value);
// }

//array of seats
const seats = ['B5', 'B6', 'B7', 'B7', 'B7', 'B6']
let n = seats.length

let seatsOdd = []
function RemoveEven(arr, n) {
    let mp = new Map();
    for (let i = 0; i < n; i++) {
        if (mp.has(arr[i])) {
            mp.set(arr[i], mp.get(arr[i]) + 1);
        } else {
            mp.set(arr[i], 1);
        }
    }
    for (let i = 0; i < n; i++) {
        if ((mp.has(arr[i]) && mp.get(arr[i]) % 2 == 0))
            continue;
            odd = arr[i];
            seatsOdd.push(odd);
    }
}

// function FilterUnique(array) {
//     //checking if unique
//     const seatsAreUnique = array.every(isUnique);
//     console.log(seatsAreUnique);

//     //filter unique values
//     const uniqueSeats = array.filter(isUnique);
//     console.log(uniqueSeats);
// }

//only unique seats
function OnlyUnique(array) {
    const uniqueSeats = [...new Set(array)];
    console.log(uniqueSeats);
}

const countSeats = seats.reduce((m,n)=>({...m, [n]:-~m[n]}),{})
let trav = Object.values(countSeats)
//console.log(trav)

const even = [];
trav.forEach(amount => {
    if (amount % 2 === 0) {
        even.push(amount);
    }
});

if (even.length === 0) {
    OnlyUnique(seats)
}

else {
    RemoveEven(seats, n)
    OnlyUnique(seatsOdd)
}