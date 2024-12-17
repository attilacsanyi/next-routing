const NewsDetailLayoutPage = ({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) => {
  return (
    <>
      {modal}
      {children}
    </>
  );
};

export default NewsDetailLayoutPage;
