import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {STYLES} from '../../../../styles/globalStyles';
import {COLORS} from '../../../../constants/colors';
import CustomButton from '../../../../components/shared-components/CustomButton';

import Navigation from '../../../../utils/appNavigation';

export default function ChatWithUs() {
  const navigateToMessages = (
    group = 0,
    title = 'Stephen Carl',
    provider = 0,
  ) =>
    Navigation.navigate('SupportChat', {
      group: group,
      title: title,
      provider: provider,
    });
  return (
    <View style={{flex: 1, backgroundColor: '#F9FAFA', paddingHorizontal: 16}}>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 28, fontWeight: '800', color: '#15141F'}}>
          Let’s take care of this
        </Text>
        <Text
          style={[
            STYLES.dev1__text13,
            {
              fontWeight: '500',
              color: COLORS.neutral700,
              fontFamily: 'GeneralSans-Medium',
            },
          ]}>
          Tell us as much as you can about the problem, and we’ll make sure to
          get you to the right person.
        </Text>
        <Text
          style={{
            fontSize: 21,
            fontWeight: '800',
            color: '#004852',
            marginTop: 24,
          }}>
          Message
        </Text>
        <TextInput
          multiline={true}
          placeholder="Hi, I need some help with..."
          numberOfLines={15}
          placeholderTextColor={'#94A5AB'}
          style={{
            padding: 14,
            backgroundColor: 'white',
            borderRadius: 8,
            borderWidth: 1,
            borderColor: '#CECECE',
            fontSize: 14,
            fontWeight: '500',
            marginTop: 8,
            textAlignVertical: 'top',
            color: "black"
          }}
        />
      </View>

      <CustomButton
        onPress={() =>
          navigateToMessages(undefined, 'Thomas Edison', undefined)
        }
        extraStyles={{
          marginTop: 0,
          marginBottom: 40,
          backgroundColor: '#e7eaeb',
        }}>
        Start Chat
      </CustomButton>
    </View>
  );
}
