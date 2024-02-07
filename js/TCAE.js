document.addEventListener("DOMContentLoaded", function() {
    var tabs = document.querySelectorAll(".tab");
    tabs.forEach(function(tab) {
      tab.addEventListener("click", function() {
        var tabId = this.getAttribute("data-tab");
        var infoTabs = document.querySelectorAll(".info");
        infoTabs.forEach(function(infoTab) {
          if (infoTab.getAttribute("id") === tabId) {
            infoTab.style.display = "block";
          } else {
            infoTab.style.display = "none";
          }
        });
      });
    });
  });