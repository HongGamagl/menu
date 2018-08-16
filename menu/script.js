var Header = (function () {
  'use strict';
  function Header() {
    this.init();
  }

  Header.prototype.init = function () {
    this.dropdownUser();
    this.dropdownSearch();
    this.dropdownMenu();
  }

  Header.prototype.dropdownUser = function () {
    var eleUser = document.querySelector("[data-toggle-user]");
    var contentUser = document.querySelector("[data-toggle-inneruser]");

    eleUser.addEventListener("click", function() {
      contentUser.classList.toggle("show-modal");
    });
  }

  Header.prototype.dropdownSearch = function() {
    var eleSearchBtn = document.querySelector("[data-toggle-search]");
    var contentSearch = document.querySelector("[data-toggle-inner]");
    var closeBtn = document.querySelector(".close");
    
    eleSearchBtn.addEventListener("click", function() {
      contentSearch.classList.toggle("show-modal");
    });

    closeBtn.addEventListener("click", function() {
      contentSearch.classList.toggle("show-modal");
    });
  }

  Header.prototype.dropdownMenu = function() {
    var dot = document.querySelector("[data-toggle-menu]");
    var contentmenu = document.getElementById("menures");
    var title = contentmenu.querySelector("[data-toggle-drop]");
    var closemenu = document.querySelector(".closemenu");
    

    dot.addEventListener("click", function() {
      contentmenu.classList.add("show-modal");
    });
    closemenu.addEventListener("click", function() {
      contentmenu.classList.remove("show-modal");
    });

    var menusub = document.querySelector("[data-toggle-sub]");
    var prev = document.querySelector("[data-toggle-prev]");
    
    menusub.addEventListener("click", function(e) {
      e.stopPropagation();
      title.classList.remove("hide");
      title.classList.add("show");
    });
    prev.addEventListener("click", function(e){
      e.stopPropagation();
      title.classList.add("hide");
      title.classList.remove("show");
    });

    var menuchild = document.querySelector("#subchild");
    var idTab = menuchild.id;
    var inforTab = idTab+"-content";
    menuchild.addEventListener("click", function() {
      inforTab.classList.add("showchild");
    });
  }

  return Header;
}());

// instance
window.addEventListener('DOMContentLoaded', function () {
  var mangageList = new Header();
});