import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Package, Clock, CheckCircle, Truck, ChefHat, AlertCircle } from 'lucide-react';
import Loader from '../components/Loader/Loader';

const OrderTracking = () => {
  const [orders, setOrders] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const user = JSON.parse(localStorage.getItem('cafeUser'));

  function convertSecondsToDate(seconds) {
    const milliseconds = seconds * 1000;
    const date = new Date(milliseconds);
    return date.toDateString();
  }

  const getOrders = async() => {
    setIsLoading(true);
    try {
      const res = await fetch(`http://localhost:8082/api/v1/orders/getOrders`);
      const data = await res.json();
      const ordersWithStatus = data?.orderList.filter(el => el.customerEmail === user.email).map(order => ({
        ...order,
        status: order.status || 'confirmed',
        estimatedTime: order.estimatedTime || new Date(Date.now() + 20 * 60000).toLocaleTimeString(),
        statusHistory: order.statusHistory || [
          { status: 'confirmed', time: order.time, message: 'Order confirmed' }
        ]
      }))
      setOrders(ordersWithStatus)
      } catch (error) {
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getOrders();
  }, []);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'confirmed':
        return <CheckCircle className="h-6 w-6 text-blue-500" />;
      case 'preparing':
        return <ChefHat className="h-6 w-6 text-yellow-500" />;
      case 'ready':
        return <Package className="h-6 w-6 text-green-500" />;
      case 'delivered':
        return <Truck className="h-6 w-6 text-green-600" />;
      default:
        return <Clock className="h-6 w-6 text-gray-500" />;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'preparing':
        return 'bg-yellow-100 text-yellow-800';
      case 'ready':
        return 'bg-green-100 text-green-800';
      case 'delivered':
        return 'bg-green-200 text-green-900';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressPercentage = (status) => {
    switch (status) {
      case 'confirmed':
        return 25;
      case 'preparing':
        return 50;
      case 'ready':
        return 75;
      case 'delivered':
        return 100;
      default:
        return 0;
    }
  };

  return (
    <div className="pt-16">
      {isLoading && <Loader showLoader={(isLoading)} />}
      <div className="relative h-80 bg-cover bg-center flex items-center justify-center" 
        style={{ 
          backgroundImage: "url('https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')"
        }}>
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Track Your Orders</h1>
          <p className="text-xl max-w-xl mx-auto">
            Stay updated on your order status and estimated delivery time
          </p>
        </div>
      </div>

      <div className="container-custom py-16">
        {!isLoading && orders.length === 0 ? (
          <div className="text-center">
            <Package className="h-16 w-16 text-accent-400 mx-auto mb-4" />
            <h2 className="text-2xl font-serif font-bold text-primary-800 mb-4">No Orders Yet</h2>
            <p className="text-accent-600 mb-8">You haven't placed any orders yet. Start browsing our menu!</p>
            <a href="/menu" className="btn btn-primary">
              Browse Menu
            </a>
          </div>
        ) : (
          <div className="space-y-8">
            {orders.map((order) => (
              <motion.div
                key={order.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="card"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-primary-800 mb-2">
                      Order #{order.id}
                    </h3>
                    <p className="text-accent-600">Placed on {convertSecondsToDate(order.createdAt?._seconds)}</p>
                    <p className="text-accent-600">Total: ₹{order.totalAmount}</p>
                  </div>
                  <div className="mt-4 lg:mt-0 text-right">
                    <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(order.status)}`}>
                      {getStatusIcon(order.status)}
                      <span className="ml-2 capitalize">{order.status}</span>
                    </div>
                    {order.status !== 'delivered' && (
                      <p className="text-sm text-accent-600 mt-2">
                        Estimated ready time: {order.estimatedTime}
                      </p>
                    )}
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-6">
                  <div className="flex justify-between text-sm text-accent-600 mb-2">
                    <span>Order Progress</span>
                    <span>{getProgressPercentage(order.status)}%</span>
                  </div>
                  <div className="w-full bg-accent-200 rounded-full h-2">
                    <div 
                      className="bg-secondary-500 h-2 rounded-full transition-all duration-500"
                      style={{ width: `${getProgressPercentage(order.status)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Order Items */}
                <div className="mb-6">
                  <h4 className="font-medium text-primary-800 mb-3">Order Items:</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between items-center p-3 bg-primary-50 rounded-lg">
                        <div>
                          <span className="font-medium">{item.name}</span>
                          <span className="text-accent-600 ml-2">x{item.quantity}</span>
                        </div>
                        <span className="font-medium">₹{item.price * item.quantity}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTracking;