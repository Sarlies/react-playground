import React from "react";

import "./styles.css";

interface Props {
    name: string,
    image?: string,
    loading?: boolean,
    size?: "small" | "medium" | "large",
    type?: "circle" | "rounded",
}

export default function Avatar({ image, name, size = "medium", type = "circle", loading }: Props) {
  return (
    <div title={name} className={`avatar-size--${size} avatar-type--${type}`}>
        { loading ? 
            (<div className="avatar--loading"></div>) : 
            (image ? <img alt={name} src={image} /> : <div className="avatar-initials">{name.charAt(0)}</div>)
        }
    </div>
  );
}
