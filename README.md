# 🌐 Araba Admin  Dashboard

Welcome to **Araba Admin Dashboard**, a comprehensive admin panel designed to make managing shopping carts, bookings, categories, customers, and support tickets a breeze! Built with **React**, **TypeScript**, **Supabase**, **React Router**, and **Tailwind CSS**, Araba Dashboard offers a clean UI, in-depth data management capabilities, and a delightful user experience.

---

## 🚀 Tech Stack

| Technology       | Description                                                                 |
|-------------------|-----------------------------------------------------------------------------|
| [React](https://reactjs.org/)          | UI library for building user interfaces.                              |
| [TypeScript](https://www.typescriptlang.org/)    | Typed JavaScript for better tooling and fewer errors.                 |
| [Supabase](https://supabase.com/)       | Backend as a service, providing real-time databases and authentication. |
| [React Router](https://reactrouter.com/)  | Declarative routing for React applications.                          |
| [Tailwind CSS](https://tailwindcss.com/)  | Utility-first CSS framework for styling.                             |
| [React Hot Toast](https://react-hot-toast.com/) | For toast notifications.                                              |
| [jsPDF](https://github.com/parallax/jsPDF) | Generates PDFs from JavaScript.                                       |
| [Recharts](https://recharts.org/)       | Charts for data visualization.                                        |

---

## 📜 Table of Contents

- [🎯 Key Features](#-key-features)
- [🏗️ Architecture and Structure](#️-architecture-and-structure)
- [💻 UI Components](#-ui-components)
- [🔌 Hooks and Data Fetching](#-hooks-and-data-fetching)
- [📄 Pages](#-pages)
- [🎨 Theme Support](#-theme-support)
- [🍞 Toast Notifications](#-toast-notifications)
- [🖨️ PDF Export](#️-pdf-export)
- [📈 Charts and Forecasting](#-charts-and-forecasting)
- [🚀 How to Run](#-how-to-run)
- [📸 Visuals](#-visuals)

---

## 🎯 Key Features

1. **Dashboard Overview**  
   - Insightful summary cards for revenue, bookings, active customers, and abandonment rate.
   - Forecast charts to predict trends in revenue, bookings, and customer growth.
   - Quick access to top-performing carts.

2. **Carts Management**  
   - Grid and list views to browse all carts effortlessly.
   - Create, edit, and delete carts.
   - Manage cart details, contacts, categories, documents, and gallery images.
   - Import/Export menu items (CSV) and export entire cart reports to PDF.

3. **Bookings Management**  
   - Filter bookings by status and search them quickly.
   - View bookings in grid or list mode.
   - Drill down into booking details, ordered items, customer info, and related cart data.

4. **Categories Management**  
   - View categories and their assigned carts.
   - Add, edit, and organize categories.
   - Move carts between categories with ease.

5. **Customers Management**  
   - Search and manage all customers.
   - Edit customer details, addresses, and assigned carts if they are vendors.
   - Review their booking history in a snap.

6. **Tickets Management**  
   - View and filter support tickets by status and category.
   - Update ticket statuses to streamline support workflows.
   - Access related customer, booking, and cart info.

7. **User-Friendly UI**  
   - Dark/Light theme toggle for comfortable viewing.
   - Loading spinners, skeleton placeholders, and clear empty/error states.
   - Toast notifications for success and error messages.

---

## 📸 Visuals

### Dashboard Overview
![Dashboard Screenshot](https://fjvcpsuqgmozixtlddpc.supabase.co/storage/v1/object/public/Displayimg/Screenshot%202024-12-09%20at%2013.39.57.png)

### Carts Management
![Carts Management](https://fjvcpsuqgmozixtlddpc.supabase.co/storage/v1/object/public/Displayimg/Screenshot%202024-12-09%20at%2013.42.59.png)

### Bookings Management
![Bookings Management](https://fjvcpsuqgmozixtlddpc.supabase.co/storage/v1/object/public/Displayimg/Screenshot%202024-12-09%20at%2013.43.21.png)

### Customer Details View Example
![Customer Details View Example](https://fjvcpsuqgmozixtlddpc.supabase.co/storage/v1/object/public/Displayimg/Screenshot%202024-12-09%20at%2013.46.28.png)

---

## 🏗️ Architecture and Structure

**Directory Layout**  
- **`/components`**: Reusable UI elements and feature-focused components (e.g., `bookings`, `carts`, `categories`, `customers`, `dashboard`, `layout`, `modals`, `tickets`, `ui`).
- **`/contexts`**: Global contexts (e.g., `ThemeContext`).
- **`/hooks`**: Data fetching and state management hooks for Supabase integration.
- **`/pages`**: Page-level components tied to routes (dashboard, carts, bookings, categories, etc.).
- **`/types`**: TypeScript definitions for data structures.
- **`/utils`**: Utility functions (PDF exports, forecasting, etc.).

**Entry Points**:
- `main.tsx`: Sets up `ThemeProvider`, `ToastProvider`, and routing.
- `App.tsx`: Defines routes and lazy loads pages for performance.

---

## 💻 UI Components

**Layout & Navigation**:  
- `Layout`, `Sidebar`, `ThemeToggle` for app structure and navigation.

**Data Display**:  
- `Card`, `Table`, `DataTable`, `BookingGrid`, `CartGrid`, `BookingList`, `CartContactList`.
- States for empty and error conditions (`EmptyState`, `ErrorState`).

**Forms and Modals**:  
- `CreateCartModal`, `EditCategoryModal`, `AddContactModal`, `EditMenuItemModal`.
- `CartContactForm`, `CustomerEditForm`, `MenuItemForm` for data input.

**Feedback**:  
- `LoadingSpinner` for asynchronous loading.
- `useToast` for success/error messages.

**Data Visualization**:  
- `ForecastChart` leveraging `recharts` for line charts and forecasting.

---

## 🔌 Hooks and Data Fetching

Hooks for efficient data fetching and state management are located in `/hooks`. Examples:

- **Carts**: `useCarts`, `useCartDetails`, `useCartMenu`, etc.
- **Bookings**: `useBookings`, `useBooking`.
- **Customers**: `useCustomers`, `useCustomerAddresses`.
- **Categories**: `useCategories`, `useCategoryDetails`.
- **Tickets**: `useTickets`, `useTicket`.

Each hook encapsulates logic for loading, error handling, and transformations.

---

## 📄 Pages

Core application pages include:

- **Dashboard**: Overview of metrics, forecasts, and top-performing carts.
- **Carts**: View, search, paginate, and manage carts.
- **Bookings**: Filter bookings, view details of items and customer info.
- **Categories**: Manage categories and their assigned carts.
- **Customers**: View customer info, addresses, and booking history.
- **Tickets**: Filter and manage support tickets.

---

## 🎨 Theme Support

- Light or Dark mode for comfortable viewing.
- `ThemeContext` and `ThemeToggle` integrated with Tailwind’s dark mode classes.
- User preferences remembered in `localStorage`.

---

## 🍞 Toast Notifications

Using **React Hot Toast** for consistent and stylish notifications:

- `useToast` triggers notifications upon successful CRUD operations or errors.

---

## 🖨️ PDF Export

Generate professional PDF reports for carts, including:

- Cart details, contacts, bookings, and menu items.
- Powered by **jsPDF** and **jspdf-autotable**.

---

## 📈 Charts and Forecasting

Visualize trends with **Recharts** and forecasting utilities:

- `ForecastChart` for historical and predictive analytics.
- `generateForecast` function in `utils/forecasting.ts`.

---

## 🚀 How to Run

1. **Install Dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

2. **Set Environment Variables**:
   Create a `.env` file:
   ```env
   VITE_SUPABASE_URL=<your_supabase_url>
   VITE_SUPABASE_ANON_KEY=<your_supabase_anon_key>
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173`.

4. **Build for Production**:
   ```bash
   npm run build
   npm run preview
   ```

---

🎉 **We here to make money!**
