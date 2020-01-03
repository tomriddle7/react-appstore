import React from "react";
import GamePresenter from "./GamePresenter";
import { getTopFreeGames, getTopPaidGames } from "../../api";

export default class extends React.Component {
  state = {
    topFreeGames: null,
    topPaidGames: null,
    error: null,
    loading: true
  };
  componentDidMount() {
    this.getGames();
  }
  getGames = async () => {
    try {
      const {
        data: { feed: topFreeGames }
      } = await getTopFreeGames();
      const {
        data: { feed: topPaidGames }
      } = await getTopPaidGames();
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
    return <GamePresenter {...this.state} />;
  }
}
