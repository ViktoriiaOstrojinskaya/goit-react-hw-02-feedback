import React, { Component } from 'react';
import {FeedbackOptions} from './Feedback/FeedbackOptions';
import {Statistics} from './Statistics/Statistics';
// import Section from './Section/Section';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };


  

   onLeaveFeedback = (option) => { 
    this.setState( prevState => ({
      [option]: prevState[option] + 1,
    }));
    console.log(option);

  };


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

render(){
  
    return (
      <div
        style={{
          height: '100vh',
        }}
      >

        <div>
          <h1>Feedback</h1>
        <FeedbackOptions options={['Good', 'Neutral', 'Bad']} onLeaveFeedback={this.onLeaveFeedback}/>
        </div>

        <div>
          <h2>Statistics</h2>
          <Statistics good={this.state.good}></Statistics>
        </div>

        <p>{this.state.good}</p>
        <p>{}</p>

        </div>)

        // {/* <Section title="Feedback">
        //   <FeedbackOptions options={['Good','Neutral','Bad']} onClick={this.onLeaveFeedback}></FeedbackOptions>
        // </Section>

        // <Section>
        //   <Statistics title="Statistics"></Statistics>
        // </Section> */}
        

      }
}


export default App;