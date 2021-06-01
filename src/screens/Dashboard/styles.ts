import styled from "styled-components/native";
import { RFValue, RFPercentage } from "react-native-responsive-fontsize";
import { Feather } from "@expo/vector-icons";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  width: 100%;
  height: ${RFPercentage(42)}px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const UserWapper = styled.View`
  width: 100%;
  flex-direction: row;
  padding: 0px 24px;
  justify-content: space-between;
  align-items: center;
  margin-top: 28px;
`;

export const UserInfo = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 12px;
`;

export const UserContain = styled.View`
  margin-left: 17px;
`;

export const WellcomeText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  margin-top: 8px;
`;

export const UserNameText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  bottom: 8px;
`;

export const Logout = styled.TouchableOpacity`
  padding: 10px;
`;

export const LogoutIcon = styled(Feather)`
  font-size: ${RFValue(24)}px;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const ListCards = styled.ScrollView.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
  contentContainerStyle: { paddingLeft: 24 },
})`
  width: 100%;

  position: absolute;
  top: ${RFPercentage(18)}px;
`;

export const ListTransactions = styled.View`
  flex: 1;
  margin-top: ${RFValue(64)}px;
  padding: 0px 24px;
`;
export const TitleTransaction = styled.Text`
  color: ${({ theme }) => theme.colors.title};
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(18)}px;
  margin-bottom: 16px;
`;
