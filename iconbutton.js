exports.IconButton = IconButton;
function IconButton(icon, title, onClick) {
  this.el = document.createElement("a");
  this.el.className = "iconbutton";
  this.el.setAttribute("title", title);
  var self = this;
  this.el.addEventListener("click", function (evt) {
    if (this.disabled) return;
    return onClick(evt);
  }, false);
  var iconEl = document.createElement("i");
  iconEl.className = icon;
  this.el.appendChild(iconEl);
}

IconButton.prototype.resize = function (width, height) {
  this.el.style.width = (width - 6) + "px";
  this.el.style.height = (height - 2) + "px";
};

IconButton.prototype.enableIf = function (condition) {
  this.disabled = !condition;
  if (condition) {
    this.el.classList.remove("disabled");
  }
  else {
    this.el.classList.add("disabled");
  }
}