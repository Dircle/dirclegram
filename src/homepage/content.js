var yo = require('yo-yo');
var layout = require('../layout');
var card = require('../picture-card');



module.exports = function(pictures) {
  var el = yo`
  <div class="row">
    <div class="col s12 m10 offset-m1 l8 offset-l2">
       ${pictures.map(function(pic){
         return card(pic);
       })}
      </div>
      </div>
  `;

  return layout(el);
}
