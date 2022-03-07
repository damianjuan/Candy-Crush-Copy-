import axios from "axios";
import { useEffect } from "react";

const ScoreBoard = ({ score }) => {

    const fetchData = async () => {
        const response = await axios.get('http://localhost:8000/scores')
        console.log(response);
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className="score-board">
            <h2>{score}</h2>
        </div>
    )
}

export default ScoreBoard;