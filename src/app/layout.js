import { Anton, Space_Grotesk } from "next/font/google";
import "./globals.css";

export const metadata = {
    title: "Vaibhav Aggarwal - Portfolio",
    description: "Heyy! I'm Vaibhav Aggarwal, a passionate software developer specializing in development of web based full stack softwares backed with a great data structure and algorithms background. Explore my projects, achievements, skills, and experience in the tech world.",
    keywords: "Vaibhav Aggarwal, software developer, portfolio, web development, programming, coding",
};

const anton = Anton({ 
  subsets: ["latin"], 
  weight: "400", 
  variable: "--font-anton" 
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"], 
  variable: "--font-space" 
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Both variables must be here! */}
      <body className={`${anton.variable} ${spaceGrotesk.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}