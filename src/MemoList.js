export function MemoList({ memos, editId, onCreate, onEdit }) {
  const classNameButton = !editId ? "cursor-pointer" : "";

  return (
    <>
      {memos.map((memo) => (
        <div key={memo.id}>
          <button
            className={classNameButton + (memo.id !== editId && " underline")}
            onClick={() => {
              onEdit(memo.id);
            }}
            disabled={memo.id === editId}
          >
            {memo.content.split("\n")[0]}
          </button>
        </div>
      ))}
      <button
        className={classNameButton}
        onClick={onCreate}
        disabled={!!editId}
      >
        +
      </button>
    </>
  );
}
