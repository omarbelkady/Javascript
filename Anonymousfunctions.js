<!DOCTYPE html>
<html>
<head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width">
      <title>Beats</title>
      <link href="style.css" rel="stylesheet" type="text/css" />
</head>
<body>
        <script>
                var calculation=function(value)
                {
                    var v=value;
                    v+=10;
                    v/=2;
                    return v;
                }


                function blueWorld(a,b)
                {
                    return a+b;
                }

                function calculation(value)
                {

                 var v=value;
                    v+=10;
                    v/=2;
                    return v;
                }
                var mint =calculation(60);

                var disc= blueWorld(5,6);
                var calculation=function(value)
                {
                  var v=value;
                  v+=10;
                  v/=2;
                  return v;
                };


                alert(disc);

                //we can make variables behave like a function
                function subtract(firstNum, secondNum)
                {
                  return secondNum-firstNum;
                }
                var sub=subtract;//this stores the function capacity in the sub variable
                var subOne=subtract(3,7);//this stores the value in the variable not the function
                var sub2=sub(8,9);
                alert(sub2);
      </script>
</body>
</html>
