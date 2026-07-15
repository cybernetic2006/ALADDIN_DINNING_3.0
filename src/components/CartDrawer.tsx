import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag, MessageCircle } from 'lucide-react';
import { useCart } from '@/lib/cart-context';

const WHATSAPP_NUMBER = '918967832009';

export default function CartDrawer() {
  const { items, isOpen, closeCart, removeItem, updateQty, clearCart, totalItems, totalPrice } = useCart();

  const checkoutLink = () => {
    const lines = items.map((i) => {
      const unitPrice = parseFloat(i.price.replace(/[^0-9.]/g, '')) || 0;
      return `• ${i.name} x${i.qty} — ₹${(unitPrice * i.qty).toFixed(0)}`;
    });
    const text = encodeURIComponent(
      `Hi! I'd like to place an order from Aladdin Restaurant:\n\n${lines.join('\n')}\n\nTotal: ₹${totalPrice.toFixed(0)}\n\nPlease confirm availability.`,
    );
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-black/60 backdrop-blur-sm"
            onClick={closeCart}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 right-0 h-full w-full sm:w-[420px] bg-background z-[95] shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-border">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-secondary" />
                <h2 className="font-playfair text-xl font-bold text-foreground">
                  Your Order {totalItems > 0 && `(${totalItems})`}
                </h2>
              </div>
              <button
                onClick={closeCart}
                className="p-2 rounded-full hover:bg-muted transition-colors"
                aria-label="Close cart"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center gap-3 text-muted-foreground">
                  <ShoppingBag className="w-12 h-12 opacity-30" />
                  <p className="font-poppins">Your cart is empty.</p>
                  <p className="font-poppins text-sm">Add dishes from the menu to get started.</p>
                </div>
              ) : (
                items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-start justify-between gap-3 pb-4 border-b border-border last:border-b-0"
                  >
                    <div className="flex-1 min-w-0">
                      <h4 className="font-poppins font-semibold text-sm text-foreground">{item.name}</h4>
                      <p className="font-poppins text-secondary font-bold text-sm mt-1">{item.price}</p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button
                        onClick={() => updateQty(item.name, item.qty - 1)}
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                        aria-label={`Decrease ${item.name} quantity`}
                      >
                        <Minus className="w-3 h-3" />
                      </button>
                      <span className="w-6 text-center font-poppins text-sm font-medium">{item.qty}</span>
                      <button
                        onClick={() => updateQty(item.name, item.qty + 1)}
                        className="w-7 h-7 rounded-full border border-border flex items-center justify-center hover:bg-muted transition-colors"
                        aria-label={`Increase ${item.name} quantity`}
                      >
                        <Plus className="w-3 h-3" />
                      </button>
                      <button
                        onClick={() => removeItem(item.name)}
                        className="w-7 h-7 rounded-full flex items-center justify-center text-destructive hover:bg-destructive/10 transition-colors ml-1"
                        aria-label={`Remove ${item.name}`}
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-border space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-poppins text-muted-foreground">Total</span>
                  <span className="font-playfair text-2xl font-bold text-primary">₹{totalPrice.toFixed(0)}</span>
                </div>
                <a
                  href={checkoutLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-[#25D366] hover:bg-[#1da851] text-white px-6 py-3.5 rounded-full font-poppins font-semibold transition-colors shadow-lg"
                >
                  <MessageCircle className="w-4 h-4" />
                  Checkout on WhatsApp
                </a>
                <button
                  onClick={clearCart}
                  className="w-full text-center text-sm font-poppins text-muted-foreground hover:text-destructive transition-colors"
                >
                  Clear cart
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
