import { useState } from "react";

export function MemoEditor({ memo, onUpdate, onDelete }) {
  const [content, setContent] = useState(memo.content);

  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onUpdate(content);
        }}
      >
        <div>
          <textarea
            autoFocus
            rows="5"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <div className="button-container">
          <button className="update-button" type="submit">
            編集
          </button>
          <button className="delete-button" onClick={() => onDelete(memo.id)}>
            削除
          </button>
        </div>
      </form>
    </>
  );
}
