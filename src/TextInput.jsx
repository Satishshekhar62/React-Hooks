import react, { useState } from "react";




function TextInput()
{
    const [text, setText] = useState('');
    return (
        <div>
                 <label>Type to Display : </label>
                 <input placeholder="Write your text here " value={text} onChange={(e) => setText(e.target.value)}/>

                 <p>{text}</p>
        </div>
       
    );
}

export default TextInput;