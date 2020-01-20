import React from "react";
import ApplicationPresenter from "./ApplicationPresenter";
import { getTopFreeApps, getTopPaidApps } from "../../api";

export default class extends React.Component {
  state = {
    topFreeApps: null,
    topPaidApps: null,
    isToggle: true,
    error: null,
    loading: true
  };
  toggleState = () => {
    this.setState({isToggle: !this.state.isToggle})
  }
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
    const { topFreeApps, topPaidApps, isToggle, loading, error } = this.state;
    return (
      <ApplicationPresenter
        topFreeApps={topFreeApps}
        topPaidApps={topPaidApps}
        isToggle={isToggle}
        error={error}
        loading={loading}
        toggleState={this.toggleState}
      />
    );
  }
}
