import { useContext, useState } from "react";
import { LoginContext } from "./LoginContext";

export function MemoEditor({ memo, onUpdate, onDelete }) {
  const isLogin = useContext(LoginContext);
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
        {isLogin && (
          <div className="button-container">
            <button className="update-button" type="submit">
              更新
            </button>
            <button className="delete-button" onClick={() => onDelete(memo.id)}>
              削除
            </button>
          </div>
        )}
      </form>
    </>
  );
}
