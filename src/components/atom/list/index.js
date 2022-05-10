import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../../utilities';

const List = ({data}) => {
  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <View style={{flexDirection: 'row'}}>
            <Text style={styles.Symbol}>{'\u2022'}</Text>
            <Text style={styles.title}>{item.value}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  Symbol: {color: colors.black, fontSize: 20},
  title: {
    flex: 1,
    paddingLeft: 5,
    color: colors.black,
    fontSize: 20,
  },
});
