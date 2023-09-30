import LayoutHeader from "../../components/header";

const LayoutView = ({ children }) => {
  return (
    <div className="layout_container">
      <LayoutHeader />
      {children}
    </div>
  );
};

export default LayoutView;
