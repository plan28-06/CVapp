import { useState } from "react";
import "../styles/form.css";
import { Basic } from "./basic";
import { Education } from "./education";

function Form({
    basicData, 
    handleName,
    handlePhone,
    handleMail,
    handleGithub,
    eduData,
    handleCollege,
    handleDegree,
    handleCity,
    handlePeriod,
    eduData2,
    handleCollege2,
    handleDegree2,
    handleCity2,
    handlePeriod2,
}) {
    const [selected, setselected] = useState("null");
    return (
        <div className="mainform">
            <a
                className="mainformtitle"
                href="https://github.com/plan28-06/CVapp"
                target="_blank">
                CV Application Creator
            </a>
            <div className="items">
                <div className="basic">
                    <p
                        onClick={() =>
                            setselected(selected === "basic" ? "null" : "basic")
                        }>
                        Basic Details
                    </p>
                    <div
                        className={`dropdown ${
                            selected === "basic" ? "show" : "hide"
                        }`}>
                        <Basic
                            basicdata={basicData}
                            handleName={handleName}
                            handlePhone={handlePhone}
                            handleMail={handleMail}
                            handleGithub={handleGithub}></Basic>
                    </div>
                </div>
                <div className="education">
                    <p
                        onClick={() => setselected(
                            selected === "education" ? "null" : "education"
                        )}>
                        Educational Details
                    </p>
                    <div
                        className={`dropdown education1 ${
                            selected === "education" ? "show" : "hide"
                        }`}>
                        <h6>Primary Degree</h6>
                        <Education
                            eduData={eduData}
                            handleCollege={handleCollege}
                            handleDegree={handleDegree}
                            handleCity={handleCity}
                            handlePeriod={handlePeriod}></Education>
                    </div>
                    <div
                        className={`dropdown education2  ${
                            selected === "education" ? "show" : "hide"
                        }`}>
                        <h6>Secondary Degree</h6>
                        <Education
                            eduData={eduData2}
                            handleCollege={handleCollege2}
                            handleDegree={handleDegree2}
                            handlePeriod={handlePeriod2}
                            handleCity={handleCity2}></Education>
                    </div>
                </div>
                <div className="exp">Experience</div>
            </div>
        </div>
    );
}

export { Form };
