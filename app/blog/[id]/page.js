import Link from "next/link";

export default async function Page(props) {
  let title;
  let content;
  let date;
  let res = await fetch(
    "https://raw.githubusercontent.com/Avi-Rana-1718/avi-rana-1718.github.io/main/public/blogs/" +
      props.params.id +
      ".json"
  );
  let data = await res.json();

  title = await data.title;
  content = await data.content;
  date =
    new Date(await data.timestamp).getDate() +
    "/" +
    new Date(await data.timestamp).getMonth() +
    "/" +
    new Date(await data.timestamp).getFullYear();

  return (
    <>
      <article>
        <h2 className="text-2xl font-[500] my-1">{title}</h2>
        <time>{date}</time>
        <hr className="my-3" />
        <p dangerouslySetInnerHTML={{ __html: content }}></p>
      </article>
    </>
  );
}
