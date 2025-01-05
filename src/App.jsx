import "./App.css";
import { Form } from "./components/form.jsx";
import { Aside } from "./components/aside.jsx";
import { useState } from "react";

function App() {
    const [basicdata, setbasicdata] = useState({
        name: `Example CV`,
        phone: `xxx-xxx-xxxx`,
        mail: `g@odinprojects.edu`,
        github: `github.com/exmaple`,
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

    return (
        <>
            <Form
                basicdata={basicdata}
                handleName={handleName}
                handlePhone={handlePhone}
                handleMail={handleMail}
                handleGithub={handleGithub}></Form>
            <Aside></Aside>
        </>
    );
}

export default App;
