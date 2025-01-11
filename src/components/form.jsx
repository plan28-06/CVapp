import { useState } from "react";
import "../styles/form.css";
import { Basic } from "./basic";

function Form({
    basicData,
    handleName,
    handlePhone,
    handleMail,
    handleGithub,
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
                <div className="education">Education Details</div>
                <div className="exp">Experience</div>
            </div>
        </div>
    );
}

export { Form };
