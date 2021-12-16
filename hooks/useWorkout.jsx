import { useState, useEffect } from "react";

export default function useWorkout() {

    const [exercises, setExercises] = useState([]);

    useEffect(() => console.debug(exercises), [exercises]);

    function addExercise(type, series, difficulty) {
        let exercise = {
            type: type,
            series: series,
            difficulty: difficulty
        };
        setExercises([...exercises, exercise]);
    }

    return [exercises, addExercise];
}