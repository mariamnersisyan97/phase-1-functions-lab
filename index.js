function distanceFromHqInBlocks(start) {
    if (start > 42)
        return start - 42;
    else (start < 42)
        return 42 - start;
}

function distanceFromHqInFeet(startFeet) {
    if (startFeet > 42)
        return (startFeet - 42) * 264;
    else (startFeet < 42)
    return (42 - startFeet) * 264;
}

function distanceTravelledInFeet(starting, destination) {
    if (starting < destination)
        return (destination - starting) * 264;
    else (starting > destination)
        return (starting - destination) * 264;
}

function calculatesFarePrice(start, destination) {
    let blockDistance = Math.abs(start - destination);
    let distanceTravelled = (blockDistance * 264);
    let flatFare = (distanceTravelled - 400)* 0.02;
    if (distanceTravelled < 400){
        return 0;
    } else if (distanceTravelled > 400 && distanceTravelled <2000){
        return flatFare;
    } else if (distanceTravelled > 2000 && distanceTravelled <= 2500){
        return 25;
    } else if (distanceTravelled > 2500){
        return 'cannot travel that far';
    }
};

