import { useState } from "react";

import React from 'react';



function CheckBox()
{   
    const [isChecked, setChecked] = useState(false);
    return (
            <div>
            <label>CheckBox</label>
                <input type="checkbox" checked = {isChecked} onChange={() => setChecked(!isChecked)} />

                <p>{isChecked? "Checked" : "Not Checked"}</p>
            </div>
    );
}

export default CheckBox;