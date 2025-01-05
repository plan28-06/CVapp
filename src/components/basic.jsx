import { useState } from "react";

function Basic(){
    return(
        <>
            <Input
            field={`Name`}
            type={`text`}
            value={data.name}
            func={handleName}
            />
            <Input
            field={`Phone`}
            type={`tel`}
            value={data.phone}
            func={handlePhone}
            />
            <Input
            field={`E-mail`}
            type={`email`}
            value={data.mail}
            func={handleMail}
            />
            <Input
            field={`Github`}
            type={`text`}
            value={data.github}
            func={handleGithub}
            />
        </>
    )
}

export {Basic}