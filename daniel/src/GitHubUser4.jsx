import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => {
  if (!res.ok) {
    throw new Error('User not found');
  }
  return res.json();
});

const useGithubUser = (username) => {
  const { data, error, mutate } = useSWR(
    username ? `https://api.github.com/users/${username}` : null, 
    fetcher
  );

  const refetch = async () => {
    if (username) {
      await mutate();
    }
  };

  return {
    userData: data,
    loading: !error && !data,
    error: error?.message,
    refetch,
  };
};

export default useGithubUser;