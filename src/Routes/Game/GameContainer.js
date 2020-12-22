import React from "react";
import GamePresenter from "./GamePresenter";
import { storeApi } from "../../api";

export default class extends React.Component {
  state = {
    topFreeGames: null,
    topPaidGames: null,
    isToggle: true,
    error: null,
    loading: true
  };
  toggleState = () => {
    this.setState({isToggle: !this.state.isToggle})
  }
  componentDidMount() {
    this.getGames();
  }
  getGames = async () => {
    try {
      const {
        data: { feed: topFreeGames }
      } = await storeApi.getTopFreeGames();
      const {
        data: { feed: topPaidGames }
      } = await storeApi.getTopPaidGames();
      this.setState({
        topFreeGames,
        topPaidGames
      });
    } catch (e) {
      this.setState({
        error: "Can't find game information."
      });
    } finally {
      this.setState({ loading: false });
    }
  };
  render() {
    const { topFreeGames, topPaidGames, isToggle, loading, error } = this.state;
    return (
      <GamePresenter
        topFreeGames={topFreeGames}
        topPaidGames={topPaidGames}
        isToggle={isToggle}
        error={error}
        loading={loading}
        toggleState={this.toggleState}
      />
    );
  }
}
