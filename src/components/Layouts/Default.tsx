import Sidebar from "./Sidebar";
import Footer from "./Footer";
import Header from "./Header";


interface DefaultLayoutProps {
  children: React.ReactNode; // The component(s) that will be rendered within the layout.
}

const Default = ({ children }: DefaultLayoutProps) => {
  return (
    <div className="app">
      <Sidebar />
      <div className="container">
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  );
};

export default Default;
