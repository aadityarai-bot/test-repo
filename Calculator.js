function calculate(operation) {
    var num1 = Number(document.getElementById("num1").value);
    var num2 = Number(document.getElementById("num2").value);

    if (Number.isNaN(num1) || Number.isNaN(num2)) {
        document.getElementById("result").value = "Enter valid numbers";
        return;
    }

    var result;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "sub":
            result = num1 - num2;
            break;
        case "mul":
            result = num1 * num2;
            break;
        case "div":
            if (num2 === 0) {
                document.getElementById("result").value = "Error: Division by zero";
                return;
            }
            result = num1 / num2;
            break;
        default:
            return;
    }

    document.getElementById("result").value = result;
}
