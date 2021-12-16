type Workout = {
    performedOn: Date,
    durationInMinutes: number,
    exercises: Exercise[],
    notes: string
}

type Exercise = {
    type: string,
    series: number[],
    difficulty: number
}