import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { Route, Switch, Router as WouterRouter } from 'wouter';

import Home from '@/pages/Home';
import About from '@/pages/About';
import Menu from '@/pages/Menu';
import Gallery from '@/pages/Gallery';
import Testimonials from '@/pages/Testimonials';
import Contact from '@/pages/Contact';

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CartDrawer from '@/components/CartDrawer';
import { CartProvider } from '@/lib/cart-context';

const queryClient = new QueryClient();

function NotFound() {
  return (
    <div className="min-h-[100dvh] w-full flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-playfair font-bold text-foreground">
          404 - Page Not Found
        </h1>
        <p className="mt-2 text-muted-foreground font-poppins">
          The page you are looking for does not exist.
        </p>
      </div>
    </div>
  );
}

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/menu" component={Menu} />
      <Route path="/gallery" component={Gallery} />
      <Route path="/testimonials" component={Testimonials} />
      <Route path="/contact" component={Contact} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">
              <Router />
            </main>
            <Footer />
          </div>
        </WouterRouter>
        <CartDrawer />
      </CartProvider>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
