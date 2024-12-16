const ArchiveYearPage = async ({
  params,
}: {
  params: Promise<{ year: string }>;
}) => {
  const { year } = await params;
  return <div>Selected year: {year}</div>;
};

export default ArchiveYearPage;
