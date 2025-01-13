import { useState } from "react";
import "../styles/aside.css"

function Aside({basicData,expdata,expdata2,eduData,eduData2}) {
    return (
        <div className="aside">
            <div className="header">
                <div className="username">{basicData.name}</div>
                <div className="social">
                    {basicData.phone}
                    <div>|</div>
                    {basicData.mail}
                    <div>|</div>
                    <a href={basicData.github}> {basicData.github}</a>
                </div>
            </div>
            <div className="educontainer">
                <div className="edutitle">Education</div>
                <div className="edu1container">
                    <div className="edu1lhs">
                        <div className="uni1name">{eduData.college}</div>
                        <div className="degree">{eduData.degree}</div>
                    </div>
                    <div className="edu1rhs">
                        <div className="edu1city">{eduData.city}</div>
                        <div className="period">{eduData.period}</div>
                    </div>
                </div>
                <div className="edu1container2">
                    <div className="edu1lhs">
                        <div className="uni1name">{eduData2.college}</div>
                        <div className="degree">{eduData2.degree}</div>
                    </div>
                    <div className="edu1rhs">
                        <div className="edu1city">{eduData2.city}</div>
                        <div className="period">{eduData2.period}</div>
                    </div>
                </div>
            </div>
            <div className="expcontainer">
                <div className="exptitle">Experience</div>
                <div className="exp1container">
                    <div className="exp1lhs">
                        <div className="exppos">{expdata.position}</div>
                        <div className="expcom">{expdata.company}</div>
                    </div>
                    <div className="exp1rhs">
                        <div className="expperiod">{expdata.exp}</div>
                        <div className="expcity">{expdata.expCity}</div>
                    </div>
                </div>
                <div className="exp1des">
                    {expdata.des.split("\n").map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
                <div className="exp2container">
                    <div className="exp2lhs">
                        <div className="exppos">{expdata2.position}</div>
                        <div className="expcom">{expdata2.company}</div>
                    </div>
                    <div className="exp2rhs">
                        <div className="expperiod">{expdata2.exp}</div>
                        <div className="expcity">{expdata2.expCity}</div>
                    </div>
                </div>
                <div className="exp2des">
                    {expdata2.des.split("\n").map((line, index) => (
                        <p key={index}>{line}</p>
                    ))}
                </div>
            </div>
        </div>
    );
}

export { Aside };

