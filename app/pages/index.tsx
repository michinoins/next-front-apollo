import { useQuery, gql } from '@apollo/client';

const USERS_QUERY = gql`
  query {
    users {
      id
      name
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(USERS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.users.map((user: { id: string, name: string }) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
}
