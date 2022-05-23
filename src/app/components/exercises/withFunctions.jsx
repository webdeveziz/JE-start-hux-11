import React, { useState } from "react";
import CardWrapper from "../common/Card";

const withFunctions = (Component) => (props) => {
    const [isLog, setIsLog] = useState(localStorage.getItem("user"));
    const onLogin = () => {
        setIsLog(() => {
            localStorage.setItem("user", "I am a user!");
            return localStorage.getItem("user");
        });
    };
    const onLogOut = () => {
        setIsLog(() => {
            return localStorage.removeItem("user");
        });
    };

    return (
        <CardWrapper>
            <Component
                {...props}
                isAuth={isLog}
                onLogin={onLogin}
                onLogOut={onLogOut}
            />
        </CardWrapper>
    );
};

export default withFunctions;
