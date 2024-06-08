import RemoveBtn from "./RemoveBtn";
import Link from "next/link";
import {HiPencilAlt} from "react-icons/hi";

const getTopics = async () => {
  try {
    const res = await fetch("http://localhost:3000/api/topics", {
      cache: 'no-store',
    });
    if(!res.ok) {
      throw new Error('Network response was not ok');
    } 
    return res.json();
  } catch (error) {
    console.log(error);
  }
};

export default function TopicsList() {
  return (
    <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
      <div> 
        <h2 className="font-bold text-2xl">Topic Title</h2>
        <div>Topic Description</div>
      </div>
      <div className="flex gap-2">
        <RemoveBtn/>
        <Link href={'/editTopic/123'}><HiPencilAlt size ={24} /></Link>
      </div>
    </div>
  );
}