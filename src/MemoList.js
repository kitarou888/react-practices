export function MemoList({ memos, onCreate, onEdit }) {
  return (
    <>
      {memos.map((memo) => (
        <div key={memo.id}>
          <button
            onClick={() => {
              onEdit(memo.id);
            }}
          >
            {memo.content.split("\n")[0]}
          </button>
        </div>
      ))}
      <button onClick={onCreate}>+</button>
    </>
  );
}
