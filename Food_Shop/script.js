console.log("Check");
showOrders();
function showOrders() {
    let orders = localStorage.getItem("orders");
    let html = ``;
    if (orders == null) {
        ordersObj = {
            total: {
                qty: 0,
                price: 0,
            },
        };
    } else {
        ordersObj = JSON.parse(orders);
        for (key in ordersObj) {
            if (key == "total") {
                continue;
            }
            html += `<tr>
            <td class="item-name">${key}</td>
            <td class="qty"><i class="fa fa-plus" aria-hidden="true" onclick="add(this.parentNode.parentNode)"></i>  
            ${ordersObj[key].qty}  
            <i class="fa fa-minus" aria-hidden="true" onclick="remove(this.parentNode.parentNode)"></i>
            </td>
            <td class="price">${ordersObj[key].price} <i class="fa fa-inr" aria-hidden="true"></i>
            </td>
        </tr>`;
        }
    }
    html += `<tr>
                <td id="total">Total:</td>
                <td id="total-qty">${ordersObj["total"].qty}</td>
                <td id="total-price">${ordersObj["total"].price} <i class="fa fa-inr" aria-hidden="true"></i>
                </td>
            </tr>`;
    let card_body = document.getElementById("cart-body");
    card_body.innerHTML = html;
}

function addOrder(listElem) {
    // console.log(listElem.children);
    let name = listElem.children[1].innerText;
    let price = Number(listElem.children[3].innerText);
    // console.log(name,price);
    let orders = localStorage.getItem("orders");
    if (orders == null) {
        orderObj = {
            total: {
                qty: 0,
                price: 0,
            },
        };
    } else {
        orderObj = JSON.parse(orders);
    }
    if (name in orderObj && orderObj[name].price == price) {
        orderObj[name].qty++;
    } else {
        orderObj[name] = {
            qty: 1,
            price: price,
        };
    }
    orderObj["total"].qty++;
    orderObj["total"].price += price;

    localStorage.setItem("orders", JSON.stringify(orderObj));
    showOrders();
}

function add(elem)
{
    let name = elem.children[1].innerText;
    let orderObj = JSON.parse(localStorage.getItem("orders"));
    orderObj[name].qty++;
    orderObj.total.qty++;
    orderObj.total.price += orderObj[name].price;
    localStorage.setItem("orders",JSON.stringify(orderObj));
    showOrders();
}
function remove(elem){
    let name = elem.children[1].innerText;
    let orderObj = JSON.parse(localStorage.getItem("orders"));
    if(orderObj[name].qty == 1)
    {
        orderObj.total.price -= orderObj[name].price;
        orderObj.total.qty--;
        delete orderObj[name];
    }
    else{
        orderObj[name].qty--;
        orderObj.total.qty--;
        orderObj.total.price -= orderObj[name].price;
    }
    localStorage.setItem("orders",JSON.stringify(orderObj));
    showOrders();
}