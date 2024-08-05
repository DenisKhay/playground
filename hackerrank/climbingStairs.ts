function climbStairs(n: number): number {
    let i = 0;
    const stepLength = 2;
    let variants = 0;
    while (i <= n) {
        if(i < stepLength) {
            i++;
            continue;
        }
        variants++;
        const spanLeft = i - stepLength;
        if(spanLeft >=stepLength) {
            variants = variants + climbStairs(stepLength);
        }
        i++;
    }
    return variants;
}
// console.log(climbStairs(1))
// console.log(climbStairs(2))
// console.log(climbStairs(3))
console.log(climbStairs(4))
console.log(climbStairs(5))
console.log(climbStairs(6))
