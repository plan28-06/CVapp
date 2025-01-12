import "./App.css";
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

    function handleCollege(e){
        setEduData({...eduData,college:e.target.value})
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
    setEduData({ ...eduData, college: e.target.value });
    }

    function handleDegree2(e) {
    setEduData({ ...eduData, degree: e.target.value });
    }

    function handleCity2(e) {
    setEduData({ ...eduData, city: e.target.value });
    }

    function handlePeriod2(e) {
    setEduData({ ...eduData, period: e.target.value });
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
                handleCity2={handleCity2}></Form>
            <Aside></Aside>
        </>
    );
}

export default App;
