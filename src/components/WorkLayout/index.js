import Footer from "../Footer";

const WorkLayout = ({ children }) =>
  <div className="workContainer">
    <style jsx>{``}</style>
    <style jsx global>{`
      html,
      body {
        font-family: Montserrat, sans-serif;
        height: 100%;
        margin: 0;
        min-width: 300px;
        padding: 0;
        text-align: center;
      }

      .workContainer {
        margin: 0 auto;
        width: 770px;
      }
    `}</style>

    {children}

    <Footer />
  </div>;

export default WorkLayout;
