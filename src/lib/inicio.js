let Inicio = {

    render : async () => {
        let view =  /*html*/`
            <p>BIENVENIDO</p>
            <button id="btnLogOut" type="button">cerrar sesión</button>

            <div class="menu"> <i class="fas fa-user-circle fa-2x"></i>
                <i class="fas fa-user-friends fa-2x"></i>
                <i class="fas fa-heart fa-2x"></i>
                <i class="fas fa-shopping-cart fa-2x"></i>
                <i class="fas fa-search fa-2x"></i>
            </div>

        <!-- publicaciones -->
    
           <div class="container-post">
    
            <div class="row">
                <div class="col s12 m7">
                    <div class="card">
                         <p id="postPrint">aqui va la publicacion hecha</p>
                    </div>
                </div>
            </div>
    
            <div class="row">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-head title"> <i class="fas fa-user-circle fa-3x"></i>
                            <p>Proveedor</p>
                        </div>
                        <div class="card-image">
    
                        </div>
                        <div class="card-content">
                        <textarea id="publiIntrodu" name="textarea" rows="40" cols="110">Escribe tu publicación</textarea>
                        </div>
                        <div class="menu card-footer">
                            <button class="btn-post">Publicar</button>
                        
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col s12 m7">
                    <div class="card">
                        <div class="card-head title"> <i class="fas fa-user-circle fa-3x"></i>
                            <p>Usuario N</p>
                        </div>
                        <div class="card-image">
                            <img src="img/novias.png">
                        </div>
                        <div class="card-content">
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean facilisis, massa vitae rhoncus sollicitudin, et fringilla arcu nisi vitae orci.</p>
                        </div>
                        <div class="menu card-footer"> <i class="fas fa-heart fa-2x"></i>
                            <i class="fas fa-comment fa-2x"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `
        return view
    }
    , after_render: async () => {
        const btnLogOut = document.getElementById("btnLogOut");

        const logOut = () => firebase.auth().signOut();

        const logOutOnClick = (evt) => {
            evt.preventDefault();
            if (firebase.auth().currentUser) {
                logOut()
                    .then(() => {
                    alert('Hasta Pronto');
                    location.hash = '/login';
                    });
            } else {
            location.hash = '/';
            }
        
        };

        btnLogOut.addEventListener('click', logOutOnClick);
    }
}
export default Inicio;