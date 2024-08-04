import "../styles/globals.css";
import ThemeProvider from '../components/ThemeProvider'; // Adjust the path to your ThemeProvider file

export const metadata = {
  title: 'Pantry Tracker & Inventory Management',
  description: 'Pantry Help: A inventory and pantry tracker solution.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider>
            {children}
        </ThemeProvider>
      </body>
    </html>
  );
}