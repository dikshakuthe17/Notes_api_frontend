import React, { useState, useEffect } from "react";
import api from "../api";

export default function Notes() {
    const [notes, setNotes] = useState([]);
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const token = localStorage.getItem("token");

    useEffect(() => {
        api.get("/notes", {
            headers: { Authorization: token },
        }).then((res) => setNotes(res.data));
    }, []);

    const addNote = async () => {
        const res = await api.post(
            "/notes",
            { title, content },
            { headers: { Authorization: token } }
        );
        setNotes([...notes, res.data]);
    };

    return (
        <div className="p-10">
            <h1 className="text-2xl font-bold mb-4">Your Notes</h1>
            <input
                placeholder="Title"
                className="border p-2 mr-2"
                onChange={(e) => setTitle(e.target.value)}
            />
            <input
                placeholder="Content"
                className="border p-2 mr-2"
                onChange={(e) => setContent(e.target.value)}
            />
            <button
                onClick={addNote}
                className="bg-blue-500 text-white px-4 py-2 rounded"
            >
                Add Note
            </button>

            <ul className="mt-5">
                {notes.map((n) => (
                    <li key={n._id} className="border p-2 mb-2">
                        <h2 className="font-bold">{n.title}</h2>
                        <p>{n.content}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
