let total = 0;
let set = new Set();

function addToList(price, id, name) {
    if (!set.has(id)) {
        set.add(id);
        total += price;

        const element = document.getElementById('wishlist');
        element.querySelector('p').innerHTML = `Your Wishlist Total: SEK ${total}`;

        const p = document.createElement("p");
        p.setAttribute('id', `item-${id}`);
        p.innerHTML = `${name} <button class="btn_remove" onclick="remove('${id}', ${price})">Remove</button>`;
        element.appendChild(p);
    } else {
        alert("This item is already added in the list...");
    }
}

function remove(id, price) {
    console.log(id);

    if (set.has(id)) {

        set.delete(id);
        total -= price;

        const element = document.getElementById('wishlist');
        element.querySelector('p').innerHTML = `Your Wishlist Total: SEK ${total}`;

        const item = document.getElementById(`item-${id}`);
        if (item) 
        {
          item.remove();
        }
    }
}