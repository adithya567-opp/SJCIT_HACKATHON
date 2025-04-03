document.addEventListener('DOMContentLoaded',function(){
    const form = document.getElementById('inventory-form');
    const inventoryList = document.getElementById('inventory-list');
    const totalItemsE1 = document.getElementById('total-items');
    const lowStockE1 = document.getElementById('low-stock');
    
    let inventory = JSON.parse(localStorage.getItem('inventory')) || [];

    function renderInventory(){
        inventoryList.innerHTML = '';

        inventory.forEach((item, index) => {
            const row = document.createElement('tr');
            row.innerHTML =  `
            <td>${item.name}</td>
            <td>${item.quantity}</td>
            <td>$${item.price.toFixed(2)}</td>
            <td>
                <button class="action-btn edit-btn" data-id="${index}">Edit</button>
                <button class="action-btn delete-btn" data-id="${index}">Delete</button>
            </td>
        `;
        inventoryList.appendChild(row);
        });
         
        updateStats();
    
    }

    function updateStats(){
        totalItemsE1.textContent = inventory.length;
        const lowStockCount = inventory.filter(item => item.quantity < 5).length;
        lowStockE1.textContent = lowStockCount;
    }

    form.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('item-name').value;
        console.log("Captured Name:",name);
        const quantity = parseInt(document.getElementById('item-quantity').value);
        const price = parseFloat(document.getElementById('item-price').value);

        inventory.push({name,quantity,price});
        localStorage.setItem('inventory',JSON.stringify(inventory));

        form.requestFullscreen();
        renderInventory();
    });

    inventoryList.addEventListener('click',function(e){
        if(e.target.classList.contains('delete-btn')) {
            const index = e.target.getAttribute('data-id');
            inventory.splice(index,1);
            localStorage.setItem('inventory',JSON.stringify(inventory));
            renderInventory();
        }

        if(e.target.classList.contains('edit-btn')){
            const index = e.target.getAttribute('data-id');
            const item = inventory[index];

            document.getElementById('item-name').value = item.name;
            document.getElementById('item-quantity').value = item.quantity;
            document.getElementById('item-price').value = item.price;
            
            inventory.splice(index, 1);
            localStorage.setItem('inventory', JSON.stringify(inventory));
            renderInventory();
        }
    });
    renderInventory();
});
