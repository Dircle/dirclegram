var yo = require('yo-yo');

var main = yo`<nav class="header">
<ul id="drop-user" class="dropdown-content">
	<li><a href="#!">Logout.</a></li>
</ul>
	<div class="container">
		<div class="nav-wrapper">
  		<a href="#" class="brand-logo  dircless">dirclegram.</a>
  			<ul id="nav-mobile" class="right s">
					<li><a href="#" class="dropdown-button" data-hover="true" data-beloworigin="true" data-activates="drop-user" ><i class="material-icons head-user">person_pin</i></a></li>
  			</ul>
		</div>
	</div>
</nav>
`;

module.exports = main;
