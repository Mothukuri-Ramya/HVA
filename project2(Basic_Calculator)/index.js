let a=1;
while(a!=0){
    let x=+prompt("enter a number",'');
    let y=+prompt("enter a number",'');
    let choice=+prompt("Select one choice:\n1.Addition \n2.Subtraction \n 3.Multiplication \n 4.Division\n 5.Modulo division\n");
    switch(choice){
        case 1:
            result=x+y;
            document.write(`${x} + ${y} = ${result}`);
            document.write("<br>");
            break;
        case 2:
            result=x-y;
            document.write(`${x} - ${y} = ${result}`);
            document.write("<br>");
            break;
        case 3:
            result=x*y;
            document.write(`${x} * ${y} = ${result}`);
            document.write("<br>");
            break;
        case 4:
            result=x/y;
            document.write(`${x} / ${y} = ${result}`);
            document.write("<br>");
            break;
        case 5:
            result=x%y;
            document.write(`${x} % ${y} = ${result}`);
            document.write("<br>");
            break;
        default:
            document.write("please enter correct choice");
            document.write("<br>");
            break;
        
    }
}