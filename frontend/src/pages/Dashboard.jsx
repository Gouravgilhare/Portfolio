import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
export default function Dashboard() {
  const [messages, setMessages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      navigate("/login");
      return;
    }

    fetch("http://localhost:8080/api/messages/all", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((res) => {
        if (res.status === 401) {
          localStorage.removeItem("token");
          navigate("/login");
        }
        return res.json();
      })
      .then((data) => {
        console.log("API response:", data);

        if (data.success && Array.isArray(data.data)) {
            setMessages(data.data);
        } else {
            setMessages([]);
        }
    })
      .catch((err) => console.error(err));
  }, [navigate]);

  return (<>
        <Navbar/>
    <div className="min-h-screen bg-black text-white p-10">
      <h1 className="text-3xl font-bold mb-8">Admin Dashboard</h1>

      <div className="overflow-x-auto">
        <table className="w-full bg-gray-900 rounded-lg">
          <thead>
            <tr className="text-left border-b border-gray-700">
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Message</th>
              <th className="p-4">Date</th>
            </tr>
          </thead>

          <tbody>
            {messages.map((msg) => (
                <tr key={msg._id} className="border-b border-gray-800">
                <td className="p-4">{msg.name}</td>
                <td className="p-4">{msg.email}</td>
                <td className="p-4">{msg.message}</td>
                <td className="p-4">
                  {new Date(msg.createdAt).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {messages.length === 0 && (
            <p className="text-gray-400 mt-6 text-center">No messages yet</p>
        )}
      </div>
    </div>
        </>
  );
}