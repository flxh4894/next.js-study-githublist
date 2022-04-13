import fetch from "isomorphic-unfetch";

// 정적 페이지 동작 테스트
const name = ({ user, time }) => {
  const username = user && user.name;
  return (
    <div>
      {username}
      {time}
    </div>
  );
};

export const getStaticProps = async ({ params }) => {
  try {
    const res = await fetch(`https://api.github.com/users/${params.name}`);
    const user = await res.json();
    return { props: { user, time: new Date().toISOString() } };
  } catch (e) {
    console.log(e);
    return { props: {} };
  }
};
export async function getStaticPaths() {
  return {
    paths: [{ params: { name: "flxh4894" } }],
    fallback: false,
  };
}
export default name;
