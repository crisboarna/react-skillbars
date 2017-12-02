import React from 'react';
import Content from './Content';
import './App.scss';

const App = () => (
  <div className="container">
    <div className="container-fluid">
      <h1>SkillBar Demo</h1>
      <h3>Series of React SkillBar components to be used in your projects</h3>
      <p>Scroll through the page to see the available styling options.</p>
      <p><strong>If you have any suggestions please do not hesitate to raise a request / pull on Github</strong></p>
    </div>

    <div className="row">
      <div className="col-sm-3">
        <div className="sidebar-nav" data-spy="affix" data-offset-top="205">
          <div className="navbar navbar-default" role="navigation">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".sidebar-navbar-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
                <span className="icon-bar"></span>
              </button>
              <span className="visible-xs navbar-brand">Sidebar menu</span>
            </div>
            <div className="navbar-collapse collapse sidebar-navbar-collapse">
              <ul className="nav navbar-nav">
                <li><a href="#default">Basic Example</a></li>
                <li><a href="#animationDelay">Basic Example with animationDelay</a></li>
                <li><a href="#animationDuration">Basic Example with animationDuration</a></li>
                <li><a href="#hueBar">Hue Colored Bar</a></li>
                <li><a href="#hueBarText">Hue Colored Bar & Text</a></li>
                <li><a href="#hueBarTextBg">Hue Colored Bar & Text & Text Bg</a></li>
                <li><a href="#hueWithSolidColors">Hue with Solid Colors</a></li>
                <li><a href="#elementFirstBar">Element Coloring Individual Bar</a></li>
                <li><a href="#elementAllBar">Element Coloring All Bars</a></li>
                <li><a href="#elementAllBarText">Element Coloring All Bars & Text</a></li>
                <li><a href="#elementAllBarAllTextBg">Element Coloring All Bars & All Text & Bg</a></li>
                <li><a href="#hueWithElementOverride">Hue with Element coloring override</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="col-sm-9">
        <Content/>
      </div>
    </div>
  </div>
);

export default App;
