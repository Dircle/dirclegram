var yo = require('yo-yo');
var translate = require('../translate');

module.exports = function (pictures) {

  var el = render(pictures);

  function render(pic)
  {
    return yo`
    <div class="timeline">
    <div class="card">
      <div class="card-image">
        <img class="activator" src="${pic.url}" />
      </div>
      <div class="card-content">
        <a href="/user/${pic.user.username}" class="title">
          <img src="${pic.user.avatar}" class="avatar circle" />
          <span class="username">${pic.user.username}</span>
        </a>
        <small class="right time">${translate.date.format(pic.created_at)}</small>
        <p>
          <a href="#" class="left" onclick=${like}><i class="fa ${pic.liked ? 'fa-heart' : 'fa-heart-o'}" aria-hidden="true"></i></a>
          <span class="left likes ">${translate.message('likes',{likes : pic.likes})}</span>
        </p>
      </div>
    </div>
    </div>
    `;
  }

  function like() {

    pictures.liked = !pictures.liked || false;

    pictures.likes += pictures.liked ? 1 : -1;

    var newEl = render(pictures);

    yo.update(el,newEl);

    return false;
  }

  return el;
}
