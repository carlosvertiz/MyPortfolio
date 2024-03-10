
export function ChangeLanguages() {
  const currentPath = window.location.pathname;
  console.log(currentPath)

  return (
    <div className="flex flex-row gap-4 px-4 py-1 w-fit mt-2 ml-6 border-solid border border-indigo-800/80 rounded-xl lg:mt-5">
      <a href="/" className={`hover:text-teal-950	 ${currentPath == "/" ? "text-sky-500	" : ""}`}>EN</a>
      <div className="border-l border-indigo-800/80 my-1"></div>
      <a href="/es" className={`hover:text-teal-950	 ${currentPath == "/es"? "text-sky-500	" : ""}`}>ES</a>
    </div>
  );
}