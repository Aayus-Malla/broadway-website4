import "@fortawesome/fontawesome-free/css/all.min.css";
import BootstrapClient from './components/BootstrapClient';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Blinker&family=Cinzel&family=Josefin+Slab&family=Figtree&family=Gruppo&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body suppressHydrationWarning>
        <BootstrapClient />
        {children}
      </body>
    </html>
  );
}
