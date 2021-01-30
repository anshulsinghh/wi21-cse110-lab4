for (let car in statistics) {
    if (car.charAt(0) == 'r' || statistics[car]%2 == 1) {
        console.log(statistics[car]);
    }
}