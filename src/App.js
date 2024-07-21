import { useState } from "react";
import "./App.css";
import { initialMemoList } from "./data";
import { MemoList } from "./MemoList";
import { MemoEditor } from "./MemoEditor";

function App() {
  const [memos, setMemos] = useState(initialMemoList);
  const [editId, setEditId] = useState(null);

  const handleCreate = () => {
    const newId = Math.max(...memos.map((memo) => memo.id)) + 1;
    setMemos([
      {
        id: newId,
        content: "新規メモ",
        isEdit: true,
      },
      ...memos,
    ]);
    setEditId(newId);
  };

  const handleEdit = (id) => {
    setEditId(id);
  };

  const handleUpdate = (content) => {
    setMemos(
      memos.map((memo) => {
        if (memo.id === editId) {
          return { ...memo, content: content };
        } else {
          return memo;
        }
      })
    );
    setEditId(null);
  };

  const handleDelete = (id) => {
    setMemos(memos.filter((memo) => memo.id !== id));
    setEditId(null);
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
