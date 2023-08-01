setTimeout(function() {
   var nameSearch = document.getElementsByClassName("search-box-input");
   nameSearch[nameSearch.length-1].placeholder = "Cari kata kunci...";

   var nameSearchPareng = nameSearch[nameSearch.length-1].parentElement.parentElement.parentElement;
   var nameSearchPar = nameSearch[nameSearch.length-1].parentElement.parentElement;
   var button = document.createElement('button');
   button.type = 'button';
   button.className = "search-box-button icon icon--more-vertical textfield__icon hidden-sm-up";
   nameSearchPareng.append(button);
   nameSearchPareng.style.display = 'flex';
   nameSearchPar.style.flex = 1;

   var functionShowMobile = function() {
      var checklistWrapper = document.getElementsByClassName('checklist-filter-wrapper');
      checklistWrapper[0].style.transform = "translate3d(0%, 0, 0)";
   };
   button.addEventListener('click', functionShowMobile);

   var parentText = nameSearchPareng.parentElement.parentElement;
   var parentH3Div = document.createElement('div');
   parentH3Div.style.padding = 'unset';
   parentH3Div.className = 'col-md-12';
   var parentH3text = document.createElement('h3');
   parentH3text.innerHTML = 'Baca juga informasi menarik lainnya dari Zurich';
   parentH3Div.append(parentH3text);
   parentText.prepend(parentH3Div);

   var listTeaser = document.getElementsByClassName("teaser--card");
   for (var i = 0; i < listTeaser.length; i++) {
      listTeaser[i].classList.add("teaserCostume"+i);
   }
}, 500);