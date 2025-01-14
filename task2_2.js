function leftTriangle(size) {
    if (size > 0) {
        for (let i = 1; i <= size; i++) {
            let str = "#";
            console.log(str.repeat(i));
        }
    }
    else {
        for (let i = Math.abs(size); i >= 1; i--) {
            let str = "#";
            console.log(str.repeat(i));
        }
    }
}

function rightTriangle(size) {
    if (size > 0) {
        for (let i = 1; i <= size; i++) {
            let str = "#";
            let space = ' ';
            console.log(space.repeat((size - i)) + str.repeat(i));
        }
    }
    else {
        for (let i = Math.abs(size); i >= 1; i--) {
            let str = "#";
            let space = ' ';
            console.log(space.repeat(Math.abs(size) - i) + str.repeat(i));
        }
    }
}

function isoscTriangle(size) {
    if (size > 0) {
        for (let i = 1; i <= size; i++) {
            let str = "#";
            let space = ' ';
            console.log(space.repeat((size - i)) + str.repeat(i * 2 - 1));
        }
    }
    else {
        for (let i = Math.abs(size); i >= 1; i--) {
            let str = "#";
            let space = ' ';
            console.log(space.repeat((Math.abs(size) - i)) + str.repeat(i * 2 - 1));
        }
    }

}

function triangle(size, mode = "left") {
    if (mode === "left") {
        leftTriangle(size);
    }
    else if (mode === "right") {
        rightTriangle(size);
    }
    else if (mode === "isosceles") {
        isoscTriangle(size);
    }
}

module.exports = { triangle };
