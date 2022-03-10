import axios from "axios";
import { useEffect, useState } from "react";

const randomUserNames = ['Beau', 'Nestle', 'Dot', 'Onyx', 'Lei', 'Pepper', 'Mozzorella', 'Parm'];

const ScoreBoard = ({ score }) => {
    const [gameStates, setGameStates] = useState(null);
    const [userName, setUserName] = useState(null);


    const fetchData = async () => {
        const response = await axios.get('http://localhost:8000/scores')
        const data = Object.keys(response.data.data).map(item => response.data.data[item]);
        setGameStates(data);
    }

    console.log(gameStates);

    const saveData = async () => {
        axios.post('http://localhost:8000/addscore')
            .then((response) => { console.log(response) })
            .catch((error) => { console.log(error) })
    };

    useEffect(() => {
        fetchData()
        setUserName(randomUserNames[Math.floor(Math.random() * randomUserNames.length)]);
    }, []);

    console.log(userName);

    return (
        <div className="score-board">
            <h2>{userName} score: {score}</h2>
            <h2>High Scores</h2>
            {/* {gameStates ? .map(gameState)} */}
            <button onClick={saveData}>Save Score</button>
        </div>
    )
}

export default ScoreBoard;