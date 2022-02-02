import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Header from '../UI/Header';
import Column from '../components/column';
import { selectors } from '../state/ducks/ducks';
import { useSelector } from 'react-redux';

const ColumnsScreen = () => {
  const columns = useSelector(selectors.columns.selectAllColumns());
  return (
    <View style={styles.content}>
      <Header label="My Desk" />
      <ScrollView style={styles.body}>
      {columns.map((column) =>{
        return(
          <Column label={column.title} key={column.id}/>
        );
      })}
      </ScrollView>
    </View>
  );
};

export default ColumnsScreen;

const styles = StyleSheet.create({
  content: {
    backgroundColor: '#ffffff',
    height: '100%',
    width: '100%',
  },
  body: {
    paddingTop: 15,
    paddingLeft: '7%',
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
  },
});
