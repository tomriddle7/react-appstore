import React from "react";
import ApplicationPresenter from "./ApplicationPresenter";
import { storeApi } from "../../api";

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
      } = await storeApi.getTopFreeApps();
      const {
        data: { feed: topPaidApps }
      } = await storeApi.getTopPaidApps();
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
