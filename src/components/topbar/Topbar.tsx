import React from 'react';
import { ImageProps, StyleProp, ViewStyle } from 'react-native';
import styled from 'styled-components/native';
import Bold18 from '../text/Typographies';
import colors from '../../styles/color';
import IconButton from '../button/IconButton';

export type Props = {
  style?: StyleProp<ViewStyle>;
  title?: React.ReactNode;
  onBackPress?: () => void;
  iconSource?: ImageProps['source'];
  iconStyle?: ImageProps['style'];
  RightComponent?: JSX.Element;
};

const TOP_BAR_HEIGHT = 56;

const LeftButton = styled(IconButton)`
  position: relative;
  width: 8px;
  height: 16px;
`;

// todo: refac bg-bottom-color
const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: ${TOP_BAR_HEIGHT}px;
  border-bottom-width: 1px;
  border-bottom-color: #d4d7dd;
`;

const Content = styled.View`
  width: 100%;
  height: ${TOP_BAR_HEIGHT}px;
  background-color: ${colors.milkWhite};
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-horizontal: 20px;
`;

const Title = styled(Bold18)`
  flex-direction: row;
  color: ${colors.black};
  align-self: center;
`;

function Topbar({
  style: containerStyle,
  title,
  iconSource,
  iconStyle,
  RightComponent,
  onBackPress
}: Props) {
  const hasTitle = Boolean(title);
  return (
    <Container style={containerStyle}>
      <Content>
        {iconSource ? (
          <LeftButton
            image={iconSource}
            style={iconStyle}
            hitSlopSize={16}
            onPress={onBackPress}
          />
        ) : null}
        {hasTitle && typeof title === 'string' ? (
          <Title numberOfLines={1}>{title}</Title>
        ) : null}

        {RightComponent}
      </Content>
    </Container>
  );
}

// {hasTitle && !typeof title === 'string' ? title : null}

export default Topbar;
