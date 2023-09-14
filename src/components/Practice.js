const Practice = () => {


    const radius = [2, 1, 3, 4];

    const area = function (radius) {
        return Math.PI * radius * radius;
    }
    const daimeter = function (radius) {
        return 2 * radius;
    }




    const calculation = function (arr, logic) {
        const output = [];
        for (let i = 0; i < arr.length; i++) {
            output.push(logic(arr[i]));
        }
        return output;
    }

    console.log(radius.map(area));

    console.log("area", calculation(radius, area));
    console.log("daimeter", calculation(radius, daimeter));
}
export default Practice