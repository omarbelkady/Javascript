<!DOCTYPE html>
<html>
<head>
</head>
<body>
      <script>
               function sum(firstNum,secondNum)
               {
                 return firstNum+secondNum;
               }

               function calculate(firstNum,secondNum, calculator)
               {
                 return calculator(firstNum,secondNum);
               }

               var cal=calculate(3,9,sum);
               alert(cal);
      </script>
</body>
</html>
