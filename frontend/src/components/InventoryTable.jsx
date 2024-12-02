import styles from '../styles/Inventory.module.css'
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { useEffect } from 'react';

const inventoryData = [
    {
        id: 1, name: "Apples", quantity: 50, category: "Fruits", unit: "KG", measurement: "Weight" 
    },
    {
        id: 2, name: "Carrots", quantity: 30, category: "Vegetables", unit: "PCS", measurement: "Count" 
    }, 
    {
        id: 3, name: "Milk", quantity: 1, category: "Dairy", unit: "Liters", measurement: "Volume" 
    }, 
    {
        id: 4, name: "Chicken", quantity: 10, category: "Meat", unit: "KG", measurement: "Weight"
    }
]




export default function InventoryTable() {


    useEffect(() => {
        
    })
    
    return (
        <section className={styles.section}>
            <h2 className='text-xl'>Current Inventory </h2>
            <div className={styles['inventory-div']}>
            <table className={styles['inventory-table']}>
                <thead>
                    <tr>
                        <th>Item name</th>
                        <th>Measurement Type</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Unit</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {inventoryData.map((item) => (
                        <tr key={item.id}>
                            <td data-cell="Name">{item.name}</td>
                            <td data-cell="Category">{item.category}</td>
                            <td data-cell="Quantity">{item.quantity}</td>
                            <td data-cell="Unit">{item.unit}</td>
                            <td data-cell="Measurement">{item.measurement}</td>
                            <td data-cell="Actions">
                                <button>
                                   <MoreHorizIcon /> 
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
            
        </section>
    )
}