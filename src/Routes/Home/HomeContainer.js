import React from "react";
import HomePresenter from "./HomePresenter";
import { getHome } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    results: []
  };
  componentDidMount() {
    this.getPrices();
  }
  getPrices = async () => {
    try {
      const { data: feed } = await getHome();
      this.setState({
        results: feed.feed.results
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };
  render() {
    return <HomePresenter {...this.state} />;
  }
}
