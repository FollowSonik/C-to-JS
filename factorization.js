function printNumberFactors(x) {
    console.log("Number factors:");
    let divisor = 2;
    while (x !== 1) {
        if (x % divisor === 0) {
            console.log(divisor);
            x /= divisor;
        } else {
            divisor += 1;
        }
    }
}

function main() {
    const x = 1024;
    printNumberFactors(x);
    return 0;
}

main();