exports.IconButton = IconButton;
function IconButton(icon, title, onClick) {
  this.el = document.createElement("a");
  this.el.className = "iconbutton";
  this.el.setAttribute("title", title);
  this.el.addEventListener("click", onClick, false);
  var iconEl = document.createElement("i");
  iconEl.className = icon;
  this.el.appendChild(iconEl);
}

IconButton.prototype.resize = function (width, height) {
  this.el.style.width = (width - 6) + "px";
  this.el.style.height = (height - 2) + "px";
};