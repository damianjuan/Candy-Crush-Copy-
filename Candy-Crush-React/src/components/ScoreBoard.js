import axios from "axios";
import { useEffect, useState } from "react";

const ScoreBoard = ({ score }) => {
    const [data, setData] = useState(null);


    const fetchData = async () => {
        const response = await axios.get('http://localhost:8000/scores')
        console.log(response.data.data);
        setData(response.data.data);
    }

    //console.log(data);

    const saveData = async () => {
        axios.post('http://localhost:8000/addscore')
            .then((response) => { console.log(response) })
            .catch((error) => { console.log(error) })
    };

    useEffect(() => {
        fetchData()
    }, []);

    return (
        <div className="score-board">
            <h2>{score}</h2>
            <button onClick={saveData}>Save Score</button>
        </div>
    )
}

export default ScoreBoard;