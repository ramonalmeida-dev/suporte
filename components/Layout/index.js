import Dashboard from "../Dashboard";
const DefaultLayout = ({ children }) => (
    <div>
      <Dashboard/>    
      <main>{children}</main>
    </div>
  );
  
  export default DefaultLayout;