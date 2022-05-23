import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const PrevStateExample = () => {
    const prevState = useRef(0);

    const [prevStatet, setPrevState] = useState("false");

    const handleCange = () => {
        setPrevState((prev) => (prev === "false" ? "true" : "false"));
    };

    useEffect(() => {
        prevState.current = prevStatet;
    });

    return (
        <CardWrapper>
            <SmallTitle>Предыдущее состояние</SmallTitle>
            {prevState.current}
            <hr />
            <p>{prevStatet}</p>
            <button className="btn btn-primary" onClick={handleCange}>
                prevstate
            </button>
        </CardWrapper>
    );
};

export default PrevStateExample;
