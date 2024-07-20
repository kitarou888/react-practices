import { useState } from "react";
import "./App.css";
import { initialMemoList } from "./data";
import { MemoList } from "./MemoList";
import { MemoEditor } from "./MemoEditor";

function App() {
  const [memos, setMemos] = useState(initialMemoList);

  const handleCreate = () => {
    setMemos([
      {
        id: Math.max(...memos.map((memo) => memo.id)) + 1,
        content: "新規メモ",
        isEdit: true,
      },
      ...memos,
    ]);
  };

  const handleUpdate = (id, content) => {
    setMemos(
      memos.map((memo) => {
        if (true) {
          return { ...memo, content: content };
        } else {
          return memo;
        }
      })
    );
  };

  const handleDelete = (id) => {
    setMemos(memos.filter((memo) => memo.id !== id));
  };

  const handleEdit = (id) => {
    setMemos(
      memos.map((memo) => {
        if (memo.id === id) {
          return { ...memo, isEdit: true };
        } else {
          return memo;
        }
      })
    );
  };

  return (
    <div className="container">
      <section className="memo-list">
        <MemoList memos={memos} onCreate={handleCreate} onEdit={handleEdit} />
      </section>
      <section className="memo-editor">
        <MemoEditor
          memos={memos}
          onUpdate={handleUpdate}
          onDelete={handleDelete}
        />
      </section>
    </div>
  );
}

export default App;
