import React from "react";

export const FeedbackOptions = ({options, onLeaveFeedback})=> (
    <ul>
{options.map(option => (
    <li key={option}>
        <button type='button' 
        name={option} 
        onClick={()=>onLeaveFeedback(option)}>
            {option}
            </button>
            </li>
))}
</ul>
)