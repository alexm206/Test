"use strict";

// Объект с данными теста

var data = {
    title: {
        value: "Тест по автомобилям"
    },
    question_list: [
        {
            question: "Каких типов ДВС не существует?",
            options: [
                "3-цилиндровых",
                "12-цилиндровых",
                "15-цилиндровых",
            ],
            answer: "15-цилиндровых",
        },
        {
            question: "Занос - это?",
            options: [
                "Избыточная поворачиваемость",
                "Недостаточная поворачиваемость",
                "Нормальное поведение авто в некоторых случаях"
            ],
            answer: "Избыточная поворачиваемость"
        },
        {
            question: "Какими характеристиками отличается дизельный ДВС?",
            options: [
                "Малый расход топлива при доступной широкой полке момента",
                "Больший расход топлива при малой полке момента",
                "Максимальный момент, доступный во всем диапазоне оборотов"
            ],
            answer: "Малый расход топлива при доступной широкой полке момента"
        }
    ]
};

// Записываем в localstorage и берем оттуда
localStorage.setItem('test', JSON.stringify(data));
var returnData = JSON.parse(localStorage.getItem('test'));

// Шаблонизатор lodash
$(function () {
    var html = _.template($('#testId').html());

    var content = html(returnData);
    $('body').append(content);
    rightAnswersArrFill();
    $('.check').click(function () {
        if (_.difference(answersArr, rightAnswersArr) == 0) {
            alert('Вы ответили правильно');
        } else {
            alert('Вы ответили неправильно');
        }

        radioReset();
    })
});

var answersArr = [];
answersArr.fillArray = function (event) {
    var target = event.target;
    if (target.getAttribute('data-go')) {

        var labelValue = target.getAttribute('data-label');
        var number = target.getAttribute('data-num');
        answersArr[number] = labelValue;
    }
};
var rightAnswersArr = [];
var rightAnswersArrFill = function () {
    for (var i = 0; i < 3; i++) {
        rightAnswersArr.push(data.question_list[i].answer);
    }
    return rightAnswersArr;
};
var radioReset = function() {
    $('input[type="radio"]').prop('checked', false);
};
