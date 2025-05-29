function checkGuess() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    while (true) {
        const guess = prompt("Введите число");
        if (guess === null) {
            alert("Игра завершена.");
            break;}
        const numberGuess = Number(guess);
        if (isNaN(numberGuess)) {
            alert("Ошибка: введите число!");
            continue;}
        if (numberGuess < randomNumber) {
            alert('Загаданное число больше');}
        else if (numberGuess > randomNumber) {
            alert('Загаданное число меньше');} 
        else {
            alert('Вы угадали!');
            break;}
    }
}