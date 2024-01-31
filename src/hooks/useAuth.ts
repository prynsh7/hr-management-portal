export function useAuth() {
  const session = "Value";
  //   getSession()
  const authed = session !== null && session !== undefined;
  return {
    authed,
    session,
  };
}
