import React from "react";
import BodyTitle from "../Components/BodyTitle/BodyTitle";
import Dash from "../Components/Dash/Dash";
import Footer from "../Components/Footer/Footer";
import Header from "../Components/Header/Header";
import Sidebar from "../Components/Sidebar/Sidebar";

function DashPage() {
  return (
    <div>
      <Header />
      <Sidebar />
      <main id="main" className="main">
        <BodyTitle data={"DashBoard"} />
        {/* End Page Title */}
        <section className="section dashboard">
          <Dash />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default DashPage;
