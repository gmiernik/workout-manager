import { useState, useEffect } from "react";

const useWorkout = () => {

    const [exercises, setExercises] = useState<Array<Exercise>>([]);

    useEffect(() => console.debug(exercises), [exercises]);

    function addExercise(type: string, series: number[], difficulty: number) {
        let exercise = {
            type: type,
            series: series,
            difficulty: difficulty
        };
        setExercises([...exercises, exercise]);
    }

    return [exercises, addExercise] as const;
}

export default useWorkout;