import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Route, Link, withRouter } from "react-router-dom";
import Loader from "../../Components/Loader";

const Container = styled.div`
  height: 100%;
  width: 100%;
  position: relative;
  padding: 20px;
`;

const BackButton = styled("a")`
  cursor: pointer;
  background: #00000000;
  color: #0b84fe;
  text-align: center;
`;

const Summary = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  margin: 10px;
`;

const Icon = styled.div`
  background-image: url(${props => props.bgUrl});
  background-position: center;
  background-size: cover;
  width: 20vw;
  height: 20vw;
  border-radius: 22.37%;
`;

const Scope = styled.div`
  width: ${props => props.widthPer}vw;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  margin: ${props => props.pxmargin}px;
`;

const StoreButton = styled("a")`
  border-radius: 25px;
  background: #1c1c1e;
  padding: 10px;
  color: #0b84fe;
  text-align: center;
`;

const ScreenShotP = styled.div`
  display: flex;
  justify-content: space-between;
  align-itmes: flex-start;
  flex-direction: column;
  height: 46vw;
  flex-wrap: wrap;
  overflow: auto;
  margin: 10px;
  &:after {
    content: '';
    height: 0;
    border-bottom: 1px #808084 solid;
    left: 24px;
    right: 24px;
    position: absolute;
  }
`;

const ScreenShot = styled.img`
  display: inline;
  width: auto;
  height: 100%;
  margin: 0px 5px;
`;

const Explanation = styled.div`
  line-height: 1.5;
  word-break: break-all;
  &:after {
    content: '';
    height: 0;
    border-bottom: 1px #808084 solid;
    left: 24px;
    right: 24px;
    position: absolute;
  }
`;

const UpdateviewP = styled.div`
  &:after {
    content: '';
    height: 0;
    border-bottom: 1px #808084 solid;
    left: 24px;
    right: 24px;
    position: absolute;
  }
`;

const UpdateDate = styled.div`
  width:100%;
  line-height: 1.5;
  display: flex;
  flex-direction: row;
  margin: 8px 0px;
`;

const UpdateDetail = styled.div`
  width:100%;
  line-height: 1.5;
  margin: 8px 0px;
`;

const OverviewP = styled.div`
  line-height: 1.5;
`;

const Overview = styled.div`
  width:100%;
  line-height: 1.5;
  display: flex;
  flex-direction: row;
  margin: 8px 0px;
  &:after {
    content: '';
    height: 0;
    border-bottom: 1px #808084 solid;
    left: 24px;
    right: 24px;
    position: absolute;
  }
  &:last-child::after {
		border-bottom: 0px #808084 solid;
  }
`;

const View = styled.div`
  width:${props => props.widthPer}%;
  text-align: ${props => props.align};
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 800;
`;

const DetailPresenter = ({ loading, error, results, goBack }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | NomadStore</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container className="mobileShow">
      <Helmet>
          <title>{results.trackName} | NomadStore</title>
      </Helmet>
      <BackButton onClick={goBack}>◀홈화면</BackButton>
      <Summary>
        <Scope widthPer={20} pxmargin={0}>
          <Icon bgUrl={results.artworkUrl100}></Icon>
        </Scope>
        <Scope widthPer={50}pxmargin={5}>
          <h1>{results.trackName}</h1>
          <h1>{results.artistName}</h1>
        </Scope>
        <Scope widthPer={30}pxmargin={0}>
        <StoreButton target="_blank" href={results.trackViewUrl}>
          {results.formattedPrice}
        </StoreButton>
        <h1>{results.trackContentRating}</h1>
        </Scope>
        
      </Summary>
      <ScreenShotP>
        {results.screenshotUrls.map((p, i) => (
          <ScreenShot key={i} src={p}/>
        ))}
      </ScreenShotP>
      <Explanation>{results.description.split('\n').map( line => {
            return (<span>{line}<br/></span>)
          })}</Explanation>
      <UpdateviewP>
        <Title>새로운 기능</Title>
        <UpdateDate>
          <View widthPer={50} align={"left"}>버전 {results.version}</View>
          <View widthPer={50} align={"right"}>{results.currentVersionReleaseDate.substr(0,4)}년 {results.currentVersionReleaseDate.substr(5,2)}월 {results.currentVersionReleaseDate.substr(8,2)}일</View>
        </UpdateDate>
        <UpdateDetail>{results.releaseNotes.split('\n').map( line => {
            return (<span>{line}<br/></span>)
          })}</UpdateDetail>
      </UpdateviewP>
      <OverviewP>
        <Title>정보</Title>
        <Overview>
          <View widthPer={25} align={"left"}>제공자</View>
          <View widthPer={75} align={"right"}>{results.sellerName}</View>
        </Overview>
        <Overview>
          <View widthPer={25} align={"left"}>크기</View>
          <View widthPer={75} align={"right"}>{(results.fileSizeBytes/1024/1024).toFixed(1)}MB</View>
        </Overview>
        <Overview>
          <View widthPer={25} align={"left"}>카테고리</View>
          <View widthPer={75} align={"right"}>{results.primaryGenreName}</View>
        </Overview>
        <Overview>
          <View widthPer={25} align={"left"}>언어</View>
          <View widthPer={75} align={"right"}>{results.languageCodesISO2A}</View>
        </Overview>
        <Overview>
          <View widthPer={25} align={"left"}>연령 등급</View>
          <View widthPer={75} align={"right"}>{results.contentAdvisoryRating}</View>
        </Overview>
      </OverviewP>
    </Container>
  );

DetailPresenter.propTypes = {
    results: PropTypes.arrayOf(PropTypes.shape({
      advisories: PropTypes.array.isRequired,
      appletvScreenshotUrls: PropTypes.array.isRequired,
      artistId: PropTypes.number.isRequired,
      artistName: PropTypes.string.isRequired,
      artistViewUrl: PropTypes.string.isRequired,
      artworkUrl100: PropTypes.string.isRequired,
      artworkUrl512: PropTypes.string.isRequired,
      artworkUrl60: PropTypes.string.isRequired,
      bundleId: PropTypes.string.isRequired,
      contentAdvisoryRating: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
      currentVersionReleaseDate: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      features: PropTypes.array.isRequired,
      fileSizeBytes: PropTypes.string.isRequired,
      formattedPrice: PropTypes.string.isRequired,
      copyright: PropTypes.string.isRequired,
      genreIds: PropTypes.array.isRequired,
      genres: PropTypes.array.isRequired,
      languageCodesISO2A: PropTypes.array.isRequired,
      minimumOsVersion: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      primaryGenreName: PropTypes.string.isRequired,
      releaseNotes: PropTypes.string.isRequired,
      screenshotUrls: PropTypes.array.isRequired,
      sellerName: PropTypes.string.isRequired,
      sellerUrl: PropTypes.string.isRequired,
      supportedDevices: PropTypes.array.isRequired,
      trackCensoredName: PropTypes.string.isRequired,
      trackContentRating: PropTypes.string.isRequired,
      trackId: PropTypes.number.isRequired,
      trackName: PropTypes.string.isRequired,
      trackViewUrl: PropTypes.string.isRequired,
      version: PropTypes.string.isRequired,
      wrapperType: PropTypes.string.isRequired,
    }).isRequired),
    goBack: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
  };

export default DetailPresenter;
