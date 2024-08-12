import { useState, useEffect } from "react";
import "./App.css";
import { MemoList } from "./MemoList";
import { MemoEditor } from "./MemoEditor";

const initialMemos =
  JSON.parse(localStorage.getItem("fjordPracticeReact")) ?? [];
let nextId =
  initialMemos.length === 0
    ? 0
    : Math.max(...initialMemos.map((memo) => memo.id));

function App() {
  const [memos, setMemos] = useState(initialMemos);
  const [editId, setEditId] = useState(null);

  const handleCreate = () => {
    const nextMemos = [
      {
        id: ++nextId,
        content: "新規メモ",
      },
      ...memos,
    ];
    setMemos(nextMemos);
    setEditId(nextId);
  };

  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleUpdate = (content) => {
    const nextMemos = memos.map((memo) => {
      if (memo.id === editId) {
        return { ...memo, content };
      } else {
        return memo;
      }
    });
    setMemos(nextMemos);
    setEditId(null);
  };

  const handleDelete = (id) => {
    const nextMemos = memos.filter((memo) => memo.id !== id);
    setMemos(nextMemos);
    setEditId(null);
  };

  useEffect(() => {
    localStorage.setItem("fjordPracticeReact", JSON.stringify(memos));
  }, [memos]);

  return (
    <div className="container">
      <section className="list-container">
        <MemoList
          memos={memos}
          editId={editId}
          onCreate={handleCreate}
          onEdit={handleEdit}
        />
      </section>
      <section className="editor-container">
        {editId && (
          <MemoEditor
            key={editId}
            memo={memos.find((memo) => memo.id === editId)}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        )}
      </section>
    </div>
  );
}

export default App;
