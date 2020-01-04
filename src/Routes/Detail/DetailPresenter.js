import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { Route, Link, withRouter } from "react-router-dom";
import Loader from "../../Components/Loader";


const Container = styled.div`
  height: calc(100vh + 100px);
  width: 100%;
  position: relative;
  padding: 50px;
`;

const Content = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  z-index: 1;
  height: 100%;
`;

const Summary = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const Icon = styled.div`
  background-image: url(${props => props.bgUrl});
  background-position: center;
  background-size: cover;
  width: 20vw;
  height: 20vw;
  border-radius: 22.37%;
`;

const Scope = styled("div")`
  width:${props => props.widthPer}vw;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
`;

const Button = styled("a")`
  border-radius: 25px;
  background: #1c1c1e;
  padding: 10px;
  color: #0b84fe;
`;

const ScreenShotP = styled.div`
  display: flex;
`;

const ScreenShot = styled.div`
  background-image: url(${props => props.bgUrl});
  background-position: center;
  background-size: cover;  
  width: 14vw;
  height: 30vw;
  margin: 2px;
`;

const UpdateP = styled.div`
  line-height: 1.5;
`;

const OverviewP = styled.div`
  line-height: 1.5;
`;

const Overview = styled.div`
  line-height: 1.5;
  display: flex;
`;

const Overview2 = styled.p`
  font-size: 12px;
  opacity: 0.7;
  line-height: 1.5;
  width: 50%;
`;

const Data = styled.div`
  width: 70%;
  margin-left: 10px;
`;

const Title = styled.h3`
  font-size: 32px;
`;

const ItemContainer = styled.div`
  margin: 20px 0;
`;

const Item = styled.span``;

const Divider = styled.span`
  margin: 0 10px;
`;



const DetailPresenter = ({ loading, error, results }) =>
  loading ? (
    <>
      <Helmet>
        <title>Loading | NomadStore</title>
      </Helmet>
      <Loader />
    </>
  ) : (
    <Container>
      <Helmet>
          <title>{results.trackName} | NomadStore</title>
      </Helmet>
      <button>뒤로가기</button>
      <Summary>
        <Scope widthPer={20}>
          <Icon bgUrl={results.artworkUrl100}></Icon>
        </Scope>
        <Scope widthPer={60}>
          <h1>{results.trackName}</h1>
          <h1>{results.artistName}</h1>
        </Scope>
        <Scope widthPer={20}>
        <Button target="_blank" href={results.trackViewUrl}>{results.formattedPrice}</Button>
        <h1>{results.trackContentRating}</h1>
        </Scope>
        
      </Summary>
      <ScreenShotP>
        {results.screenshotUrls.map(p => (
          <ScreenShot bgUrl={p}/>
        ))}
      </ScreenShotP>
      <h1>{results.description}</h1>
      <UpdateP>
        <h1>새로운 기능</h1>
        <h1>{results.version}</h1>
        <h1>{results.currentVersionReleaseDate}</h1>
        <h1>{results.releaseNotes}</h1>
      </UpdateP>
      <OverviewP>
        <h1>정보</h1>
        <Overview>
          <h1>제공자</h1>
          <h1>:</h1>
          <h1>{results.sellerName}</h1>
        </Overview>
        <Overview>
          <h1>크기</h1>
          <h1>:</h1>
          <h1>{(results.fileSizeBytes/1024/1024).toFixed(1)}MB</h1>
        </Overview>
        <Overview>
          <h1>카테고리</h1>
          <h1>:</h1>
          <h1>{results.primaryGenreName}</h1>
        </Overview>
        <Overview>
          <h1>언어</h1>
          <h1>:</h1>
          <h1>{results.languageCodesISO2A}</h1>
        </Overview>
        <Overview>
          <h1>연령 등급</h1>
          <h1>:</h1>
          <h1>{results.contentAdvisoryRating}</h1>
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
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
  };

export default DetailPresenter;
