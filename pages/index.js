import Layout from "@/components/Layout";
import { API_URL } from "@/config/index";

const IndexPage = ({ events }) => {
  //this console log is now in the browser. I have it in the frontend
  console.log(events);

  return (
    <Layout title="An event listing directory">
      <div
        className="showcase w-full bg-blue-200 text-center py-20"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80)",
          backgroundSize: "cover",
        }}
      >
        <h2>Welcome to the party</h2>
      </div>
      <h1>Upcoming Events</h1>

      <div className="event_list">
        {events.length === 0 && <h3>No events listed</h3>}

        {events.map((ev) => (
          <h3 key={ev.id}>{ev.name}</h3>
        ))}
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/events`);

  const events = await res.json();

  // at this point this console logs in the server. this fetching is happening in the server
  //console.log(events);

  return {
    props: { events },
    revalidate: 1, //check for updates every one second if data has changed
  };
}

//Get server side props version for using external apis and live data
// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/events`);

//   const events = await res.json();

//   // at this point this console logs in the server. this fetching is happening in the server
//   //console.log(events);

//   return {
//     props: { events },
//   };
// }

export default IndexPage;
