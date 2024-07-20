export function MemoEditor({ memos, onUpdate, onDelete }) {
  return (
    <>
      {memos.map((memo) => (
        <>
          <div>
            <textarea autoFocus rows="5" cols="33" value={memo.content} />
          </div>
          <div className="button-container">
            <button onClick={() => onUpdate(memo.id, memo.content)}>
              編集
            </button>
            <button onClick={() => onDelete(memo.id)}>削除</button>
          </div>
        </>
      ))}
    </>
  );
}
// .find((memo) => memo.isEdit)
