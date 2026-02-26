# Simple Frontend E-Commerce

A modern, responsive e-commerce application built with React and Vite, featuring product browsing, shopping cart functionality, and a streamlined checkout experience.

## Features

✨ **Product Browse** - Browse a curated collection of 16 products with detailed descriptions  
🛒 **Shopping Cart** - Add/remove items with real-time cart updates  
📱 **Responsive Design** - Fully responsive across desktop, tablet, and mobile devices  
🔔 **Toast Notifications** - Real-time user feedback for cart actions, form validation, and order placement  
💳 **Checkout Flow** - Complete order form with validation and success confirmation  
🎨 **Modern UI** - Professional design with smooth animations and hover effects  
📦 **Product Details** - Individual product pages with full descriptions and images  

## Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Routing**: React Router v6
- **State Management**: Context API (CartContext, NotificationContext)
- **Styling**: CSS3 with CSS Variables and Grid Layout
- **Package Manager**: npm

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/prempabbisetty11/Simple-Frontend-E-Commerce.git
   cd ecommerce
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5174` (or the port shown in terminal)

## Usage

### Browsing Products
- Visit the home page to see all available products
- Click on any product to view full details and specifications
- Use the product grid for easy navigation

### Shopping
- Click "Add to Cart" to add items without checking out
- Click "Buy Now" to proceed directly to checkout
- View your cart by clicking the cart icon in the navbar
- Remove individual items or clear the entire cart

### Checkout
- Fill in your name, delivery address, and phone number
- Form validation ensures all fields are required
- Receive confirmation notification upon successful order

### Toast Notifications
The app provides real-time feedback for all actions:
- **Green (Success)**: Item added to cart, order placed
- **Blue (Info)**: Processing orders, item removed
- **Red (Error)**: Form validation errors
- Auto-dismisses after 1.5 - 3 seconds

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx              # Navigation with cart badge
│   ├── ProductCard.jsx         # Product card with Add to Cart
│   └── Notification.jsx        # Toast notification component
├── pages/
│   ├── Home.jsx                # Products listing
│   ├── ProductDetails.jsx      # Individual product page
│   ├── Cart.jsx                # Shopping cart
│   ├── Checkout.jsx            # Order form
│   └── About.jsx               # About page
├── context/
│   ├── CartContext.jsx         # Cart state management
│   └── NotificationContext.jsx # Notification state
├── data/
│   └── products.js             # Product data
├── styles/
│   └── Notification.css        # Toast styling
├── App.jsx                     # Root component
├── index.css                   # Global styles
└── main.jsx                    # Entry point
```

## Features in Detail

### Cart Management
- Global cart state using Context API
- Add/remove items with real-time updates
- Real-time cart item count in navbar

### Notification System
- Auto-dismiss toast notifications
- Type-based styling (success, error, info)
- Smooth animations

### Responsive Design
- Mobile-first approach
- CSS Grid for product layouts
- Optimized for all screen sizes

## Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Feel free to fork, create branches, and submit pull requests.

## License

MIT License - see LICENSE file for details

## Author

[Pabbi](https://github.com/prempabbisetty11)

---

**Repository**: https://github.com/prempabbisetty11/Simple-Frontend-E-Commerce
