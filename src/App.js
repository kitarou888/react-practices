import { useState, useEffect, useMemo } from "react";
import "./App.css";
import { MemoList } from "./MemoList";
import { MemoEditor } from "./MemoEditor";
import { LoginContext } from "./LoginContext";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const memoDataKey = "memoDataKey";
  const initialMemos = JSON.parse(localStorage.getItem(memoDataKey)) ?? [];

  const [memos, setMemos] = useState(initialMemos);
  const [editId, setEditId] = useState(null);

  const selectedMemo = useMemo(
    () => memos.find((memo) => memo.id === editId),
    [editId, memos],
  );

  const handleLogin = () => setIsLogin(!isLogin);

  const handleCreate = () => {
    const nextId =
      memos.length === 0 ? 1 : Math.max(...memos.map((memo) => memo.id)) + 1;
    const nextMemos = [
      {
        id: nextId,
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
    localStorage.setItem(memoDataKey, JSON.stringify(memos));
  }, [memos]);

  return (
    <>
      <header className="header">
        <div>
          <button onClick={handleLogin}>
            {isLogin ? "ログアウト" : "ログイン"}
          </button>
        </div>
      </header>
      <LoginContext.Provider value={isLogin}>
        <main className="container">
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
                memo={selectedMemo}
                onUpdate={handleUpdate}
                onDelete={handleDelete}
              />
            )}
          </section>
        </main>
      </LoginContext.Provider>
    </>
  );
}

export default App;
