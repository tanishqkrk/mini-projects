function result(){
    let englishMarks = Number(prompt("Enter english marks: "));
    let mathMarks = Number(prompt("Enter math marks: "));
    let scienceMarks = Number(prompt("Enter science marks: "));

    let marksAverage = (englishMarks+mathMarks+scienceMarks)/3;
    console.log(marksAverage);
    if (marksAverage >= 90 && marksAverage<=100){
        console.log('A');
    }
    else if (marksAverage >= 80 && marksAverage <= 89){
        console.log('B');
    }
    else if (marksAverage>=70 && marksAverage <= 79){
        console.log('C');
    }
    else if (marksAverage>=60 && marksAverage<=69){
        console.log('D');
    }
    else if (marksAverage>=0 && marksAverage <= 59){
        console.log('F');
    }
    else{
        console.log('Enter correct marks!');
    }
}

console.log(result());