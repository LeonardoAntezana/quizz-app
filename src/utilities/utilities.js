export const parseTime = (num1, num2) => {
    let numSimple;
    const res = Math.abs(num1 - num2);
    switch(res.toString().length){
        case 4:{
            numSimple = `00:0${Math.round(res / 1000)} seg`
            break;
        }
        case 5:{
            if(res > 60000){
                let numTemp = parseFloat(res / 60000).toString()
                numSimple = `0${numTemp.charAt(0)}:${numTemp.charAt(2)}${numTemp.charAt(3)}`
            }
            else(
                numSimple = `00:${Math.round(res / 1000)}`
            )
            break;
        }
        case 6:{
            if(res > 600000){
                let numTemp = parseFloat(res / 60000).toString();
                numSimple = `${numTemp.charAt(0)}${numTemp.charAt(1)}:${numTemp.charAt(3)}${numTemp.charAt(4)}`
            }
            else{
                let numTemp = parseFloat(res / 60000).toString()
                numSimple = `0${numTemp.charAt(0)}:${numTemp.charAt(2)}${numTemp.charAt(3)}`
            }
        }
    }
    return numSimple
  } 