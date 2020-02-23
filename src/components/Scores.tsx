import React from 'react'

import PropTypes from 'prop-types'

export default function Scores({latestScores}) {

  return (
    <div className="scores">
      <h2>The latest scores are</h2>
      <div className="latest-scores">
        {latestScores.map(score => (
          <div className={`latest-scores-score latest-scores-score--${score.toLowerCase()}`}>{score}</div>
        ))}
      </div>
    </div>
  )
}

Scores.propTypes = {
  latestScores: PropTypes.arrayOf(PropTypes.oneOf(["W", "L", "D"]))
}