import React from "react";

function Story({story, jumTo}) {
return (
    <div className="story">
        <h4>Story</h4>
        <ul>
        {story.map((step, move)=> {
            const desc = move ? "Go to move #" + move : "Go to game start";
            return (
                <li key={move}>
                    <button onClick={()=> jumTo(move)}>{desc}</button>
                </li>
            );
        })}

        </ul>
    </div>
);

}
export default Story;