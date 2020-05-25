import React from 'react'

import PropTypes from 'prop-types'

import './styles.css'

export default function Avatar({ image, name, size, type }) {
    // Find the correct image -- is this better done in implementation as this is supposed to be a dummy component?
    // Use the correct styling (type). Fallback is initials type
    const firstCharacter = name.charAt(0)
    console.log(firstCharacter)


    return (
    // return the image only
    // Check whether it's loading or not and display the loading state (ternary)
        <div title={name} className={`avatar avatar-${size}`}>
           <img alt={name} src={image}/>
        </div>
    )
}

Avatar.propTypes = {
    loading: PropTypes.bool,
    name: PropTypes.string.isRequired,
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    image: PropTypes.string,
    type: PropTypes.oneOf(['circle', 'rounded'])
}

Avatar.defaultProps = {
    size: 'medium',
    type: 'circle'
}