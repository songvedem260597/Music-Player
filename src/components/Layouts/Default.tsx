import Sidebar from "./Sidebar";
import Footer from "./Footer";

interface DefaultLayoutProps {
  children: React.ReactNode; // The component(s) that will be rendered within the layout.
}

const Default = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="app">
      <Sidebar />
      <div className="container">
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Default;
