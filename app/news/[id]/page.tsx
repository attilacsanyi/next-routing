const NewsDetailPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const { id } = await params;
  return (
    <>
      <h1>News DetailPage</h1>
      <p>News ID: {id}</p>
    </>
  );
};

export default NewsDetailPage;
