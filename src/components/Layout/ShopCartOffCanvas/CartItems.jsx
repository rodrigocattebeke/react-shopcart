export const CartItems = ({ shopCartItems = {} }) => {
  const cartItem = (items) => {
    let borderBottom = false;
    if (items.length === 0) return "Carrito vacío";
    if (items.length > 1) borderBottom = true;

    return items.map((item) => (
      <div className={`row py-4 ${borderBottom ? "border-top" : " "}`} key={item.id}>
        <div className="col-2">
          <img src={item.image} alt={item.title} className="img-fluid"></img>
        </div>
        <div className="col-8">
          <p className="my-0">{item.title}</p>
          <p className="small my-0">{item.price}</p>
        </div>
        <div className="col-2">
          <span className="material-symbols-outlined">delete</span>
        </div>
      </div>
    ));
  };

  return cartItem(shopCartItems.cartItems);
};
