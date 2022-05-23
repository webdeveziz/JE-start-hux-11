import React, { useEffect, useRef, useState } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

const UseCallBackExample = () => {
    const [data, setData] = useState({});
    const withoutCallback = useRef(0);

    const handleChange = ({ target }) => {
        setData((prev) => ({ ...prev, [target.name]: target.value }));
    };

    const validateWithoutCallback = (data) => {
        console.log(data);
    };

    useEffect(() => {
        withoutCallback.current++;
    }, [validateWithoutCallback]);

    useEffect(() => {
        validateWithoutCallback(data);
    }, [data]);
    return (
        <CardWrapper>
            <SmallTitle>Example</SmallTitle>
            <hr />
            <p>Result withoutCallback: {withoutCallback.current}</p>
            <br />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                value={data.email || ""}
                onChange={handleChange}
            />
            {/* <button className="btn btn-primary m-2" onClick={handleRef}> Change </button> */}
        </CardWrapper>
    );
};

export default UseCallBackExample;
