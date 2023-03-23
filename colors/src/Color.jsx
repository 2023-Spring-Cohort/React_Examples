import React from "react";

export default function Color({myColor}) {
    return(
        <li key={myColor.color}   >
            {myColor.color}, {myColor.value}
        </li>
    )
}