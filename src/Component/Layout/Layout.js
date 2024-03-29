import Layouts from "./Layout.module.css";
import Navigation from "./Navigation";
function Layout(props) {
  return (
    <div>
      <Navigation />
      <main className={Layouts.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
