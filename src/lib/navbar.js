let Navbar = {    
    render : async () => { 
        let view = /*html*/`
            <nav id = "navbar">
                <a href = "./#/"><img src = "imgs/logo-rojo.png" id = "logo"></a>
                <a href = "./#/register" class = "btn-start"> Crea tu cuenta</a>
                <a href = "./#/login" class = "btn-start">Inicia sesión</a>
            </nav>
        `
        return view
    }
    ,after_render : async () => {}
}

export default Navbar;