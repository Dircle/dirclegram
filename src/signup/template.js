var yo = require('yo-yo');
var landing = require('../landing');

var signupForm = yo`<div class="col s12 l7">
	<div class="row">
		<div class="sign-box">
			<h3 class="dircless">dirclegram. </h3>
			<form class="sign-form" >
				<h5>Registrate para ver fotos, <strong>elegantes.</strong></h5>
				<div class="section">
					<a href="/signup" class="btn btn-fb hide-on-med-and-down"> Log In with  <i class="fa fa-facebook-square" aria-hidden="true"></i></a>
					<a href="/signup" class="btn btn-fb hide-on-large-only">Log In F.</a>
				</div>
				<div class="divider"></div>
				<div class="section">
					<input type="email" name="email" placeholder="Correo electrónico.">
					<input type="text" name="name" placeholder="Nombre completo.">
					<input type="text" name="username" placeholder="Nombre de usuario.">
					<input type="password" name="password" placeholder="Contraseña.">
					<button type="submit" class="btn waves-effect waves-light btn-signup">Regístrate.</button>
				</div>
			</form>
		</div>
	</div>
	<div class="row">
		<div class="login-box">
				<span >¿Tienes una cuenta? <a href="/signin">Entrar.</a></span>
		</div>
	</div>
</div>`;


module.exports = landing(signupForm);
