import { useState } from "react";
import { Input } from "./input";
import '../styles/input.css'


function Education({
    eduData,
    handleCollege,
    handleDegree,
    handleCity,
    handlePeriod,
}) {
    return (
        <div className={`dropdownitems education_items`}>
            <Input
                field={`College`}
                type={`text`}
                value={eduData.college}
                func={handleCollege}
                caller="education_items"
            />
            <Input
                field={`Degree`}
                type={`text`}
                value={eduData.degree}
                func={handleDegree}
                caller="education_items"
            />
            <Input
                field={`City`}
                type={`text`}
                value={eduData.city}
                func={handleCity}
                caller="education_items"
            />
            <Input
                field={`Period`}
                type={`text`}
                value={eduData.period}
                func={handlePeriod}
                caller="education_items"
            />
        </div>
    )
}


export {Education}