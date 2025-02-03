export const WorkInProgress = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  return (
    <div className="container mx-auto max-w-6xl">
      <div className="mx-auto my-16 max-w-md md:max-w-6xl">
        <div className="mb-4 flex justify-center">
          <div className="relative flex flex-row items-center gap-2 rounded-full border border-current/10 bg-current/5 px-3 py-1 text-xs font-medium text-current/60">
            <span className="text-yellow-500">Work In Progress</span>
          </div>
        </div>
        <div className="text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-balance md:text-4xl">
            🚧 Coming Soon 🚧
          </h1>
          <p className="text-md mt-4 font-light text-pretty text-current/60 md:text-lg">
            {children}
          </p>
        </div>
      </div>
    </div>
  );
};
