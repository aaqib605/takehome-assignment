function PageItem({ name, checked, onChange }) {
  return (
    <div className="flex gap-1.5 justify-between items-center py-1 pr-4 pl-5 w-full bg-white h-[42px]">
      <div className="my-auto">{name}</div>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => onChange(e.target.checked)}
        className="shrink-0 aspect-square w-[15px] rounded-lg border border-red-50"
      />
    </div>
  );
}

export default PageItem;
