# Demat African Kitchen

A beautiful, responsive website for Demat African Kitchen - serving authentic Nigerian and African cuisine in Qatar. Built with React, TypeScript, and Tailwind CSS.

## 🍽️ About

Demat African Kitchen brings authentic Nigerian soups and African dishes to Qatar, connecting Africans in diaspora with their roots while introducing locals to the rich flavors of West African cuisine.

## 🚀 Features

- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Menu**: Complete menu with categories, descriptions, and direct WhatsApp ordering
- **Gallery**: Visual showcase of authentic African dishes
- **Contact Integration**: Direct WhatsApp integration for orders and inquiries
- **Operating Hours**: Real-time open/closed status based on Qatar timezone
- **Multi-page Navigation**: Home, Menu, About, and Contact pages
- **SEO Optimized**: Proper meta tags and structured content

## 🛠️ Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Fonts**: Inter & Poppins (Google Fonts)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 16.0 or higher)
- **npm** (comes with Node.js)

You can check your versions by running:
```bash
node --version
npm --version
```

## 🔧 Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd dematafricankitchen
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
   
   The application will be available at `http://localhost:5173`

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── About.tsx       # About section component
│   ├── CTA.tsx         # Call-to-action component
│   ├── FloatingWhatsApp.tsx  # Floating WhatsApp button
│   ├── Footer.tsx      # Site footer
│   ├── Gallery.tsx     # Image gallery
│   ├── Hero.tsx        # Hero section
│   ├── Menu.tsx        # Menu preview component
│   ├── Navbar.tsx      # Navigation bar
│   ├── OpenStatus.tsx  # Operating hours status
│   └── Testimonials.tsx # Customer testimonials
├── pages/              # Page components
│   ├── AboutPage.tsx   # About page
│   ├── ContactPage.tsx # Contact page
│   ├── Home.tsx        # Home page
│   └── MenuPage.tsx    # Full menu page
├── App.tsx             # Main app component
├── main.tsx           # App entry point
└── index.css          # Global styles
```

## 🎨 Styling

The project uses Tailwind CSS for styling with:
- **Custom fonts**: Inter for body text, Poppins for headings
- **Color scheme**: Red primary (#DC2626), Green for WhatsApp (#16A34A), Yellow accents (#EAB308)
- **Responsive design**: Mobile-first approach with breakpoints
- **Hover effects**: Smooth transitions and micro-interactions

## 📱 Key Features

### WhatsApp Integration
- Direct ordering through WhatsApp links
- Pre-filled messages for easy ordering
- Floating WhatsApp button for quick access

### Real-time Operating Hours
- Displays current Qatar time
- Shows open/closed status based on:
  - Monday-Thursday: 10:00 AM - 11:00 PM
  - Friday: 12:00 PM - 11:00 PM
  - Saturday-Sunday: 10:00 AM - 11:00 PM

### Menu Categories
- Soups & Stews
- Pot of Soups (family sizes)
- Swallows (traditional sides)
- Rice & Pasta
- Pepper Soups
- Proteins (add-ons)
- Sides & Small Chops
- Drinks & Juices
- Fresh Juice Mixes
- Smoothies & Exotic Mixes

## 🚀 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run typecheck` - Run TypeScript type checking

## 🌐 Deployment

### Build for Production
```bash
npm run build
```

This creates a `dist` folder with optimized production files.

### Deploy to Various Platforms

#### Netlify
1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. The `_redirects` file is included for proper routing

#### Vercel
1. Connect your repository to Vercel
2. Vercel will automatically detect it's a Vite project
3. Deploy with default settings

#### Traditional Web Hosting
1. Build the project: `npm run build`
2. Upload contents of `dist` folder to your web server
3. Ensure your server supports client-side routing

## 📞 Contact Information

- **Phone**: +974 7196 2487
- **Email**: dematafrikitchen25@gmail.com
- **WhatsApp**: [Direct Link](https://wa.me/97471962487)
- **Instagram**: [@demat_african_kitchen_](https://www.instagram.com/demat_african_kitchen_/)
- **Location**: Doha, Qatar

## 🎯 Business Hours

- **Monday - Thursday**: 10:00 AM - 11:00 PM
- **Friday**: 12:00 PM - 11:00 PM
- **Saturday - Sunday**: 10:00 AM - 11:00 PM

*All times are in Qatar Standard Time (UTC+3)*

## 🔧 Customization

### Updating Menu Items
Edit the `menuData` object in `src/pages/MenuPage.tsx` and `src/components/Menu.tsx`

### Changing Contact Information
Update contact details in:
- `src/components/Footer.tsx`
- `src/components/FloatingWhatsApp.tsx`
- `src/pages/ContactPage.tsx`

### Modifying Operating Hours
Update the schedule in `src/components/OpenStatus.tsx`

### Adding New Images
1. Add images to the `public` folder
2. Reference them using `/image-name.jpg` in your components

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   ```bash
   # Kill process on port 5173
   npx kill-port 5173
   # Or use a different port
   npm run dev -- --port 3000
   ```

2. **Images not loading**
   - Ensure images are in the `public` folder
   - Use absolute paths starting with `/`
   - Check file names match exactly (case-sensitive)

3. **WhatsApp links not working**
   - Verify phone number format: +97471962487
   - Check URL encoding for message text

## 📄 License

This project is proprietary software for Demat African Kitchen.

## 🤝 Contributing

This is a private project for Demat African Kitchen. For any changes or updates, please contact the development team.

---

**Demat African Kitchen** - Bringing authentic Nigerian and African flavors to Qatar 🇶🇦