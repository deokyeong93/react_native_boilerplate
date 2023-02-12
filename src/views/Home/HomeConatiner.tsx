import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { Button, Card, Text, TextInput } from 'react-native-paper';

const HomeContainer = (props: any) => {
  const { navigation } = props;
  const { title, content } = props?.route?.params;

  return (
    <>
      <TouchableOpacity
        onPress={() =>
          navigation?.push('Details', {
            title,
            content,
          })
        }>
        <Card>
          <Card.Content>
            <Text variant="titleLarge">{title}</Text>
            <Text variant="bodyMedium">{content}</Text>
          </Card.Content>
        </Card>
      </TouchableOpacity>
      <View>
        <Text>MAIN</Text>
        <TextInput
          label="Password"
          secureTextEntry
          right={<TextInput.Icon icon="eye" />}
        />
        <Button icon="account-circle">Press me</Button>
      </View>
    </>
  );
};

export default HomeContainer;
