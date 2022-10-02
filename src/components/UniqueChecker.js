//callback function
function isUnique(value, index, array) {
    return array.indexOf(value) === array.lastIndexOf(value);
  }

  //checking if seats are unique
  const seatsAreUnique = Selected.every(isUnique);
  console.log(seatsAreUnique);

  //filter unique seats
  const uniqueSeats = Selected.filter(isUnique);
  console.log(uniqueSeats);