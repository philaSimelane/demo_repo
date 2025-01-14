function square(size, pattern = "#") {
    const row = pattern.repeat(size);
    for (let i = 0; i < size; i++) {
        console.log(row);
    }
}

square(5);
module.exports = { square };
