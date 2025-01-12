import { useState } from "react";
import "../styles/form.css";
import { Basic } from "./basic";
import { Education } from "./education";
import { Experience } from "./experience";

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
    expdata,
    expdata2,
    handlePosition,
    handleCompany,
    handleExp,
    handleExpCity,
    handlePosition2,
    handleCompany2,
    handleExp2,
    handleExpCity2,
    handleDes,
    handleDes2,
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
                        onClick={() =>
                            setselected(
                                selected === "education" ? "null" : "education"
                            )
                        }>
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
                <div className="exp">
                    <p
                        onClick={() =>
                            setselected(
                                selected === "experience"
                                    ? "null"
                                    : "experience"
                            )
                        }>
                        Experience
                    </p>
                    <div
                        className={`dropdown exp1 ${
                            selected === "experience" ? "show" : "hide"
                        }`}>
                        <h6>Experience 1</h6>
                        <Experience
                            expdata={expdata}
                            handlePosition={handlePosition}
                            handleCompany={handleCompany}
                            handleExp={handleExp}
                            handleExpCity={handleExpCity}
                            handleDes={handleDes}></Experience>
                    </div>
                    <div
                        className={`dropdown exp2 ${
                            selected === "experience" ? "show" : "hide"
                        }`}>
                        <h6>Experience 2</h6>
                        <Experience
                            expdata={expdata2}
                            handlePosition={handlePosition2}
                            handleCompany={handleCompany2}
                            handleExp={handleExp2}
                            handleExpCity={handleExpCity2}
                            handleDes={handleDes2}></Experience>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { Form };
