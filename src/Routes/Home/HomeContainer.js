import React from "react";
import HomePresenter from "./HomePresenter";
import { getUpcomingApps, getUpcomingGames } from "../../api";

export default class extends React.Component {
  state = {
    upcomingApps: null,
    upcomingGames: null,
    error: null,
    loading: true
  };
  componentDidMount() {
    this.getHome();
  }
  getHome = async () => {
    try {
      const {
        data: { feed: upcomingApps }
      } = await getUpcomingApps();
      const {
        data: { feed: upcomingGames }
      } = await getUpcomingGames();
      this.setState({
        upcomingApps,
        upcomingGames
      });
    } catch (e) {
      this.setState({
        error: "Can't find app information."
      });
    } finally {
      this.setState({ loading: false });
    }
  };
  render() {
    return <HomePresenter {...this.state} />;
  }
}
