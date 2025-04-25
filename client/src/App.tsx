import { Route, Switch } from "wouter";
import LandingPage from "@/pages/LandingPage";
import MapPage from "@/pages/MapPage";
import NotFound from "@/pages/not-found";

function App() {
  return (
    <div className="min-h-screen">
      <Switch>
        <Route path="/" component={LandingPage} />
        <Route path="/map" component={MapPage} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
