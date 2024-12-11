import { lazy } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { LazyLoad } from './components/ui/LazyLoad';
import { Dashboard } from './pages/Dashboard';

const Customers = lazy(() => import('./pages/Customers').then(module => ({ default: module.Customers })));
const Bookings = lazy(() => import('./pages/Bookings').then(module => ({ default: module.Bookings })));
const BookingDetails = lazy(() => import('./pages/BookingDetails').then(module => ({ default: module.BookingDetails })));
const Carts = lazy(() => import('./pages/Carts').then(module => ({ default: module.Carts })));
const CartDetails = lazy(() => import('./pages/CartDetails').then(module => ({ default: module.CartDetails })));
const Tickets = lazy(() => import('./pages/Tickets').then(module => ({ default: module.Tickets })));
const TicketDetails = lazy(() => import('./pages/TicketDetails').then(module => ({ default: module.TicketDetails })));
const CustomerDetails = lazy(() => import('./pages/CustomerDetails').then(module => ({ default: module.CustomerDetails })));
const Categories = lazy(() => import('./pages/Categories').then(module => ({ default: module.Categories })));
const CategoryDetails = lazy(() => import('./pages/CategoryDetails').then(module => ({ default: module.CategoryDetails })));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="customers" element={<LazyLoad><Customers /></LazyLoad>} />
          <Route path="customers/:id" element={<LazyLoad><CustomerDetails /></LazyLoad>} />
          <Route path="bookings" element={<LazyLoad><Bookings /></LazyLoad>} />
          <Route path="bookings/:id" element={<LazyLoad><BookingDetails /></LazyLoad>} />
          <Route path="carts" element={<LazyLoad><Carts /></LazyLoad>} />
          <Route path="carts/:id" element={<LazyLoad><CartDetails /></LazyLoad>} />
          <Route path="tickets" element={<LazyLoad><Tickets /></LazyLoad>} />
          <Route path="tickets/:id" element={<LazyLoad><TicketDetails /></LazyLoad>} />
          <Route path="categories" element={<LazyLoad><Categories /></LazyLoad>} />
          <Route path="categories/:id" element={<LazyLoad><CategoryDetails /></LazyLoad>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;