function div(x, y) {
    if (y === 0) {
        console.error('Cannot divide by 0!');
    }
    return x / y;
} 

export default div;