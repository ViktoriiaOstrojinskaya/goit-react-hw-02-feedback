import React, { Component } from 'react';
// import FeedbackOptions from './Feedback/FeedbackOptions';
// import Statistics from './Statistics/Statistics';
//import Section from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  counterFeedbeck = event => {
    this.setState(prevState => ({
      //
      [event.target.name]: prevState[event.target.name] + 1,
    }));
  };

  // onClickBtn = evt => {
  //   this.setState(prevState => ({
  //     [evt.target.name]: prevState[evt.target.name] + 1,
  //   }));
  // };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    return (
      (this.state.good /
        (this.state.good + this.state.neutral + this.state.bad)) *
      100
    );
  };

  options = ['Good', 'Neutral', 'Bad'];

  //   export function FeedbackOptions({ options, onLeaveFeedback }) {
  //     const keys = Object.keys(options);
  //     return (
  //         <ul className={css.feedbackBtnBox}>
  //             {keys.map(key => (
  //                 <li key={key}>
  //                     <button
  //                         className={css.feedbackBtn}
  //                         key={key}
  //                         type="button"
  //                         name={key}
  //                         onClick={onLeaveFeedback}
  //                     >
  //                         {key}
  //                     </button>
  //                 </li>
  //             ))}
  //         </ul>
  //     );
  // }

  render() {
    return (
      <div
        style={{
          height: '100vh',
        }}
      >
        <div>
          <h1>Feedback</h1>
          {this.options.map((option, index) => {
            return (
              <button type="button" key={index} onClick={this.counterFeedbeck}>
                {option}
              </button>
            );
          })}
        </div>

        <div>
          <h2>Statistic</h2>
          <ul>
            <li>Good:{this.counterFeedbeck}</li>
            <li>Neutral:{this.state.neutral}</li>
            <li>Bad:{this.state.bad}</li>
            <li>Total:{this.countTotalFeedback()}</li>
            <li>Positive feedback:{this.countPositiveFeedbackPercentage()}%</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;
