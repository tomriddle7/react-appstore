import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const globalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        font-size:18px;
        background-color:rgba(0, 0, 0, 1);
        color:white;
        padding-bottom:70px;
    }
    .toggle-switch {
      position: relative;
      width: 100%;
      display: inline-block;
      vertical-align: middle;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      text-align: left;
      &-checkbox {
        display: none;
      }
      &-label {
        display: block;
        overflow: hidden;
        cursor: pointer;
        border: 0 solid #ccc;
        border-radius: 5px;
        margin: 0;
      }
      &-inner {
        display: block;
        width: 200%;
        margin-left: -100%;
        transition: margin 0.3s ease-in 0s;
        &:before,
        &:after {
          display: block;
          float: left;
          width: 50%;
          height: 40px;
          padding: 0;
          line-height: 40px;
          font-size: 20px;
          color: white;
          box-sizing: border-box;
        }
        &:before {
          content: attr(data-yes);
          text-transform: uppercase;
          padding-left: 10%;
          background-color: #2a2a2c;
          color: #ffffff;
        }
      }
      &-disabled {
        background-color: #2a2a2c;
        cursor: not-allowed;
        &:before {
          background-color: #2a2a2c;
          cursor: not-allowed;
        }
      }
      &-inner:after {
        content: attr(data-no);
        text-transform: uppercase;
        padding-right: 10%;
        background-color: #2a2a2c;
        color: #ffffff;
        text-align: right;
      }
      &-switch {
        display: block;
        width: 50%;
        margin: 5px;
        background: #646469;
        position: absolute;
        top: 0;
        bottom: 0;
        right: 48%;
        border: 0 solid #646469;
        border-radius: 5px;
        transition: all 0.3s ease-in 0s;
      }
      &-checkbox:checked + &-label {
        .toggle-switch-inner {
          margin-left: 0;
        }
        .toggle-switch-switch {
          right: 0px;
        }
      }
      &.small-switch {
        width: 40px;
        .toggle-switch-inner {
          &:after,
          &:before {
            content: "";
            height: 20px;
            line-height: 20px;
          }
        }
        .toggle-switch-switch {
          width: 16px;
          right: 20px;
          margin: 2px;
        }
      }
      @media screen and (max-width: 991px) {
        transform: scale(0.9);
      }
      @media screen and (max-width: 767px) {
        transform: scale(0.825);
      }
      @media screen and (max-width: 575px) {
        transform: scale(0.75);
      }
    }
    
    .mobileShow{
        @media only screen and (min-width: 768px) {
            display: none;
        }
    }
    .desktopShow{
        @media only screen and (max-width: 768px) {
            display: none;
        }
    }
`;

export default globalStyles;