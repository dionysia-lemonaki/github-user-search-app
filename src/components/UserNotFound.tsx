const UserNotFound = () => {
  return (
    <div className="mt-8 md:mt-10 text-center bg-neutral-0 dark:bg-neutral-800 p-8 md:p-12">
      <h1 className=" text-neutral-700 dark:text-neutral-0 font-bold leading-[1.4] text-[1.375rem]">
        No results found!
      </h1>
      <p className="text-neutral-300 mt-4 dark:text-neutral-200 font-normal leading-normal text-[0.9375rem]">
        We couldn't find any GitHub users matching your search. Please
        double-check the username and try again.
      </p>
    </div>
  );
};

export default UserNotFound;
