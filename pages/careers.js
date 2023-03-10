import Link from "next/link";

export default function Careers() {
  return(
    <div className='flex flex-col items-center justify-center h-screen bg-gray-100'>
      <h1 className="text-4xl">Careers coming soon</h1>
      <Link href={'/'} className="p-4 m-4 text-2xl bg-gray-300 rounded-lg   hover:bg-purple-700 hover:text-white">Back to home</Link>
    </div>
  );
}