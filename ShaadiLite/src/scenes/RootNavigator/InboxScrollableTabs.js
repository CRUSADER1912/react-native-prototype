/* @flow */

import React, { Component } from "react";
import { Container, Header, Tab, Tabs, ScrollableTab } from "native-base";

import { Platform, StyleSheet } from "react-native";

import InvitationScreen from "../../components/Inbox/Invitations";
import Accepted from "../../components/Inbox/Accepted";
import FilteredOut from "../../components/Inbox/FilteredOut";
import Deleted from "../../components/Inbox/Deleted";
import Sent from "../../components/Inbox/Sent";

export default class InboxScrollableTabs extends Component {
  render() {
    return (
      <Container>
        <Tabs
          renderTabBar={() => (
            <ScrollableTab
              tabsContainerStyle={{
                backgroundColor: Platform == "ios" ? "#F8F8F8" : "#ff585c"
              }}
            />
          )}
        >
          <Tab
            heading="Invitations"
            tabStyle={styles.tabstyle}
            activeTabStyle={styles.activeTabStyle}
          >
            <InvitationScreen />
          </Tab>
          <Tab
            heading="Accepted"
            tabStyle={styles.tabstyle}
            activeTabStyle={styles.activeTabStyle}
          >
            <Accepted />
          </Tab>
          <Tab
            heading="Filtered Out"
            tabStyle={styles.tabstyle}
            activeTabStyle={styles.activeTabStyle}
          >
            <FilteredOut />
          </Tab>
          <Tab
            heading="Deleted"
            tabStyle={styles.tabstyle}
            activeTabStyle={styles.activeTabStyle}
          >
            <Deleted />
          </Tab>
          <Tab
            heading="Sent Items"
            tabStyle={styles.tabstyle}
            activeTabStyle={styles.activeTabStyle}
          >
            <Sent />
          </Tab>
        </Tabs>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  tabstyle: {
    backgroundColor: "#ff585c"
  },
  activeTabStyle: {
    backgroundColor: "#ff585c"
  }
});
