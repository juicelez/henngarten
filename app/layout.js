import { Geist, Geist_Mono } from "next/font/google";
import "./global_styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/_custom.scss";

export const metadata = {
  title: "Hennfick",
  description: "kommt noch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
