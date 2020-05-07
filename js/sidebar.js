function theopenNav() {
  document.getElementById("mySidebar").style.width = "350px";
  document.getElementById("main").style.marginLeft = "250px";
}

function thecloseNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main").style.marginLeft= "0";
}
// sidebar menu


    (function() {
  		var menuEl = document.getElementById('ml-menu2'),
  			mlmenu = new MLMenu(menuEl, {
  				// breadcrumbsCtrl : true, // show breadcrumbs
  				// initialBreadcrumb : 'all', // initial breadcrumb text
  				backCtrl : false, // show back button
  				// itemsDelayInterval : 60, // delay between each menu item sliding animation
  				onItemClick: loadDummyData // callback: item that doesn´t have a submenu gets clicked - onItemClick([event], [inner HTML of the clicked item])
  			});


  		// simulate grid content loading
  		var gridWrapper = document.querySelector('.content');

  		function loadDummyData(ev, itemName) {
  			ev.preventDefault();

  			// closeMenu();
  			// gridWrapper.innerHTML = '';
  			classie.add(gridWrapper, 'content--loading');
  			setTimeout(function() {
  				classie.remove(gridWrapper, 'content--loading');
  				gridWrapper.innerHTML = '<ul class="products">' + dummyData[itemName] + '<ul>';
  			}, 700);
  		}
  	})();
