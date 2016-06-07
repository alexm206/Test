function Human() {
    this.name = 'Alex';
    this.age = 32;
    this.sex = 'male';
    this.height = 170;
    this.weight = 90;
}

function Worker() {
    this.workplace = 'VW factory';
    this.salary = '10000';
    this.work = function() {
        console.log('I work in VW');
    }
}

function Student() {
    this.university = 'DONNTU';
    this.averagemarks = '10';
    this.playGames = function() {
        console.log('I play GRID');
    }
}


var human1 = new Human();
console.log('1) human', human1.name, human1.age, human1.sex, human1.height, human1.weight);

var worker = new Worker();
worker.__proto__ = new Human();
console.log('2) worker', worker.name, worker.age, worker.workplace, worker.salary);
worker.work();

var student =  new Student();
student.__proto__ = new Human();
console.log('3) student', student.name, student.sex, student.university, student.averagemarks);
student.playGames();
