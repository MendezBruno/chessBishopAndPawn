const challengeFunction = function(bishop, pawn){
    const diffx = bishop.charCodeAt(0) - pawn.charCodeAt(0);
    const diffy = Number(bishop.charAt(1)) - Number(pawn.charAt(1));
    return Math.abs(diffx) === Math.abs(diffy);
}

module.exports = challengeFunction
