import React from "react";
import DetailPresenter from "./DetailPresenter";
import { getDetail } from "../../api";

export default class extends React.Component {
  state = {
    loading: true,
    error: null,
    results: {}
  };
  goBack = () => {
    this.props.history.goBack();
  }
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
    const { loading, error, results } = this.state;
    return (
      <DetailPresenter
        results={results}
        loading={loading}
        error={error}
        goBack={this.goBack}
      />
    );
  }
}
