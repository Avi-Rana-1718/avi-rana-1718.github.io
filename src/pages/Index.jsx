import Footer from "../components/Footer";
import Nav from "../components/Nav";

export default function Index() {
  return (
    <>
      <Nav />
      <main className="py-3 mt-5 text-sm">
        <h2 className="text-base mb-3 underline underline-offset-2">Welcome</h2>
        <p>
          Hello! My name is <span className="border-b-2 border-white border-dashed">Avi Rana</span>! I am computer science student. I <i>try</i> to make cool stuff in my
          freetime. I like <i>web dev</i> and am somewhat into <i>gamedev</i>.
          <br />
          <br />
          Explore the other pages aswell!
        </p>
      </main>
      <Footer />
    </>
  );
}
