import * as s from './styles'
import Profile from '../../../assets/eminem.jpg'
import Cover from '../../../assets/cover.jpeg'

export default function FeedCard(){
    return(
        <s.Wrapper>
            <s.ProfileContainer>
                <s.ProfileImg src={Profile} alt=""/>
                <s.ProfileName>eminem</s.ProfileName>
            </s.ProfileContainer>
            <s.FlexContainer>
                <s.CoverImg src={Cover} alt=""/>
                <s.MusicInforContainer>
                    <s.TitleWrapper>
                        Godzila
                        <s.Genre>HIPHOP</s.Genre>
                    </s.TitleWrapper>
                    <s.Date>2020-05-12</s.Date>
                    <s.MusicDescription>it's my first rap song!!</s.MusicDescription>
                    <s.PlayBarContainer>
                        <s.PlayBtn><i className="fas fa-play"/></s.PlayBtn>
                        <progress value="0"/>   
                    </s.PlayBarContainer>
                    <s.BtnContainer>
                        <s.Btn><i className="fas fa-heart"></i> 1,200</s.Btn>
                        <s.Btn><i className="fas fa-comment"></i> 1,200</s.Btn>
                        <s.Btn><i className="fas fa-exclamation-circle"></i> alert</s.Btn>
                    </s.BtnContainer>
                </s.MusicInforContainer>
            </s.FlexContainer>
        </s.Wrapper>
    )
}