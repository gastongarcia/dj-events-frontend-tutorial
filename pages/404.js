import { FaExclamationTriangle } from "react-icons/fa";
import Link from "next/link";
import Layout from "@/components/Layout";
const NotFoundPage = () => {
  return (
    <Layout title="Page not found">
      <h1>
        <FaExclamationTriangle className="inline mr-2" /> Page not found
      </h1>
      <p>
        Please go back to{" "}
        <Link href="/">
          <a className="underline">home</a>
        </Link>
        .
      </p>
    </Layout>
  );
};

export default NotFoundPage;
