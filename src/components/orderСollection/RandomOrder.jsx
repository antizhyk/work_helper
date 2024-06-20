import useRandomOrder from './useRandomOrder';

const RandomOrder = () => {
    const { order, orderType, orderNumber, generateRandomOrder, loading, error } = useRandomOrder();
  
    if (loading) {
      return <div>Завантаження...</div>;
    }
  
    if (error) {
      return <div>Помилка: {error.message}</div>;
    }
  
    return (
      <div>
        <h2>Випадкове замовлення:</h2>
        <p>Номер замовлення: {orderNumber}</p>
        <p>Тип замовлення: {orderType}</p>
        <ul>
          {order.map((item, index) => (
            <li key={index}>
              {item.title} * {item.quantity}
            </li>
          ))}
        </ul>
        <button onClick={generateRandomOrder}>Згенерувати нове замовлення</button>
      </div>
    );
  };
  
  export default RandomOrder;