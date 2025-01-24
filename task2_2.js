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

            let space = '  ';

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

  if (size !== 0){

    try{

      if (mode === "left") {

          leftTriangle(size);

      }

      else if (mode === "right") {

          rightTriangle(size);

      }

      else if (mode === "isosceles") {

          isoscTriangle(size);

      }

      else{

        throw new Error("Mode value is either empty or incorrect! Enter the correct mode. Try 'left' or 'right' or 'isosceles.")

        

      }

    }

    catch (ex) {

      console.error("ModeError!", ex.message);

    }

  }

  else{

    console.log("Shape size is ZERO. Enter a size that is not equal to ZERO.")

  }

}



// --- PROPER INPUT SHOULD HAVE OUTPUT ---/

//triangle(5,"right")

//triangle(-5,"right")

//triangle(5,"left")

//triangle(-5,"left")

//triangle(5,"isosceles")

//triangle(-5,"isosceles")

//triangle(5)

//triangle(-5)



//----- ERRONEOUS INPUT THROWS ERROR -----/

//triangle(5, "")

//triangle(0, "isosceles")

//triangle(3,"yasswenagyel")





//module.exports = { triangle };
