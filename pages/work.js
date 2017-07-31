import React, { Component } from "react";
import Head from "next/head";
import WorkLayout from "../src/components/WorkLayout";
import Wanderer from "../src/components/WorkPages/Wanderer";
import SwimTribe from "../src/components/WorkPages/SwimTribe";
import Nest from "../src/components/WorkPages/Nest";
import Pooh from "../src/components/WorkPages/Pooh";

class Work extends Component {
  constructor(props) {
    super();

    const { title } = props.url.query;
    switch (title) {
      case "rbx-active":
      case "wanderer":
        this.content = <Wanderer />;
        break;
      case "swim-tribe":
        this.content = <SwimTribe />;
        break;
      case "nest":
        this.content = <Nest />;
        break;
      case "winnie-the-pooh":
        this.content = <Pooh />;
        break;
    }
  }

  render() {
    return (
      <WorkLayout>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css?family=Montserrat:300,400"
            rel="stylesheet"
          />
          <title>Helen Shiu | Work</title>
        </Head>

        {this.content}
      </WorkLayout>
    );
  }
}

export default Work;
