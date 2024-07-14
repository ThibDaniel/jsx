import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => {
  if (!res.ok) {
    throw new Error('User not found');
  }
  return res.json();
});

const useGithubUser = (username) => {
  const { data, error } = useSWR(
    username ? `https://api.github.com/users/${username}` : null, 
    fetcher
  );

  return {
    userData: data,
    loading: !error && !data,
    error: error?.message,
  };
};

export default useGithubUser;