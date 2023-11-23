import React from 'react'
export default function FinishScreen({points, maxPossible, dispatch }) {
  const percentage = (points / maxPossible) * 100
  let emoji;
  if (percentage === 100) emoji = "🥇";
  if (percentage >= 80 && percentage < 100) emoji = "🎉";
  if (percentage >= 50 && percentage < 80) emoji = "🙃";
  if (percentage >= 0 && percentage < 50) emoji = "🤨";
  if (percentage === 0) emoji = "🤦‍♂️";
  return (
    <>
    <p className='result'>You Scored <strong>{points}</strong> out of {maxPossible} ({Math.ceil(percentage)})% {emoji}</p>
    <button className='btn' onClick={() => dispatch({type: "restart"}) }>Restart</button>
    </>
    )

}
