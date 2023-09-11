/**
 * 
 * @param {Array<{name: string, point: number}>} data
 * @returns {{red: Array<string>, blue: Array<string>}}
 */
function teamSeparate(data) {
    let redPoint = 0;
    let bluePoint = 0;
    let redTeam = [];
    let blueTeam = [];
    const maxPoint = data.reduce((s,e) => s + e.point, 0) / 2;

    data.sort((a,b) => b.point - a.point);
    for(const {name, point} of data) {
        if(redPoint + point > maxPoint || bluePoint + point > maxPoint) {
            if(redPoint > bluePoint) {
                blueTeam.push(name);
                bluePoint += point;
            } else {
                redTeam.push(name);
                redPoint += point;
            }
        }
        if(redPoint + point <= maxPoint && bluePoint + point <= maxPoint) {
            if(Math.random() > 0.5) {
                blueTeam.push(name);
                bluePoint += point;
            } else {
                redTeam.push(name);
                redPoint += point;
            }
        }
    }
    const res = {
        red: redTeam,
        blue: blueTeam
    };
    return res;
}