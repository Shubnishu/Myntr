let bagitems
onload ()


function onload () {
   let bagitemsstr = localStorage.getItem('bagitems');
   bagitems = bagitemsstr ? JSON.parse(bagitemsstr) : [];
   displayitemsonhomepage()
   displaybagicon();
}

 function addToBag (itemid) {
    bagitems.push(itemid);
    localStorage.setItem('bagitems',JSON.stringify(bagitems));
    displaybagicon();

 }

 function displaybagicon() {
   let bagitemcountelement = document.querySelector(".bag-item-count");
   if (bagitems.length > 0) {
      bagitemcountelement.style.visibility ="visible";
      bagitemcountelement.innerText = bagitems.length;
   }
   else {
      bagitemcountelement.style.visibility ="hidden";
   }
 }

 function displayitemsonhomepage() {
    let itemsContainerElement = document.querySelector('.items-container');
    if(!itemsContainerElement) {
      return;
    }


      let innerHtml = '';
      items.forEach(item => {
       innerHtml += `<div class="item-container">
            <img class="item-image" src="${item.image}" alt="item-image">
            <div class="rating">
                ${item.rating.stars} ⭐ | ${item.rating.count}
             </div>
             <div class="company-name"> ${item.company}</div>
             <div class="item-name"> ${item.item_name}</div>
             <div class="price">
                <span class="current-price">Rs ${item.current_price}</span>
                <span class="original-price">Rs ${item.original_price}</span>
                <span class="discount">(${item.discount_percentage}% off)</span>
             </div>
             <button class="buttton-add-bag" onclick="addToBag(${item.id})">Add to Bag</button>
        </div>`;   
});
itemsContainerElement.innerHTML = innerHtml;

 }

 displayitemsonhomepage()
