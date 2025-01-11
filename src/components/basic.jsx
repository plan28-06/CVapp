import { useState } from "react";
import { Input } from "./input";

function Basic({basicdata, handleName, handlePhone, handleMail, handleGithub}) {
    return (
        <div className={`dropdownitems basic_items`}>
            <Input
                field={`Name`}
                type={`text`}
                value={basicdata.name}
                func={handleName}
                caller="basic_items"
            />
            <Input
                field={`Phone`}
                type={`tel`}
                value={basicdata.phone}
                func={handlePhone}
                caller="basic_items"
            />
            <Input
                field={`E-mail`}
                type={`email`}
                value={basicdata.mail}
                func={handleMail}
                caller="basic_items"
            />
            <Input
                field={`Github`}
                type={`text`}
                value={basicdata.github}
                func={handleGithub}
                caller="basic_items"
            />
        </div>
    );
}

export {Basic}