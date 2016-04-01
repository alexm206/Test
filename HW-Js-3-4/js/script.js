var test = {

  formbody: document.body,
  wrapper: document.createElement('form'),
  header: document.createElement('header'),
  topic: document.createElement('p'),
  button: document.createElement('button'),
  counter: 0,

  testForm: function (testTopic, button) {
    this.wrapper.classList.add('test');
    this.wrapper.setAttribute('id', 'testForm');
    this.topic.classList.add('test__topic');
    this.topic.innerHTML = testTopic || 'Тест по программированию';
    this.button.classList.add('test__sbmbtn');
    this.button.setAttribute('form', 'testForm');
    this.button.setAttribute('type', 'submit');
    this.button.innerHTML = button || 'Проверить мои результаты';

    console.log(this.formbody);

    this.formbody.appendChild(this.wrapper);
    console.log(this.formbody);
    this.wrapper.appendChild(this.header);
    this.header.appendChild(this.topic);
    this.wrapper.appendChild(this.button);
    console.log('test', this.formbody);
  },

  testQuestions: function (question, answers) {
    var questionBox = document.createElement('div');
    var questionHeader = document.createElement('header');
    var questionText = document.createElement('p');
    var answerCheckbox;
    var answerLabel;

    questionBox.classList.add('question');
    questionText.classList.add('question__name');
    questionText.innerHTML = question || ((this.counter+1) + '. Вопрос №' + (this.counter+1));

    questionBox.appendChild(questionHeader);
    questionHeader.appendChild(questionText);

    this.counter++;

    for (var i=0; i<(answers !== undefined ? answers.length : 3); i++) {
      var labelText = document.createTextNode(answers !== undefined ? answers[i] : ('Вариант ответа №' + (i+1)));
      answerLabel = document.createElement('label');
      answerCheckbox = document.createElement('input');
      answerCheckbox.classList.add('answer-checkbox');
      answerCheckbox.setAttribute('type', 'checkbox');
      answerCheckbox.setAttribute('id', ('question-'+this.counter+'-answer-'+(i+1)));
      answerCheckbox.setAttribute('name', ('question'+this.counter+'answer'+(i+1)));
      answerLabel.classList.add('answer-title');

      questionBox.appendChild(answerLabel);
      answerLabel.appendChild(answerCheckbox);
      answerLabel.appendChild(labelText);
    }
    this.wrapper.insertBefore(questionBox, this.button);
  },

};

test.testForm();
test.testQuestions();
test.testQuestions();
test.testQuestions();
