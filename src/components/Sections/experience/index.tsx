import React, { Component } from "react";
import { Skills } from "../about/styles";
import { ExpContainer, Header, SectionHeader, Section } from "./styles";

export default class Experience extends Component {
  render() {
    return (
      <ExpContainer data-testid={"experience"}>
        <Header>Experience</Header>
        <Section>
          <SectionHeader>
            First Derivatives plc, - Commerzbank – Java Developer (Feb’19 –
            Present)
          </SectionHeader>
          Worked in Frankfurt, Germany supporting and modernizing a java based
          eFX trading platform used for both internal and external clients of
          Commerzbank. Additionally involved in the development of a react based
          web solution to eventually replace the trading platform.
          Responsibilities Included: Developing new features requested by the
          business, on both the Java application and React application.
          Developed logging functionality to reduce amount of redundant logging
          information being recorded, causing useful information to be lost.
          Modernizing the application, for example by migrating the user
          configuration to a hosted repo. Responsible for management & support
          of UAT environments. Provided technical documentation such as user
          guides, release notes, testing evidence and knowledge shares.
          Supported the continuous build tool TeamCity. Wrote and performed unit
          tests on different aspects of the system. Daily
          stabilisation/debugging of the system. Initiated a weekly continuous
          support Rota. Project releases were managed using an Agile development
          method, with daily scrums and regular releases aligned to sprints,
          tracked using the Atlassian Jira tool. Git was used for version
          control.
          <Skills>
            Key Skills: Java, Swing, React, Jest, Redux, Node, Storybook, Unit testing, Robot
            Framework, Git, Agile.
          </Skills>
        </Section>
        <Section>
          <SectionHeader>
            Chain Reaction Cycles, Belfast, Software Developer (Jun’17- Jan’19)
          </SectionHeader>
          Experience with ATG eCommerce technology – an Oracle product used for
          large scale commerce websites Back end development based on Java with
          an Oracle database Front-end development using HTML, CSS, React,
          Node.js, JavaScript and templating React, Java and SQL development for
          implementation of two new collection services on the website Major
          back-end enhancement with additional JavaScript development and
          innovation of front and backend features for the redesign of the
          Customer Service section of the website Implementation of enhanced
          Google Analytics data to improve customer insights Various development
          changes via CRC small change stream (Marketing, Customer Service,
          Finance, Legal) Canvased and implemented improved process flows within
          ATG Development team Creation of documentation to help record various
          features and issues faced during development A period on production
          support, giving more exposure to production systems and issues
          Proposal of innovations for bug fixes in relation to production
          support challenges Knowledge of the build process of the development
          sites Set up of local development environment Graduate software
          developer and progressed to a software developer within the year
        </Section>
        <Section>
          <SectionHeader>
            Chain Reaction Cycles, Belfast, Placement Software Developer (Jun’15
            – Sep’16)
          </SectionHeader>
          Use of Java, Rabbit MQ & bootstrap HTML for creation of web
          application to monitor scheduled jobs running on the website to
          provide data insight Full SDLC experience in relation to web
          application (From requirements collected to finished implementation,
          which was then applied to my final year project) Experience managing
          server load and creation of scheduled jobs Test team exposure,
          creation of good testing habits for new features Offered permanent
          role within Chain Reaction Cycles following placement year
        </Section>
      </ExpContainer>
    );
  }
}
