import React, {Component} from 'react';
import QuizOptions from './QuizOptions';

class Quiz extends Component {
  constructor(props){
    super(props);
    let riddle = {
      resultsArray: [8,9,10,11],
      field1: 5,
      field2: 5,
      answer: 10
    };
    this.state = {riddle};
    this.renderOptions = this.renderOptions.bind(this);
  }

  renderOptions(){
    return(
      <div className="options">
        <QuizOptions />
        <QuizOptions />
        <QuizOptions />
        <QuizOptions />
      </div>
    );
  }
  render(){
    return(
      <div className="quiz">
        <div className="quiz-content" >
          <h2>Quiz</h2>
          <p className="question">What is the sum of <span className="text-info">5</span> and <span className="text-info">5?</span></p>
          {this.renderOptions()}
        <div className="play-again">
          <a className="button">Play Again</a>
        </div>
      </div>
    </div>
    );
  }
}


export default Quiz;