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
            <Text style={{color: colors.black, fontSize: 20}}>{'\u2022'}</Text>
            <Text
              style={{
                flex: 1,
                paddingLeft: 5,
                color: colors.black,
                fontSize: 20,
              }}>
              {item.value}
            </Text>
          </View>
        )}
      />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({});
