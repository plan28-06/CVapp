import { Form } from "./components/form.jsx";
import { Aside } from "./components/aside.jsx";
import { useState } from "react";

function App() {
    const [basicdata, setbasicdata] = useState({
        name: `John Doe`,
        phone: `xxx-xxx-xxxx`,
        mail: `google@gmail.com`,
        github: `github.com/exmaple`,
    });

    const [eduData, setEduData] = useState({
        college: `Southwestern University`,
        degree: `Bachelor of Arts in Computer Science, Minor in Business`,
        city: `Georgetown, TX`,
        period: `Aug 2018 - May 2021`,
    });

    const [eduData2, setEduData2] = useState({
        college: `Blinn College`,
        degree: `Associate\’s in Liberal Arts`,
        city: `Bryan, TX`,
        period: `Aug. 2014 \– May 2018`,
    });

    const [expdata, setexpdata] = useState({
        position: `Undergraduate Research Assistant`,
        company: `Texas A&M University`,
        expCity: `College Station, TX`,
        exp: `June 2020 \– Present`,
        des: `• Developed a REST API using FastAPI and PostgreSQL to store data from learning management systems.
• Developed a full-stack web application using Flask, React, PostgreSQL and Docker to analyze GitHub data.
• Explored ways to visualize GitHub collaboration in a classroom setting`,
    });

    const [expdata2, setexpdata2] = useState({
        position: `Information Technology Support Specialist`,
        company: `Southwestern University`,
        expCity: `Georgetown, TX`,
        exp: `Sep. 2018 \– Present`,
        des: `• Communicate with managers to set up campus computers used on campus
• Assess and troubleshoot computer problems brought by students, faculty and staff
• Maintain upkeep of computers, classroom equipment, and 200 printers across campus`,
    });

    function handleName(e) {
        setbasicdata({ ...basicdata, name: e.target.value });
    }

    function handlePhone(e) {
        setbasicdata({ ...basicdata, phone: e.target.value });
    }

    function handleMail(e) {
        setbasicdata({ ...basicdata, mail: e.target.value });
    }

    function handleGithub(e) {
        setbasicdata({ ...basicdata, github: e.target.value });
    }

    function handleCollege(e) {
        setEduData({ ...eduData, college: e.target.value });
    }

    function handleDegree(e) {
        setEduData({ ...eduData, degree: e.target.value });
    }

    function handleCity(e) {
        setEduData({ ...eduData, city: e.target.value });
    }

    function handlePeriod(e) {
        setEduData({ ...eduData, period: e.target.value });
    }

    function handleCollege2(e) {
        setEduData2({ ...eduData2, college: e.target.value });
    }

    function handleDegree2(e) {
        setEduData2({ ...eduData2, degree: e.target.value });
    }

    function handleCity2(e) {
        setEduData2({ ...eduData2, city: e.target.value });
    }

    function handlePeriod2(e) {
        setEduData2({ ...eduData2, period: e.target.value });
    }

    function handlePosition(e){
        setexpdata({...expdata,position: e.target.value})
    }

    function handleCompany(e) {
        setexpdata({ ...expdata, company: e.target.value });
    }

    function handleExpCity(e) {
        setexpdata({ ...expdata, expCity: e.target.value });
    }

    function handleExp(e) {
        setexpdata({ ...expdata, exp: e.target.value });
    }

    function handleDes(e) {
        setexpdata({ ...expdata, des: e.target.value });
    }

    function handlePosition2(e) {
        setexpdata2({ ...expdata2, position: e.target.value });
    }

    function handleCompany2(e) {
        setexpdata2({ ...expdata2, company: e.target.value });
    }

    function handleExpCity2(e) {
        setexpdata2({ ...expdata2, expCity: e.target.value });
    }

    function handleExp2(e) {
        setexpdata2({ ...expdata2, exp: e.target.value });
    }

    function handleDes2(e) {
        setexpdata2({ ...expdata2, des: e.target.value });
    }
    return (
        <>
            <Form
                basicData={basicdata}
                handleName={handleName}
                handlePhone={handlePhone}
                handleMail={handleMail}
                handleGithub={handleGithub}
                eduData={eduData}
                eduData2={eduData2}
                handleCollege={handleCollege}
                handleDegree={handleDegree}
                handleCity={handleCity}
                handlePeriod={handlePeriod}
                handleCollege2={handleCollege2}
                handleDegree2={handleDegree2}
                handlePeriod2={handlePeriod2}
                handleCity2={handleCity2}
                expdata={expdata}
                expdata2={expdata2}
                handlePosition={handlePosition}
                handleCompany={handleCompany}
                handleExp={handleExp}
                handleExpCity={handleExpCity}
                handlePosition2={handlePosition2}
                handleCompany2={handleCompany2}
                handleExp2={handleExp2}
                handleExpCity2={handleExpCity2}
                handleDes={handleDes}
                handleDes2={handleDes2}></Form>
            <Aside
                basicData={basicdata}
                eduData={eduData}
                eduData2={eduData2}
                expdata={expdata}
                expdata2={expdata2}></Aside>
        </>
    );
}

export default App;
