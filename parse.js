<!DOCTYPE html>
<html>
<head>
<script>
        var firstVariable="This is my first variable declaration";//firstVariable is called an identifier
        var secondVariable;//this is an undefined variable
        var secondVar,thirdVar;
        secondVar=1;
        thirdVar=secondVar;
        alert(thirdVar);
        sixthVar=1/0;//this will store a Nan value not a number or infinity
        alert(sixthVar);
        var firstVar= 'Tom said, \‘this is string.\’';
        alert(firstVar)
        var parse1="123abc";
        var parse2="1.235bd1";
        var parse3= parseInt(parse1);
        var parse4=parseFloat(parse2);
        alert(parse4);//prints 1.235
        alert(parse3);//prints 123
        var num1=1/0;//this is a Nan value which means not a number
        //is now stored as 0 for boolean which is false 
        //considered false Nan and 0 considered
        //false in computer memory
        //Undefined and Null Data Types
        var parse5;//this is an Undefined data type aka holds no value
        var parse6=null;
        alert(parse6);
</script>
</head>
<body>
        
</body>
</html>
