import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Contact = ({ listing }) => {
  const [landlord, setLandlord] = useState(null);
  const [message, setMessage] = useState("");
  console.log(listing);

  useEffect(() => {
    const fetchLandlord = async () => {
      try {
        const res = await axios.get(`/api/user/${listing.userRef}`);
        const data = res.data;
        setLandlord(data);
        // console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchLandlord();
  }, []);

  return (
    <>
      {landlord && (
        <div className="flex flex-col gap-2">
          <p>
            Contact <span className="font-semibold ">{landlord.username}</span>{" "}
            for <span className="font-semibold [">{listing.name}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Enter your message here..."
            className="w-full border p-3 rounded-lg"></textarea>
          <Link
            to={`mailto:${landlord.email}?subject=Regarding ${listing.name}&body=${message}`}
            className="bg-slate-700 text-white text-center p-3 uppercase rounded-lg hover:opacity-95">
            Send Message
          </Link>
        </div>
      )}
    </>
  );
};

export default Contact;
