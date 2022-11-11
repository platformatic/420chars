import { useQuery, useMutation } from 'urql'

const getCurrentUser = `
  query {
    users {
      id
      auth0Id
    }
  }
`

const SaveUser = `
  mutation saveMe {
    saveUser (input: {}) {
      id
    }
  }
`

export default function Timeline () {
  const [result] = useQuery({
    query: getCurrentUser
  });

  const [saveUserResult, saveUser] = useMutation(SaveUser);

  const { data, fetching, error } = result;

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  console.log({ data })

  if (data.users.length === 0) {
    saveUser()
  }
}
