import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Route, Link, withRouter } from "react-router-dom";
import Loader from "../../Components/Loader";

const Title = styled("h1")``;

const DetailPresenter = withRouter(({ loading, error, results }) =>
  loading ? (
    <Loader />
  ) : (
    <>
      <img src={results.artworkUrl100} alt={results.trackName} />
      <h1>{results.trackName}</h1>
      <h1>{results.artistName}</h1>
      <h1>{results.formattedPrice}</h1>
      <h1>{results.trackContentRating}</h1>
      <h1>{results.screenshotUrls}</h1>
      <h1>{results.description}</h1>
      <div>
        <h1>새로운 기능</h1>
        <h1>{results.version}</h1>
        <h1>{results.currentVersionReleaseDate}</h1>
        <h1>{results.releaseNotes}</h1>
      </div>
      <div>
        <h1>정보</h1>
        <div>
          <h1>제공자</h1>
          <h1>{results.sellerName}</h1>
        </div>
        <div>
          <h1>크기</h1>
          <h1>{(results.fileSizeBytes/1024/1024).toFixed(1)}MB</h1>
        </div>
        <div>
          <h1>카테고리</h1>
          <h1>{results.primaryGenreName}</h1>
        </div>
        <div>
          <h1>언어</h1>
          <h1>{results.languageCodesISO2A}</h1>
        </div>
        <div>
          <h1>연령 등급</h1>
          <h1>{results.contentAdvisoryRating}</h1>
        </div>
      </div>
    </>
  )
);

DetailPresenter.propTypes = {
    results: PropTypes.arrayOf(PropTypes.shape({
      advisories: PropTypes.array.isRequired,
      appletvScreenshotUrls: PropTypes.array.isRequired,
      artistId: PropTypes.string.isRequired,
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
      sellerUrl: PropTypes.number.isRequired,
      supportedDevices: PropTypes.array.isRequired,
      trackCensoredName: PropTypes.string.isRequired,
      trackContentRating: PropTypes.string.isRequired,
      trackId: PropTypes.string.isRequired,
      trackName: PropTypes.string.isRequired,
      trackViewUrl: PropTypes.string.isRequired,
      version: PropTypes.string.isRequired,
      wrapperType: PropTypes.string.isRequired,
    }).isRequired),
    loading: PropTypes.bool.isRequired,
    error: PropTypes.string
  };

export default DetailPresenter;
