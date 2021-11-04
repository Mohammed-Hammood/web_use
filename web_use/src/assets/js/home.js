import {useEffect} from 'react';

function HomePage(){
    let fieldSwitch = (event, move)=>{
        const container = document.getElementById("form");
        const inputs = container.querySelectorAll(".input-field");
        let currentInputId = parseInt(event.target.id);
        if(move === "next"){
            if(currentInputId >= inputs.length){currentInputId = 1;}
            else{currentInputId= currentInputId +1 ;}
            if(currentInputId > 0){document.getElementById((currentInputId).toString()).focus();}
        }
        else if (move === "previous"){
            if(currentInputId === 1){currentInputId = inputs.length;}
            else{currentInputId = currentInputId - 1 ;}
            if(currentInputId > 0){document.getElementById((currentInputId).toString()).focus();}
        }
    }
    useEffect(()=>{

        document.addEventListener("keyup", (event)=>{
            event = event || window.event;

            if(event.code === "Enter" ){
                fieldSwitch(event, "next");
            }
            if (event.code === "ArrowUp"){
               fieldSwitch(event, "previous");
            }
            if (event.code === "ArrowDown"){
               fieldSwitch(event, "next");
            }
        });
    }, []);

    return (
        <div className="home-container">
            <div className="forms-container" >
               <form method="POST" action="." encType="X-" id="form">
                        <div className="first-row" >
                            <select className="input-field" id="1">
                                <option value="Javascript">Javascript</option>
                                <option value="Python">Python</option>
                                <option value="C++">C++</option>
                                <option value="C">C</option>
                                <option value="Perl">Perl</option>
                                <option value="Ruby">Ruby</option>
                                <option value="Swift">Swift</option>
                                <option value="Objective-C">Objective-C</option>
                                <option value="Kotlin">Kotlin</option>
                                <option value="Java">Java</option>
                                <option value="Rust">Rust</option>
                                <option value="C#">C#</option>
                                <option value="PHP">PHP</option>
                                <option value="R">R</option>
                                <option value="Go">Go</option>
                                <option value="Dart">Dart</option>
                                <option value="Typescript">Typescript</option>
                                <option value="Visual Basic">Visual Basic</option>
                                <option value="Lua">Lua</option>
                                <option value="Lisp">Lisp</option>
                                <option value="Scratch">Scratch</option>
                            </select>
                            <input className="input-field" type="text" id="2" />                       
                            <input className="input-field" type="text" id="3" />
                        </div>
                        <div className="second-row">
                            <div className="first-column">
                                <textarea className="input-field" id="4" ></textarea>
                            </div>
                            <div className="second-column">
                                <input className="input-field" type="text" id="5" />
                                <select className="input-field" id="6">
                                    <option value="Web development">Web development</option>
                                    <option value="Mobile development">Mobile development</option>
                                    <option value="Desktop development">Desktop development</option>
                                    <option value="Machine Learning">Machine Learning</option>
                                </select>
                                <input className="input-field" type="text" id="7" />
                            </div>
                        </div>
               </form>
            </div>
        </div>
    );
}

export default HomePage;