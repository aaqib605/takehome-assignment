import React, { useState } from "react";
import PageItem from "./PageItem";
import Button from "./Button";

const initialPages = [
  { name: "All pages", checked: false },
  { name: "Page 1", checked: false },
  { name: "Page 2", checked: false },
  { name: "Page 3", checked: false },
  { name: "Page 4", checked: false },
];

function PageList() {
  const [pages, setPages] = useState(initialPages);

  const handleAllPagesChange = (checked) => {
    setPages(pages.map((page) => ({ ...page, checked })));
  };

  const handlePageChange = (index, checked) => {
    const newPages = [...pages];
    newPages[index].checked = checked;
    setPages(newPages);
  };

  return (
    <nav className="flex flex-col py-2.5 text-sm leading-5 bg-white rounded-md border border-solid  border-zinc-100 max-w-[370px] text-neutral-800 shadow-[0_3px_10px_rgb(0,0,0,0.2)] ">
      {pages.map((page, index) => (
        <React.Fragment key={index}>
          <PageItem
            name={page.name}
            checked={page.checked}
            onChange={(checked) =>
              index === 0
                ? handleAllPagesChange(checked)
                : handlePageChange(index, checked)
            }
          />
          {index === 0 && (
            <hr className="shrink-0 self-center my-2.5 max-w-[90%] h-px border border-solid bg-stone-300 border-stone-300 w-[340px]" />
          )}
        </React.Fragment>
      ))}
      <hr className="shrink-0 self-center mt-2.5 max-w-[90%] h-px border border-solid bg-stone-300 border-stone-300 w-[340px]" />
      <footer className="flex flex-col justify-center px-4 py-2.5 mt-2.5 w-full whitespace-nowrap bg-white text-neutral-800">
        <Button>Done</Button>
      </footer>
    </nav>
  );
}

export default PageList;
