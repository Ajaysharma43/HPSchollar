import data from "@/pages/JsonData/BLogdata/Blogdata.json"
export default function handler(req, res) {
  if (req.method === 'GET') {
    res.status(200).json({ message: "success", data: data });
  } else if (req.method === 'POST') {
    try {
      const { id } = req.body;
      const SingleBlog = data.find((item) => item.Id == id)
      res.status(200).json({ SingleBlog: SingleBlog })
    }
    catch (error) {
      res.status(500).json({ message: error })
    }

  }
  else {
    res.status(405).json({ message: "Method Not Allowed" });
  }
}