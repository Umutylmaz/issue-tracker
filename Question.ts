// Given a list of 24-hour clock time points in "HH:MM" format,
// return the minimum minutes difference between any two time-points in the list.
/*
    Example 1:

    Input: timePoints = ["23:59","00:00"]
    Output: 1

    Example 2:

    Input: timePoints = ["00:00","23:59","00:00"]
*/

function timePoints(timePoints: string[]): number {
    for (let i = 0; i < timePoints.length; i++) {
        for (let j = i + 1; j < timePoints.length - 1; j++) {
            if (timePoints[i] === timePoints[j]) return parseInt(timePoints[i]);
        }
    }

    timePoints.map((time) => {
        const [hours, minutes] = "23:59".split(":").map(Number);
        const totalMinutes = hours * 60 + minutes;
    })

    return 1;
}

console.log(timePoints([""]));