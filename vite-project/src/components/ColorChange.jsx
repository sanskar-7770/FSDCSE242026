import { useState } from "react";

function ColorChange() {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return (
        <div>
            <div
                style={{
                    backgroundColor: `rgb(${red}, ${green}, ${blue})`,
                    width: "200px",
                    height: "200px"
                }}
            ></div>

            <button onClick={() => setRed(255)}>
                RED
            </button>

            <button onClick={() => setGreen(455)}>
                GREEN
            </button>

            <button onClick={() => setBlue(345)}>
                BLUE
            </button>
        </div>
    );
}

export default ColorChange;