const { events } = require("./data.json");

export default function handler(req, res) {
  //limit the response only to GET requests - not all requests which is the default
  if (req.method === "GET") {
    res.status(200).json(events);
  } else {
    res.setHeader("Allow", ["GET"]);
    res.status(405).json({ message: `Method ${req.method} is not allowed` });
  }
}

// export default function handler(req, res) {
//   res.status(200).json({ name: "John Doe" });
// }
