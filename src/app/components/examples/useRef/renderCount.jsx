import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";
const RenderCountExample = () => {
    const renderCount = useRef(0);

    const [renderCountt, setRenderCount] = useState(true);

    const handleCange = () => {
        setRenderCount((prev) => !prev);
    };

    useEffect(() => {
        renderCount.current++;
    });

    return (
        <CardWrapper>
            <SmallTitle>Подсчет количества рендеров</SmallTitle>
            {renderCount.current}
            <hr />
            <p>{renderCountt}</p>
            <button className="btn btn-primary" onClick={handleCange}>
                Count
            </button>
        </CardWrapper>
    );
};

export default RenderCountExample;
