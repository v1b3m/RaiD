import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../index";
import { removeProfile, setProfile, updateProfile, UserProfile } from "./index";

export type UserMutation = (user: UserProfile) => void;
export type RemoveUser = () => void;

export function UseAddUser(): UserMutation {
  const dispatch = useDispatch<AppDispatch>();
  return useCallback(
    (user: UserProfile) => {
      dispatch(setProfile(user));
    },
    [dispatch]
  );
}

export function UseUpdateUser(): UserMutation {
  const dispatch = useDispatch<AppDispatch>();
  return useCallback(
    (user: UserProfile) => {
      dispatch(updateProfile(user));
    },
    [dispatch]
  );
}

export function UseRemoveUser(): RemoveUser {
  const dispatch = useDispatch<AppDispatch>();
  return useCallback(() => {
    dispatch(removeProfile());
  }, [dispatch]);
}

export function UseGetUser(): UserProfile | Record<string, any> {
  return useSelector<RootState, RootState["user"]["profile"]>(
    ({ user: { profile } }) => profile
  );
}
