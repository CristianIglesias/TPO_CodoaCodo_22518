let headersito
if(document.title==='Home'){
    headersito=`<header>
    <div class="container_menu"> 
        <a href="index.html"  class="logo">
            <img class="logo_menu" src="img/logo_violeta.png" alt="">
        </a>
        <input type="checkbox" id="menu_bar">
        <label for="menu_bar" class="check_btn">
            <i class="fas fa-bars"></i>
        </label>
        <div class="menu">
            <nav>
                <ul>
                    <li><a href="#" id="selected">Inicio</a></li>
                    <li><a href="html/tutorialesv1.html">Tutoriales</a></li>
                    <li><a href="html/aboutUs.html">Sobre Nosotros</a></li>
                    <li><a href="html/contact.html">Contacto</a></li>
                </ul>
            </nav>
        </div>
    </div>0
    </header>`;
} else if (document.title==='Tutoriales'){
    headersito=`<header>
    <div class="container_menu"> 

        <a href="../index.html"  class="logo">

            <img class="logo_menu" src="../img/logo_violeta.png" alt="">
        </a>
        <input type="checkbox" id="menu_bar">
        <label for="menu_bar" class="check_btn">
            <i class="fas fa-bars"></i>
        </label>
        <div class="menu">
            <nav>
                <ul>
                    <li><a href="../index.html">Inicio</a></li>
                    <li><a href="#" id="selected">Tutoriales</a></li>
                    <li><a href="aboutUs.html">Sobre Nosotros</a></li>
                    <li><a href="contact.html">Contacto</a></li>
                </ul>
            </nav>
        </div>
    </div>
    </header>`;
} else if (document.title==='Sobre Nosotros'){
    headersito=`<header>
    <div class="container_menu"> 
        <a href="../index.html"  class="logo">
            <img class="logo_menu" src="../img/logo_violeta.png" alt="">
        </a>
        <input type="checkbox" id="menu_bar">
        <label for="menu_bar" class="check_btn">
            <i class="fas fa-bars"></i>
        </label>
        <div class="menu">
            <nav>
                <ul>
                    <li><a href="../index.html">Inicio</a></li>
                    <li><a href="tutorialesv1.html">Tutoriales</a></li>
                    <li><a href="#" id="selected">Sobre Nosotros</a></li>
                    <li><a href="contact.html">Contacto</a></li>
                </ul>
            </nav>
        </div>
    </div>
    </header>`;
} else if (document.title==='Contacto'){
    headersito=`<header>
    <div class="container_menu"> 
        <a href="../index.html"  class="logo">
            <img class="logo_menu" src="../img/logo_violeta.png" alt="">
        </a>
        <input type="checkbox" id="menu_bar">
        <label for="menu_bar" class="check_btn">
            <i class="fas fa-bars"></i>
        </label>
        <div class="menu">
            <nav>
                <ul>
                    <li><a href="../index.html">Inicio</a></li>
                    <li><a href="tutorialesv1.html">Tutoriales</a></li>
                    <li><a href="aboutUs.html">Sobre Nosotros</a></li>
                    <li><a href="#" id="selected"">Contacto</a></li>
                </ul>
            </nav>
        </div>
    </div>
    </header>`;
}


const footercito= `<footer class="footer">
<div class="container">       
    <div class="autor">
        <small> Copyright &copy; 2022 <b> Codo a Codo </b></small>
    </div>
    <div class="social">
        <a class="icon-facebook" href=https://es-la.facebook.com><i class="fa-brands fa-facebook"></i></a>
        <a class="icon-twitter" href=https://twitter.com/?lang><i class="fa-brands fa-twitter"></i></a>
        <a class="icon-instagram" href=https://www.instagram.com><i class="fa-brands fa-instagram"></i></a>
        <a class="icon-mail" href="#"><i class="fa-solid fa-envelope"></i></a>
    </div>
</div>
</footer>	
`;

document.querySelector("#header").innerHTML=headersito;

document.querySelector("#footer").innerHTML= footercito;
