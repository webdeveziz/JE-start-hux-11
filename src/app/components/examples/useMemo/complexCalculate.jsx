import React, { useEffect, useMemo, useState } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";

const factorial = (n) => (n ? n * factorial(n - 1) : 1);

function runFactorial(n) {
    console.log("run render");
    return factorial(n);
}

const ComplexCalculateExample = () => {
    const [value, setValue] = useState(100);
    const [other, setOther] = useState(false);

    const cls = other ? "primary" : "danger";

    useEffect(() => console.log("render"), [cls]);

    const fact = useMemo(() => runFactorial(value), [value]);

    const onIncr = () => setValue((prev) => prev + 10);
    const onDecr = () => setValue((prev) => prev - 10);

    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <Divider />
                <h3>
                    {value} - Result: {fact}
                </h3>
                <button onClick={onIncr}>Incr </button> <br />
                <button onClick={onDecr}>Decr </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <Divider />
                <button
                    className={"btn btn-" + cls}
                    onClick={() => setOther((prev) => !prev)}
                >
                    Other State
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
