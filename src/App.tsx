import React from 'react';
import { createContext } from 'react';
import { Outlet } from 'react-router-dom';

type cnd = {
  state: {
    username: string
  }
}
export const AppStatues = createContext<cnd>({
  state: {
    username: "moaazallaelden",
  }
});

const App: React.FC = () => {


  

  return <AppStatues.Provider value={{
    state: {
      username: "moaazallaelden",
    }
  }}>
<Outlet />
  </AppStatues.Provider>;

}

export default App;