*{
    margin:0;
    padding:0;
    box-sizing:border-box;
}

body{
    font-family:Arial, sans-serif;
    background:linear-gradient(135deg, #74ebd5, #9face6);
    display:flex;
    justify-content:center;
    align-items:center;
    min-height:100vh;
}

.container{
    width:90%;
    max-width:1100px;
    background: #98FB98;
    border-radius:15px;
    overflow:hidden;
    box-shadow:0 10px 25px rgba(0,0,0,0.2);
}

.top-bar{
    background:#333;
    padding:15px;
}

.dot{
    height:14px;
    width:14px;
    border-radius:50%;
    display:inline-block;
    margin-right:8px;
}

.red{background:red;}
.yellow{background:gold;}
.green{background:limegreen;}

.content{
    text-align:center;
    padding:40px 20px;
}

.weather-img{
    width:120px;
    margin-bottom:20px;
}

h1{
    font-size:50px;
    margin-bottom:30px;
    text-align:center;
}

input{
    width:300px;
    padding:12px;
    border:none;
    border-radius:8px;
    font-size:18px;
    max-width: 300px;
}

button{
    padding:12px 30px;
    border:none;
    border-radius:25px;
    background:#ff944d;
    font-size:18px;
    cursor:pointer;
    min-width:150px;
}

button:hover{
    color: white;
    background-color: green;
}

form{
    display:flex;
    justify-content:center;
    align-items:center;
    gap:10px;
    flex-wrap:wrap;
}

#result{
    margin-top:25px;
    font-size:22px;
    word-wrap:break-word;
    line-height:1.8;
}

.footer{
    margin-top:30px;
    color:#444;
}



/* Tablet */
@media (max-width: 768px){

    h1{
        font-size:40px;
    }

    .weather-img{
        width:100px;
    }

    #result{
        font-size:18px;
    }
}

/* Mobile */
@media (max-width: 480px){

    .container{
        width:95%;
    }

    .content{
        padding:25px 15px;
    }

    h1{
        font-size:32px;
    }

    .weather-img{
        width:80px;
    }

    input{
        max-width:100%;
    }

    button{
        width:100%;
    }

    #result{
        font-size:16px;
    }

    #result h2{
        font-size:22px;
    }
}
