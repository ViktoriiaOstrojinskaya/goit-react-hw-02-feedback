import React, { Component } from 'react';
import {FeedbackOptions} from './Feedback/FeedbackOptions';
import {Statistics} from './Statistics/Statistics';
import {Section} from './Section/Section';
import {Notification} from './Notification/Notification'

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
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + neutral + bad;
    };

  countPositiveFeedbackPercentage = () => {
    return Math.round((this.state.good/this.countTotalFeedback())*100);
  };

render(){
    return (
      <>

      <Section title="Please leave feedback">
        <FeedbackOptions options={['good', 'neutral', 'bad']} onLeaveFeedback={this.onLeaveFeedback}/>
        </Section>

        <Notification message="There is no feedback"/>

        <Section title="Statistics">
          <Statistics good={this.state.good} neutral={this.state.neutral} bad={this.state.bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>
       </Section>

        </>)
      }
}


export default App;