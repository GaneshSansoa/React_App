import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import MovieDetail from "./components/MovieDetail";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Home from "./pages/Home";
import Customers from "./pages/Customers";
import Rentals from "./pages/Rentals";
import Counters from "./pages/Counters";
import NotFound from "./pages/NotFound";
import LoginForm from "./components/LoginForm";
import MovieForm from "./components/MovieForm";
import { getMovies } from "./services/fakeMovieService";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Vivdy from "./pages/Vivdy";
import RegisterForm from "./components/RegisterForm";

class App extends React.Component {
  state = {
    counters: [
      { id: 1, value: 4 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };
  handleDelete = (handleId) => {
    const counters = this.state.counters.filter((c) => c.id !== handleId);
    this.setState({
      counters,
    });
  };
  handleReset = () => {
    console.log("hadle reset");
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters });
  };
  handleIncrement = (counter) => {
    const counters = [...this.state.counters];
    // counters[0].value++;
    // console.log(this.state.counters[0]);

    const index = counters.indexOf(counter);
    counter[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  };
  handleDecrement = (counter) => {
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value--;
    this.setState({ counters });
  };
  render() {
    return (
      <div className="App">
        <Nav
          getCounts={this.state.counters.filter((c) => c.value > 0).length}
        />
        <div className="AppContainer mt-5">
          <Switch>
            <Route path="/register" component={RegisterForm} />} />
            <Route path="/login" component={LoginForm} />
            <Route path="/about" component={About} />
            <Route path="/shop" component={Shop} />
            <Route
              path="/counters"
              render={(props) => (
                <Counters
                  onDelete={this.handleDelete}
                  onIncrement={this.handleIncrement}
                  onDecrement={this.handleDecrement}
                  onReset={this.handleReset}
                  counters={this.state.counters}
                  {...props}
                />
              )}
            />
            <Route
              path="/movies/new"
              render={(props) => <MovieForm movies={getMovies()} {...props} />}
            />
            <Route path="/movies/:id" component={MovieDetail} />
            <Route path="/movies" component={Vivdy} />
            <Route path="/customers" component={Customers} />
            <Route path="/rentals" component={Rentals} />
            <Route path="/not-found" component={NotFound} />
            <Route path="/" exact component={Home} />
            <Redirect to="/not-found" />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
