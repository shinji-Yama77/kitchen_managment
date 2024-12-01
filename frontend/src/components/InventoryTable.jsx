const inventoryData = [
    {
        id: 1, name: "Apples", quantity: 50, category: "Fruits" 
    },
    {
        id: 2, name: "Carrots", quantity: 30, category: "Vegetables"
    }, 
    {
        id: 3, name: "Milk", quantity: 1, category: "Dairy"
    }, 
    {
        id: 4, name: "Chicken", quantity: 10, category: "Meat"
    }
]

export default function InventoryTable() {
    return (
        <div>
            <h3>Current Inventory </h3>
            <table className="inventory-table">
                <thead>
                    <tr>
                        <th>Item name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {inventoryData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>{item.quantity}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}