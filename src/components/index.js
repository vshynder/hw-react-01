import React from "react";
import { Profile } from "./Profile/Profile";
import { Statistics } from "./Statistics/Statistics";
import user from "./Profile/user.json";
import statistics from "./Statistics/statistical-data.json";

export const App = () => {
  return (
    <div>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={statistics} />
    </div>
  );
};
