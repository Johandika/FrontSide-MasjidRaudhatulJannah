import { useParams } from "react-router-dom";

function LinkKajianDetail() {
  let { id } = useParams();

  return (
    <div>
      <h2>Detail Kajian dengan ID: {id}</h2>
    </div>
  );
}

export default LinkKajianDetail;

// const LinkKajianDetail = () => {
//   return (
//     <div>
//       <div className="flex flex-col  text-greenText rounded-lg bg-Gray1 px-6 py-2 ">
//         <h1 className="font-bold text-2xl">Kajian Tafsir As-Sa'dy</h1>
//         <h2 className="font-semibold">Ust Dr. Aspri Rahmat Azai</h2>
//       </div>
//       <div className="flex flex-col  text-neutral-600 ">
//         <div className="flex flex-row gap-4 px-6 py-1 items-center">
//           <div className="text-sm font-medium">Surat Muhammad 1-5</div>
//           <div className="cursor-pointer py-[3px] px-4 bg-greenBackground hover:bg-TextYellow hover:scale-110 transition rounded-full outline-1 text-white hover:text-black text-xs">
//             Link
//           </div>
//         </div>
//         <div className="flex flex-row gap-4 px-6 py-1 items-center bg-slate-50 ">
//           <div className="text-sm font-medium">Surat Muhammad 1-5</div>
//           <div className="cursor-pointer py-[3px] px-4 bg-greenBackground hover:bg-TextYellow hover:scale-110 transition rounded-full text-white hover:text-black text-xs">
//             Link
//           </div>
//         </div>
//         <div className="flex flex-row gap-4 px-6 py-1 items-center">
//           <div className="text-sm font-medium">Surat Muhammad 1-5</div>
//           <div className="cursor-pointer py-[3px] px-4 bg-greenBackground hover:bg-TextYellow hover:scale-110 transition rounded-full text-white hover:text-black text-xs">
//             Link
//           </div>
//         </div>
//         <div className="flex flex-row gap-4 px-6 py-1 items-center bg-slate-50 ">
//           <div className="text-sm font-medium">Surat Muhammad 1-5</div>
//           <div className="cursor-pointer py-[3px] px-4 bg-greenBackground hover:bg-TextYellow hover:scale-110 transition rounded-full text-white hover:text-black text-xs">
//             Link
//           </div>
//         </div>
//         <div className="flex flex-row gap-4 px-6 py-1 items-center">
//           <div className="text-sm font-medium">Surat Muhammad 1-5</div>
//           <div className="cursor-pointer py-[3px] px-4 bg-greenBackground hover:bg-TextYellow hover:scale-110 transition rounded-full text-white hover:text-black text-xs">
//             Link
//           </div>
//         </div>
//         <div className="flex flex-row gap-4 px-6 py-1 items-center bg-slate-50 ">
//           <div className="text-sm font-medium">Surat Muhammad 1-5</div>
//           <div className="cursor-pointer py-[3px] px-4 bg-greenBackground hover:bg-TextYellow hover:scale-110 transition rounded-full text-white hover:text-black text-xs">
//             Link
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default LinkKajianDetail
