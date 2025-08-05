let calculation = '';

const buttons = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' + ', ' - ', ' * ', ' / ', ' . '];

buttons.forEach((char) => {
    document.getElementById(char).addEventListener("click", function () {
        calculation += char;
        console.log(calculation);
    });
});

document.getElementById("equal").addEventListener("click", function () {
    try {
        let result = eval(calculation);
        console.log(calculation + ' = ' + result);
        calculation = result.toString();

    } catch (error) {
        console.error("Invalid expression:", error);
        calculation = '';
    }
});

document.getElementById("clear").addEventListener("click", function () {
    calculation = '';
    console.clear();
});