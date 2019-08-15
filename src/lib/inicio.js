let Inicio = {

    render : async () => {
        let view =  /*html*/`
            <p>BIENVENIDO</p>
            <button id="btnLogOut" type="button">cerrar sesión</button>
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