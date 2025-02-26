import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/_custom.scss";

export const metadata = {
  title: "Hennfick",
  description: "kommt noch",
};

export default function RootLayout({ children }) {
  return (
    <html lang="de">
      <body className="bg-light">{children}</body>
    </html>
  );
}
