import React from 'react';
// import FeedbackOptions from './Feedback/FeedbackOptions';
// import Statistics from './Statistics/Statistics';
// import Section from './Section/Section';

export const App =()=> {
  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  // options = ['Good', 'Neutral', 'Bad'];

  // counterFeedbeck = event => {
  //   this.setState(prevState => ({
  //     [event.target.name]: prevState[event.target.name] + 1,
  //   }));
  // };


  // countTotalFeedback = () => {
  //   const total = this.state.good + this.state.neutral + this.state.bad;
  //   return total;
  // };

  // countPositiveFeedbackPercentage = () => {
  //   return (
  //     (this.state.good /
  //       (this.state.good + this.state.neutral + this.state.bad)) *
  //     100
  //   );
  // };


    return (
      <div
        style={{
          height: '100vh',
        }}
      >

        <div>
          <h1>Feedback</h1>
          <button type='button'>Good</button>
          <button type='button'>Neutral</button>
          <button type='button'>Bad</button>
        </div>

        <div>
          <h2>Statistics</h2>
          <ul>
            <li>Good</li>
            <li>Neutral</li>
            <li>Bad</li>
            <li>Total</li>
            <li>PositiveStatis</li>
          </ul>
        </div>

        </div>)

        // {/* <Section title="Feedback">
        //   <FeedbackOptions options={['Good','Neutral','Bad']} onClick={this.onLeaveFeedback}></FeedbackOptions>
        // </Section>

        // <Section>
        //   <Statistics title="Statistics"></Statistics>
        // </Section> */}
        


}


