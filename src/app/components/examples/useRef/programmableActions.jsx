import React, { useRef } from "react";
import CardWrapper from "../../common/Card";
import Divider from "../../common/divider";
import SmallTitle from "../../common/typografy/smallTitle";
const ProgrammableActionsExample = () => {
    const inputRef = useRef("refchik");

    const handleRef = () => {
        console.log((inputRef.current.style.opacity = "0.5%"));
    };

    return (
        <CardWrapper>
            <SmallTitle className="card-title">
                Программируемые действия и свойства
            </SmallTitle>
            <Divider />
            <label htmlFor="email" className="form-label">
                Email
            </label>
            <input
                type="email"
                name="email"
                className="form-control"
                id="email"
                ref={inputRef}
            />
            <button className="btn btn-primary m-2" onClick={handleRef}>
                Change
            </button>
        </CardWrapper>
    );
};

export default ProgrammableActionsExample;
