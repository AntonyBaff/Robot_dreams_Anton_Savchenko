const guessOfRangeNumber2 = 63;

switch (true) {
    case guessOfRangeNumber2 >= 0 && guessOfRangeNumber2 < 10:
        console.log('Your number between 0 and 10');
        break;
    case guessOfRangeNumber2 >= 10 && guessOfRangeNumber2 < 20:
        console.log('Your number between 10 and 20');
        break;
    case guessOfRangeNumber2 >= 20 && guessOfRangeNumber2 < 30:
        console.log('Your number between 20 and 30');
        break;
    case guessOfRangeNumber2 >= 30 && guessOfRangeNumber2 < 40:
        console.log('Your number between 30 and 40');
        break;
    case guessOfRangeNumber2 >= 40 && guessOfRangeNumber2 < 50:
        console.log('Your number between 40 and 50');
        break;
    case guessOfRangeNumber2 >= 50 && guessOfRangeNumber2 < 60:
        console.log('Your number between 50 and 60');
        break;
    case guessOfRangeNumber2 >= 60 && guessOfRangeNumber2 < 70:
        console.log('Your number between 60 and 70');
        break;
    default:
        console.log('Your number more than 70');
}
