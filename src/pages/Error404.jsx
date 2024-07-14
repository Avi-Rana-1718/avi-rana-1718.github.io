export default function Error404() {
    return (
        <>
        <h3 className="text-xl"> 404 | Not found!</h3>
        <p>The page you requested for was not found!</p>
        <a href="/" className="mt-3 text-sm p-1"><i className="fa-solid fa-caret-left mr-1"></i>Go back</a>
        </>
    )
}