import React from 'react';
import { List } from 'react-native-paper';

const DetailContainer = (props: any) => {
  const { title, content } = props?.route?.params;
  return (
    <List.Section>
      <List.Subheader>{title}</List.Subheader>
      <List.Item title={content} />
    </List.Section>
  );
};

export default DetailContainer;
