import { useState } from "react";
import { Input } from "./input";

function Experience({
    expdata,
    handlePosition,
    handleCompany,
    handleExp,
    handleExpCity,
    handleDes,
}) {
    return (
    <>
        <div className={`dropdownitems experience_items`}>
            <Input
                field={`Position`}
                type={"text"}
                value={expdata.position}
                func={handlePosition}
                caller={`experience`}></Input>
            <Input
                field={`Company`}
                type={"text"}
                value={expdata.company}
                func={handleCompany}
                caller={`experience`}></Input>
            <Input
                field={`Period`}
                type={"text"}
                value={expdata.exp}
                func={handleExp}
                caller={`experience`}></Input>
            <Input
                field={`City`}
                type={"text"}
                value={expdata.expCity}
                func={handleExpCity}
                caller={`experience`}></Input>
        </div>
        <div className="label">
            <label htmlFor="Description" className="labeldes">
                Description
            </label>
        </div>
        <div className="textarea">
            <textarea
                name="Description"
                id="Description"
                value={expdata.des}
                placeholder="Description"
                className="bg-gray-100 rounded-md p-2"
                onChange={handleDes}
                rows="5">
            </textarea>
        </div>
    </>)
}

export { Experience };
