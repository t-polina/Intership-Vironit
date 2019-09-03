function quadraticEquation(a = 0, b = 0, c = 0) {
    if (a === 0) {
        return -c / b;
    }
    let D = b * b - 4 * a * c;
    if (D < 0) {
        let x1 = -b / (2 * a);
        let x2 = Math.sqrt(-D) / (2 * a);
        return `Корени уравнения ${x1.toFixed(3)} ± ${x2.toFixed(3)}i`;
    }
    else if (D === 0) {
        let x1 = -b / (2 * a);
        return `Корень уравнения ${x1.toFixed(3)}`;
    }
    else {
        let x1 = (-b + Math.sqrt(D)) / (2 * a);
        let x2 = (-b - Math.sqrt(D)) / (2 * a);
        return `Первый корень уравнения ${x1.toFixed(3)}\nВторой корень уравнения ${x2.toFixed(3)}`;
    }
}
