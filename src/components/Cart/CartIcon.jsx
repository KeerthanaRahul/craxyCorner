import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import useCartStore from '../../components/Store/cartStore';

const CartIcon = ({ isScrolled }) => {
  const itemCount = useCartStore((state) => state.getItemCount())

  return (
    <Link to="/cart" className="relative">
      <ShoppingCart className={`h-6 w-6 ${isScrolled ? 'text-black' : 'text-white'}`} />
      {itemCount > 0 && (
        <span className="absolute -top-2 -right-2 bg-secondary-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </Link>
  );
};

export default CartIcon;