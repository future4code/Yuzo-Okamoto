export const logicaEx1 = () => {
    const array = [0,1,2,3,4,5];

    // for of
    console.log(`Percorrendo array com for of: `);
    for (let num of array) {
        console.log(num);
    }

    // forEach()
    console.log(`Percorrendo array com forEach(): `);
    const sweepArray = (num) => {
        console.log(num);
    }
    array.forEach(sweepArray);

    // filter()
    console.log(`Percorrendo array com filter(): `);
    array.filter(sweepArray);
}
