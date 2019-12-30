import React from "react";
import DetailPresenter from "./DetailPresenter";
import { getDetail } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    results: {}
  };
  componentDidMount() {
    this.getDetail();
  }
  getDetail = async () => {
    try {
      const {
          match: {
            params: { id }
          },
          history: { push }
      } = this.props;
      const parsedId = parseInt(id);
      if (isNaN(parsedId)) {
        return push("/");
      }
      const { data: detail } = await getDetail(parsedId);
      console.log(detail.results[0]);
      this.setState({
        results: detail.results[0]
      });
    } catch (e) {
      console.log(e);
    } finally {
      this.setState({ loading: false });
    }
  };
  render() {
    return <DetailPresenter {...this.state} />;
  }
}
