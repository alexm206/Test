  // Объявляем функцию
  function myPow() {
    // объявляем локальные переменные
    var number = +prompt('Введите число', ''); // ввод базового числа
    var exponent = +prompt('Введите степень', ''); // ввод степени
    var result = number; // объявляем переменную для результат и присваиваем ей начальное значение равное базовому числу
    // выводим в консоль введенные данные
    console.log('Введенное число - ', number);
    console.log('Введенная степень - ', exponent);

    if (exponent>0) {
      result *= number;
      console.log(result);
      alert('Результат возведения в степень ' + result);
    } else {
      exponent = Math.abs(exponent);
      result = 1/result;
      console.log(result);
      alert('Результат возведения в степень ' + result);
    }
    // цикл для выполнения возведения в степень
  //   for (var i = 1; i < exponent; i++) { // объявляем счетчик, пока он меньше степени, работает цикл, итерация - счетчик+1
  //     result *= number; // число умножаем само на себя
  //   }
  //   // Записываем результат в консоль
  //   console.log('Результат возведения в степень', result);
  //   alert('Результат возведения в степень ' + result);
  //   // Цикл для условия введения степени, равной 0 или отрицательной
  //   if (exponent <= 0) {
  //     exponent = Math.abs(exponent);
  //     result = 1/result;
  //     console.log(result);
  //     alert('Результат возведения в степень ' + result);
  //   }
  }
  // Вызываем функцию
  myPow();
