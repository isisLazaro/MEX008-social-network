let Login = {
    render : async () => {
        let view = /* html */ `
            <figure class = "page-background">
                <section class = "form-background">
                    <h1>Inicia Sesión</h1>
                    <p>Conectate con tu e-mail o con tu cuenta de google o facebook</p>
                    <div id = "firebaseui-auth-container"></div>
                </section>
            </figure>
        `
        return view
    },
    after_render : async () => {

        // Initialize the FirebaseUI Widget using Firebase.
        //let ui = new firebaseui.auth.AuthUI(firebase.auth());
        // The start method will wait until the DOM is loaded.
        //ui.start('#firebaseui-auth-container', uiConfig);
        let ui = firebaseui.auth.AuthUI.getInstance();
        if (!ui) {
        ui = new firebaseui.auth.AuthUI(firebase.auth());
        }
        ui.start('#firebaseui-auth-container', uiConfig);
    }

}

export default Login;
