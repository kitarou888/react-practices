import { useState } from "react";
import "./App.css";

const initialMemoList = [
  {
    id: 1,
    content: "メモ１\nメモ１の内容\nメモ１の内容\nメモ１の内容",
    isEdit: false,
  },
  {
    id: 2,
    content: "メモ２\nメモ２の内容\nメモ２の内容\nメモ２の内容",
    isEdit: false,
  },
  {
    id: 3,
    content: "メモ３\nメモ３の内容\nメモ３の内容\nメモ３の内容",
    isEdit: false,
  },
];

function App() {
  const [memos, setMemos] = useState(initialMemoList);

  const handleCreateMemo = () => {
    setMemos([
      {
        id: Math.max(...initialMemoList.map((memo) => memo.id)) + 1,
        content: "新規メモ",
        isEdit: true,
      },
      ...memos,
    ]);
  };

  const handleUpdateMemo = (content) => {
    setMemos(
      memos.map((memo) => {
        if (true) {
          return memo;
        } else {
          return memo;
        }
      })
    );
  };

  const handleDeleteMemo = (id) => {
    setMemos(memos.filter((memo) => memo.id !== id));
  };

  const memoLists = memos.map((memo) => (
    <div key={memo.id}>{memo.content.split("\n")[0]}</div>
  ));
  return (
    <div className="container">
      <section className="memo-list">
        {memoLists}
        <button onClick={handleCreateMemo}>+</button>
      </section>
      <section className="memo-editor">
        <div>
          <textarea rows="5" cols="33">
            あいうえお
          </textarea>
        </div>
        <div className="button-container">
          <button onClick={() => handleUpdateMemo()}>編集</button>
          <button onClick={() => handleDeleteMemo()}>削除</button>
        </div>
      </section>
    </div>
  );
}

export default App;
