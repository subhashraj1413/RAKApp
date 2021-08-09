import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  bannerContainer: {
    flex: 0.6,
    width: '100%',
    height: 250,
  },
  container: {
    flex: 1,
    height: '100%',
  },
  loginFormContainer: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  loginFormAreaFlex: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
   
  },
  loginForgetPasswordAreaFlex: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '100%',
  },
  loginActionContainer: {
    flex: 0.3,
    flexDirection: 'column',
    justifyContent: 'center',
    width: 'auto',
    minWidth: 300,
  },
  forgetCredentialsContainer: {
    flex: 2,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  bannerIntroBlock: {
    padding: 20,
    width: 280,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  scrollView: {
  
  },
  imageLoginForm: {
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 350,
    
  },
  bankNameText: {
    color: 'white',
    fontSize: 28,
    lineHeight: 56,
    fontWeight: 'bold',
    textAlign: 'left',
  },

  bankIntroText: {
    color: 'white',
    fontSize: 18,
    lineHeight: 28,
    fontWeight: '400',
    textAlign: 'left',
  },
  quickBalanceText: {
    color: '#423E3D',
    fontSize: 16,
    lineHeight: 28,
    fontWeight: '600',
    textAlign: 'center',
  },
  input: {
    backgroundColor: 'white',
    paddingVertical: 0,
  },
  inputCard: {
    width: '100%',
    marginTop: 20,
    borderRadius: 6,
  },
  button: {
    marginLeft: 16,
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
    paddingHorizontal: 40,
    borderRadius: 50,
    width: 300,
    elevation: 2,
    fontWeight: 'bold',
  },
  buttonLabel: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  dashBoardContainer: {
    flex: 1,
    width: '100%',
    height:'100%',
  },
  dashBoardBannerCardBG: {
    flex: 1,
    justifyContent: 'center',
    paddingVertical: 30,
    height: 350,
    alignSelf: 'stretch',

  },
  surface: {
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 4,
  },
});
