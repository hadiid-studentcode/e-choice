export default function Page({ params }) {
  return (
    <>
      <div>Nama: {params.data[0]}</div>
      <div>Nama: {params.data[1]}</div>
    </>
  );
}
