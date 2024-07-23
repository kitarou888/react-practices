import { useState } from "react";
import "./App.css";
import { MemoList } from "./MemoList";
import { MemoEditor } from "./MemoEditor";

function App() {
  const [memos, setMemos] = useState(
    JSON.parse(localStorage.getItem("fjordPracticeReact")) ?? []
  );
  const [editId, setEditId] = useState(null);

  const handleCreate = () => {
    const nextId =
      memos.length > 0 ? Math.max(...memos.map((memo) => memo.id)) + 1 : 1;
    const nextMemos = [
      {
        id: nextId,
        content: "新規メモ",
      },
      ...memos,
    ];
    setMemos(nextMemos);
    setEditId(nextId);
    localStorage.setItem("fjordPracticeReact", JSON.stringify(nextMemos));
  };

  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleUpdate = (content) => {
    const nextMemos = memos.map((memo) => {
      if (memo.id === editId) {
        return { ...memo, content: content };
      } else {
        return memo;
      }
    });
    setMemos(nextMemos);
    setEditId(null);
    localStorage.setItem("fjordPracticeReact", JSON.stringify(nextMemos));
  };

  const handleDelete = (id) => {
    const nextMemos = memos.filter((memo) => memo.id !== id);
    setMemos(nextMemos);
    setEditId(null);
    localStorage.setItem("fjordPracticeReact", JSON.stringify(nextMemos));
  };

  return (
    <div className="container">
      <section className="list-container">
        <MemoList
          memos={memos}
          editId={editId}
          onCreate={handleCreate}
          onEdit={handleEdit}
          disabled={!!editId}
        />
      </section>
      <section className="editor-container">
        {editId && (
          <MemoEditor
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
