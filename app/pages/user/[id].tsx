import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";

const USER_QUERY = gql`
  query User($id: ID!) {
    user(id: $id) {
      id
      name
      posts {
        id
        title
      }
    }
  }
`;

export default function User() {
  const router = useRouter();
  const { id } = router.query;

  const { loading, error, data } = useQuery(USER_QUERY, {
    variables: { id },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      <h1>{data.user.name}</h1>
      {data.user.posts.map((post: { id: string; title: string }) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
