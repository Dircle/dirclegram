var yo = require('yo-yo');

module.exports = function layout(content){
		return yo`<div class="content">
			<div class="container timeline">
						${content}
			</div>
		</div>
		`;

}
