import { useId } from "react";
import { motion } from "framer-motion";

interface List {
  title: string;
  description: string;
  url: string;
  img: string;
}

export function ListProfile({ listarray }: { listarray: List[] }) {
  const id = useId();
  return (
    <>
      <ul className="max-w-2xl mx-auto w-full gap-4 mb-16 md:mb-0">
        {listarray.map((list) => (
          <motion.div
            layoutId={`card-${list.title}-${id}`}
            key={`card-${list.title}-${id}`}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row items-center">
              <motion.div layoutId={`image-${list.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={list.img}
                  alt={list.title}
                  className="h-14 w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div>
                <motion.h3
                  layoutId={`title-${list.title}-${id}`}
                  className="font-medium text-neutral-800 dark:text-neutral-200 text-center md:text-left"
                >
                  {list.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${list.description}-${id}`}
                  className="text-neutral-600 dark:text-neutral-400 text-center md:text-left"
                >
                  {list.description}
                </motion.p>
              </div>
            </div>
            <motion.a
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-gradient-to-r hover:from-purple-500 hover:to-blue-500 hover:text-white text-black mt-4 md:mt-0 transition duration-400 select-none"
              href={list.url}
              target="_blank"
            >
              Follow
            </motion.a>
          </motion.div>
        ))}
      </ul>
    </>
  );
}
