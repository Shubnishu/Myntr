
const CONVENIENCE_FEE = 99;


let bagitemobjects;
onload()

function onload () {
    loadbagitemobjects();
    displaybagitems();
    displaybagsummary();
}

function  displaybagsummary() {
    let bagsummaryelement = document.querySelector('.bag-summary');
    let totalitem = bagitemobjects.length;
    let totalmrp = 0;
    let totaldiscount = 0;
   
    bagitemobjects.forEach(bagitem => {
totalmrp =totalmrp + bagitem.original_price;
totaldiscount = totaldiscount + bagitem.original_price - bagitem.current_price;
    });

    let finalpayment = totalmrp - totaldiscount + CONVENIENCE_FEE;

    bagsummaryelement.innerHTML =` <div class="bag-details-container">
            <div class="price-header">PRICE DETAILS (${totalitem}Items) </div>
            <div class="price-item">
              <span class="price-item-tag">Total MRP</span>
              <span class="price-item-value">Rs ${totalmrp}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Discount on MRP</span>
              <span class="price-item-value priceDetail-base-discount">-Rs${totaldiscount}</span>
            </div>
            <div class="price-item">
              <span class="price-item-tag">Convenience Fee</span>
              <span class="price-item-value">Rs 99</span>
            </div>
            <hr>
            <div class="price-footer">
              <span class="price-item-tag">Total Amount</span>
              <span class="price-item-value">Rs${finalpayment}</span>
            </div>
          </div>
          <button class="btn-place-order">
            <div class="css-xjhrni">PLACE ORDER</div>
          </button>`
}

function loadbagitemobjects() {
    console.log(bagitems);

    bagitemobjects = bagitems.map(itemid => {
for (let i=0; i<items.length; i++) {
    if(itemid == items[i].id) {
        return items[i];
    }
}
});
console.log(bagitemobjects)
}


function displaybagitems() {
    let containerelement = document.querySelector('.bag-items-container');
   let innerHTML ='';
   bagitemobjects.forEach(bagitem => {
   innerHTML = innerHTML + generateitemHTML(bagitem);
   });
    containerelement.innerHTML = innerHTML;
}




// <div class="bag-item-container">
// <div class="item-left-part">
//   <img class="bag-item-img" src="../images/4.jpg">
// </div>
// <div class="item-right-part">
//   <div class="company">ADIDAS</div>
//   <div class="item-name">Men Printed Polo Collar Indian Cricket ODI Jersey</div>
//   <div class="price-container">
//     <span class="current-price">Rs 999</span>
//     <span class="original-price">Rs 999</span>
//     <span class="discount-percentage">(0% OFF)</span>
//   </div>
//   <div class="return-period">
//     <span class="return-period-days">14 days</span> return available
//   </div>
//   <div class="delivery-details">
//     Delivery by
//     <span class="delivery-details-days">10 Oct 2023</span>
//   </div>
// </div>

// <div class="remove-from-cart">X</div>
// </div>`;
// }
function removeFromBag (itemid){
   bagitems = bagitems.filter(bagitemid => bagitemid != itemid);
   localStorage.setItem('bagitems',JSON.stringify(bagitems));
   loadbagitemobjects();
   displaybagitems();
   displaybagicon();
   displaybagsummary();

  
}

function generateitemHTML(item){
  return  `<div class="bag-item-container">
<div class="item-left-part">
  <img class="bag-item-img" src="../${item.image}">
</div>
<div class="item-right-part">
  <div class="company">${item.company}</div>
  <div class="item-name">${item.item_name}</div>
  <div class="price-container">
    <span class="current-price">Rs ${item.current_price}</span>
    <span class="original-price">Rs ${item.original_price}</span>
    <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
  </div>
  <div class="return-period">
    <span class="return-period-days">${item.return_period}</span> return available
  </div>
  <div class="delivery-details">
    Delivery by
    <span class="delivery-details-days">${item.delivery_date}</span>
  </div>
</div>

<div class="remove-from-cart" onclick="removeFromBag(${item.id})">X</div>
</div>`;
}

