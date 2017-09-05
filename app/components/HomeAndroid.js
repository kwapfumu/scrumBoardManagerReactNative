'use strict';
import React, { Component } from 'react';
import {StatusBar,StyleSheet, Text,ListView,Image, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import ScrollableTabView, {DefaultTabBar } from 'react-native-scrollable-tab-view'
import Menu, { MenuContext, MenuOptions, MenuOption, MenuTrigger } from 'react-native-menu';

export default class HomeAndroid extends Component {
  constructor(props) {
    super(props);
    this.state = {
		selected: 0
	};
  },
	/*The ‘_getIcon()’ will be triggered once there is a change in the state. This function will return the icon
    name to be used based on the selected tab.*/
	 _getIcon() {
		if(this.state.selected === 0) {
			return "edit"
		} else if (this.state.selected === 1) {
			return "anotherName"
		} else {
			return "edit"
		}
	},
	/**/
	handleChangeTab(index) {
		this.setState({selected: index.i});
	},
  render() {
    return (
		<MenuContext style={{ flex: 1 }}>
			<StatusBar backgroundColor="rgba(0, 0, 0, 0.2)" translucent />
			<View style={styles.overallContainer}>
				<View style={styles.headerContainer}>
					<View style={styles.leftHeaderContainer}>
						<Text style={styles.brandText}>ScrumBoardManager</Text>
					</View>
					<View style={styles.rightHeaderContainer}>
						<Icon name="search" color='#fff' size={23} style={{ padding:5 }} />
						<Menu onSelect={(value) => alert(`User selected the number ${value}`)}>
							<MenuTrigger>
								<Icon name="more-vert" color='#fff' size={23} style={{ padding:5 }} />
							</MenuTrigger>
							<MenuOptions>
								<MenuOption value={1}>
									<Text>Refresh</Text>
								</MenuOption>
								<MenuOption value={2}>
									<Text>CurrentSprint</Text>
								</MenuOption>
								<MenuOption value={3}>
									<Text>ReleaseBacklog</Text>
								</MenuOption>
								<MenuOption value={4}>
									<Text>MyTasks</Text>
								</MenuOption>
							</MenuOptions>
						</Menu>
					</View>
				</View>
				<View style={styles.contentContainer}>
					<ScrollableTabView tabBarUnderlineColor="#fff"
                                       tabBarUnderlineStyle={{backgroundColor: "#fff"}}
                                       tabBarBackgroundColor ="#8b4513"
                                       tabBarActiveTextColor="#fff"
                                       tabBarInactiveTextColor="#88b0ac" 
									   onChangeTab={(index) => this.handleChangeTab(index)} {/*Every time there is a change on
									   the tab, the ‘onChangeTab’ will trigger our function ‘this.handleChangeTab(index)’*/}>
						<ReleaseBacklog tabLabel="ReleaseBacklog" />
						<CurrentSprint tabLabel="CurrentSprint" />
						<MyTasks tabLabel="MyTasks" />
					</ScrollableTabView>
				</View>
			</View>
		</MenuContext>
	);
  };
 };
 const styles = StyleSheet.create({
	overallContainer: {
		flex: 1,
		flexDirection:'column',
		backgroundColor: '#F5FCFF',
		height: 24
	},
	headerContainer: {
		flex: 1,
		flexDirection: "row",
		justifyContent: "space-between",
		backgroundColor: "#8b4513",
		alignItems:"center",
		paddingRight: 5
	},
	leftHeaderContainer: {
		alignItems: "flex-start",
		flexDirection: "row"
	},
	rightHeaderContainer: {
		alignItems: "flex-end",
		flexDirection: "row"
	},
	contentContainer: {
		flex: 6,
	},
	brandText: {
		color: "white",
		fontWeight: "bold",
		fontSize: 14,
		alignItems: "flex-start",
		marginLeft: 10
  },
	
});
