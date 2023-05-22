import React from 'react';
import "./css/characters.css"
import "./css/font.css"
import "./css/base.css"
import boy_blackhair from './img/boy_blackhair.png'
import boy_brownhair from './img/boy_brownhair.png'
import girl_longhair from './img/girl_longhair.png'
import girl_shorthair from './img/girl_shorthair.png'
import {useState} from 'react';

function Characters() {
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const selectVisible = (id) => {
        let selects = document.getElementsByClassName("select");
        let selected = document.getElementsByClassName(id)[0];
        let img = document.getElementById(id);
        let imgs = document.getElementsByTagName("img");
        for (let i = 0; i < 4; i++) {
            selects[i].style.visibility = "hidden";
            imgs[i].style.backgroundColor = "transparent";
            imgs[i].style.boxShadow = "none";
        }

        img.style.backgroundColor = "#FDD0D0";
        img.style.boxShadow = "0 0 0 3px #FFA8A8 inset";
        selected.style.visibility = "visible";
        setSelectedCharacter(id); // 선택된 캐릭터의 아이디를 상태로 저장
    };

    const handleSubmit = () => {
        console.log("Selected Character ID:", selectedCharacter);
    };

    return (
        <body>
            <div className="char-container">
                <div className="title">characters</div>
                <div className="div-nontitle">
                    <div className="characters-div">
                        <div className="img-select-div">
                            <img
                                id="boy_blackhair"
                                src={boy_blackhair}
                                alt="boy_blackhair"
                                onClick={() => selectVisible("boy_blackhair")}
                            />
                            <div className="select boy_blackhair">select</div>
                        </div>
                        <div className="img-select-div">
                            <img
                                id="boy_brownhair"
                                src={boy_brownhair}
                                alt="boy_brownhair"
                                onClick={() => selectVisible("boy_brownhair")}
                            />
                            <div className="select boy_brownhair">select</div>
                        </div>
                        <div className="img-select-div">
                            <img
                                id="girl_shorthair"
                                src={girl_shorthair}
                                alt="girl_shorthair"
                                onClick={() => selectVisible("girl_shorthair")}
                            />
                            <div className="select girl_shorthair">select</div>
                        </div>
                        <div className="img-select-div">
                            <img
                                id="girl_longhair"
                                src={girl_longhair}
                                alt="girl_longhair"
                                onClick={() => selectVisible("girl_longhair")}
                            />
                            <div className="select girl_longhair">select</div>
                        </div>
                    </div>
                    <button onClick={handleSubmit}>submit</button>
                </div>
            </div>
            <script src="./js/characters.js"></script>
        </body>
    );
}

export default Characters;