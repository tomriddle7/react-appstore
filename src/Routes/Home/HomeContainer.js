import React from "react";
import HomePresenter from "./HomePresenter";
import { storeApi } from "../../api";

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
      } = await storeApi.getUpcomingApps();
      const {
        data: { feed: upcomingGames }
      } = await storeApi.getUpcomingGames();
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
