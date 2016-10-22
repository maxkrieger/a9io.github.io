/**
 * React Static Boilerplate
 * https://github.com/koistya/react-static-boilerplate
 * Copyright (c) Konstantin Tarkus (@koistya) | MIT license
 */

import React, { Component } from 'react';
import Header from '../components/Header';
import BigText from '../components/BigText';
import SocialMedia from '../components/Socialmedia';
import Grid from '../components/Grid';
import ProjectBox from '../components/ProjectBox';
import Modal from '../components/Modal';
import Section from '../components/Section';
import Footer from '../components/Footer';

export default class extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: '',
    };
  }
  showProject(project) {
    this.setState({show: project});
  }
  hideProject() {
    this.setState({show: ''});
  }
  render() {
    return (
      <div className="page">
        <div className="showing">
				<Header />
				<BigText>
					A designer & developer from Boston, currently in high school.
				</BigText>
				<SocialMedia />
				<Grid title="Projects">
          <ProjectBox clicked={(item) => this.showProject(item)} title="LiquidTime" image="liquidtime.png"/>
          <ProjectBox clicked={(item) => this.showProject(item)} title="Spotify Offline" image="spotify-offline.png"/>
					<ProjectBox clicked={(item) => this.showProject(item)} title="alienbox" image="alienbox.png"/>
					<ProjectBox clicked={(item) => this.showProject(item)} title="Tabmaster" image="tabmaster.png"/>
				</Grid>
        <Grid title="Experience">
          <ProjectBox clicked={(item) => this.showProject(item)} title="CabinetCloud" image="cabinet.png" />
          <ProjectBox clicked={(item) => this.showProject(item)} title="MIT Racecar" image="racecar.png" />
        </Grid>
        <Section title="About">
          <div className="row">
          <div className="col-sm-6 col-xs-12">
          <p>I'm a designer & developer in high school from the Boston area who has a passion for human-computer interaction and automation. I develop small tools and larger projects in my free time.</p>
          </div>
          <div className="col-sm-6 col-xs-12">
            <p>I also participate in my school's robotics team and run the Linguistics club there.</p>
          </div>
          </div>
        </Section>
        <Footer />
        </div>
				<Modal show={(this.state.show === 'alienbox')} back={() => this.hideProject()} title="alienbox">
          <div className="col-sm-6 col-xs-12">
            <p>alienbox is a menubar app for checking your reddit inbox.</p>
            <p>it was built from the ground up with Electron, VueJS, and the Reddit API.</p>
            <div className="row center-xs">
              <a href="/alienbox">
                <div className="visitButton" style={{backgroundColor: '#FF6600'}}>
                  Check it out!
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className="row center-xs">
              <div>
                <img width="300" src="alienbox.png" />
              </div>
            </div>
          </div>
				</Modal>
        <Modal show={(this.state.show === 'LiquidTime')} back={() => this.hideProject()} title="LiquidTime">
            <div className="col-sm-6 col-xs-12">
                <p>I developed and designed a full time management and tracking app.</p>
                <p>It has an emphasis on making every plan fit, with easy rescheduling and pomodoro-style timing.</p>
                <div className="row center-xs">
                  <a href="https://liquidti.me">
                    <div className="visitButton" style={{backgroundColor: '#5850ff'}}>
                      Check it out!
                    </div>
                  </a>
                </div>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="row center-xs">
                <div>
                  <img width="500" src="liquidtime.png" />
                </div>
              </div>
            </div>
        </Modal>
        <Modal show={(this.state.show === 'CabinetCloud')} back={() => this.hideProject()} title="CabinetCloud">
            <div className="col-sm-6 col-xs-12">
                <p>I remotely interned at a local Boston-based startup called CabinetCloud with a team of 5 to develop a CRM product for local governments. The product would leverage smart government for local municipalities, aiding in their communication, organization, and analyzing with constituents. It received a microgrant from the Santander Urban Impact program, and had the endorsement of multiple local legislators.</p>
                <p>My main work was to design user workflows and layouts for the web-based product. I kept the users, mainly local legislators in mind with my designs. A few months in, I was tasked with developing a full mobile implementation of the product.</p>
                <p>To accomplish the mobile implementation, I sought for new technologies which would allow me to rapidly work on a cross-platform app solo. I came across a relatively new technology, called React Native, which allowed me to make UI elements composable and reusable, keeping design patterns consistent and understandable.</p>
                <p>Unfortunately, the product's development is currently on-hold, but images of my work are available.</p>
            </div>
            <div className="col-sm-6 col-xs-12">
              <div className="row center-xs">
                <div>
                  <img width="500" src="cabinet.png" />
                </div>
              </div>
            </div>
        </Modal>
        <Modal show={(this.state.show === 'MIT Racecar')} back={() => this.hideProject()} title="MIT Beaverworks Racecar">
          <div className="col-sm-6 col-xs-12">
            <p>In the summer of 2016, I participated in MIT/Lincoln Laboratories' first institute for high schoolers. We were tasked with an engineering project - automating a remote control car with multiple sensors and an Nvidia Jetson GPU.</p>
            <p>I had the privilege of seeing countless lecturers visit to talk about working in the field of mobile robotics and automation. In addition, MIT professors and colleagues of Lincoln Laboratories conducted seminars on developing control systems, localization, and computer vision for mobile robots</p>
            <p>I collaborated with <a href={'http://august.codes/'}>August Trollbäck</a> on writing a report following the program.</p>
            <div className="row center-xs">
              <a href="http://a9.io/bwsi-report/">
                <div className="visitButton" style={{backgroundColor: '#0351B9'}}>
                  View Report
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className="row center-xs">
              <div>
                <img width="500" src="racecar.png" />
              </div>
            </div>
          </div>
        </Modal>
        <Modal show={(this.state.show === 'Tabmaster')} back={() => this.hideProject()} title="Tabmaster">
          <div className="col-sm-6 col-xs-12">
            <p>Tabmaster is a chrome extension allowing for easier management of stray tabs.</p>
            <div className="row center-xs">
              <a href="https://chrome.google.com/webstore/detail/tabmaster/pojgemmobcnjmnpodjmgeofdgojpkepn">
                <div className="visitButton" style={{backgroundColor: '#03B941'}}>
                  Check it out!
                </div>
              </a>
            </div>
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className="row center-xs">
              <div>
                <img width="300" src="tabmaster.png" />
              </div>
            </div>
          </div>
        </Modal>
        <Modal show={(this.state.show === 'Spotify Offline')} back={() => this.hideProject()} title="Spotify Offline">
            <div className="col-sm-6 col-xs-12">
                <p>I explored how one can better manage their disk space with their Spotify offline music. What resulted was a concept that expanded upon Spotify's existing style.</p>
                <div className="row center-xs">
                <a href="https://www.behance.net/gallery/40743493/Spotify-Offline-Concept-Experience">
                    <div className="visitButton" style={{backgroundColor: '#1ED760'}}>
                        Check it out!
                    </div>
                </a>
            </div>
        </div>
        <div className="col-sm-6 col-xs-12">
            <div className="row center-xs">
            <div>
                <img width="300" src="spotify-offline.png" />
            </div>
        </div>
    </div>
    </Modal>
     </div>
    );
  }

}
