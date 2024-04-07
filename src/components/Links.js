import React from "react";
import user from "../data/user";

function Links (props)
{
    return(<>
        <h3>Links</h3>
        <a href={props.github}>{props.github}</a>
        <a href= {props.linkedin}>{props.linkedin}</a>
        </>
    )
}

// Finally, App should also pass down the
//  github and linkedin links to the About 
//  component, so that About can pass those
//   props down to the Links component you will create.

export default Links