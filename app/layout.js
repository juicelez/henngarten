import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/_custom.scss";
import "./global_styles.css";

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
