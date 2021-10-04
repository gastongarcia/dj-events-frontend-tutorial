import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ title, description, keywords, children }) => {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className="main">{children}</div>
      <Footer />
    </div>
  );
};

Layout.defaultProps = {
  title: "Event Listings",
  description: "An app with music events and event management",
  keywords: "Music app, Event management, Events online",
};

export default Layout;
