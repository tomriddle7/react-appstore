import React from "react";
import ApplicationPresenter from "./ApplicationPresenter";
import { getTopFreeApps, getTopPaidApps } from "../../api";

export default class extends React.Component {
  state = {
    topFreeApps: null,
    topPaidApps: null,
    error: null,
    loading: true
  };
  componentDidMount() {
    this.getApps();
  }
  getApps = async () => {
    try {
      const {
        data: { feed: topFreeApps }
      } = await getTopFreeApps();
      const {
        data: { feed: topPaidApps }
      } = await getTopPaidApps();
      this.setState({
        topFreeApps,
        topPaidApps
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
    return <ApplicationPresenter {...this.state} />;
  }
}
