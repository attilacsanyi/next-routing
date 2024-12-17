"use client";

const ArchiveErrorPage = ({ error }: { error: Error }) => {
  return (
    <div id="error">
      <h2>An error occurred!</h2>
      <p>{error.message}</p>
    </div>
  );
};

export default ArchiveErrorPage;
