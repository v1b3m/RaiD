import User from "../types/User";

export const updateUserDetails = async (
  userId: number,
  token: string,
  userDetails: Partial<User>
) => {
  const response = await fetch(`/api/users/${userId}/`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(userDetails),
  });
  const json = await response.json();
  return json;
};
