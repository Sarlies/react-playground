import React from "react";

import PropTypes from "prop-types";

import "./styles.css";

export default function Avatar({ image, name, size, type, loading }) {
  return (
    <div title={name} className={`avatar avatar-size--${size} avatar-type--${type}`}>
        { loading ? 
            (<div className="avatar--loading"></div>) : 
            (image ? <img alt={name} src={image} /> : <div className="avatar-initials">{name.charAt(0)}</div>)
        }
    </div>
  );
}

Avatar.propTypes = {
  loading: PropTypes.bool,
  name: PropTypes.string.isRequired,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  image: PropTypes.string,
  type: PropTypes.oneOf(["circle", "rounded"]),
};

Avatar.defaultProps = {
  size: "medium",
  type: "circle",
};
