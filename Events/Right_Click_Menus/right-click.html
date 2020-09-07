<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Right-Click Menus</title>
    <meta name="viewport" content="width=device-width">
    <style>
        *{
            padding: 0;
            margin: 0;
        }
        *, *::before, *::after {
            box-sizing: inherit;
        }
        html{
            font-size: 16px;
            font-family: sans-serif;
            line-height: 1.5;
            -moz-text-size-adjust: 100%;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            text-size-adjust: 100%;
            box-sizing: border-box;
        }
        body{
            padding: 1rem;
        }
        h1, h2, p, div{
            padding: 1rem 2rem;
        }
        #box{
            border: 1px solid #999;
        }
        .menu{
            width: 12rem;
            height: 4.5rem;
            background-color: #f4f4f4;
            color: #333;
            border: 1px solid #aaa;
            box-shadow: 2px 2px 2px #999;
            border-radius: 0.2rem;
            list-style: none;
            position: fixed;
        }
        .menu.off{
            top: -200%;
            left: -200%;
        }
        .menu-item{
            height: 1.5rem;
            line-height: 1.5rem;
            font-size: 1rem;
            font-weight: 100;
            padding: 0 1rem;
            cursor: pointer;
        }
        .menu-item:hover,
        .menu-item:active{
            color: #000;
            font-weight: 500;
        }
    </style>
    <!--
    
    -->
</head>
<body>
    <h1>Right-Click Menus</h1>
    <h2>`contextmenu` Event</h2>
    <p>Right-click on the text below.</p>
    <div id="box">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed alias iusto iure est veritatis ipsum voluptas nesciunt impedit, quam, distinctio nulla illo obcaecati expedita libero, fugiat porro, unde voluptate rem.</div>
    
    <ul class="menu">
        <li class="menu-item" id="red">Red Item</li>
        <li class="menu-item" id="gold">Gold Item</li>
        <li class="menu-item" id="green">Green Item</li>
    </ul>
    
    <script>
        let menu = null;
        document.addEventListener('DOMContentLoaded', function(){
            //make sure the right click menu is hidden
            menu = document.querySelector('.menu');
            menu.classList.add('off');
            
            //add the right click listener to the box
            let box = document.getElementById('box');
            box.addEventListener('contextmenu', showmenu);
            
            //add a listener for leaving the menu and hiding it
            menu.addEventListener('mouseleave', hidemenu);
            
            //add the listeners for the menu items
            addMenuListeners();
        });
        
        function addMenuListeners(){
            document.getElementById('red').addEventListener('click', setColour);
            document.getElementById('gold').addEventListener('click', setColour);
            document.getElementById('green').addEventListener('click', setColour);
        }
        
        function setColour(ev){
            hidemenu();
            let clr = ev.target.id;
            document.getElementById('box').style.backgroundColor = clr;
        }
        
        function showmenu(ev){
            //stop the real right click menu
            ev.preventDefault(); 
            //show the custom menu
            console.log( ev.clientX, ev.clientY );
            menu.style.top = `${ev.clientY - 20}px`;
            menu.style.left = `${ev.clientX - 20}px`;
            menu.classList.remove('off');
        }
        
        function hidemenu(ev){
            menu.classList.add('off');
            menu.style.top = '-200%';
            menu.style.left = '-200%';
        }
    </script>
</body>
</html>