import { Children } from "react";
import Childrent_Comp from "./Children_Comp";

function Parent_Comp() {
    const userName = "ngyuyen van a";
    const age = 21;
    return (
        <>
            <div>Parent_Comp</div>
            <h1>UserName cua Parent_Comp: {userName}</h1>
            <Childrent_Comp userName={userName} age={age}></Childrent_Comp>
        </>

    );
}

export default Parent_Comp;

