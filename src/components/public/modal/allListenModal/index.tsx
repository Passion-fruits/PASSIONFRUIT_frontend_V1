import * as s from './styles'
import cover from '../../../../assets/pxImg.jpg'
import profile from '../../../../assets/eminem.jpg'

export default function AllListenModal(){
    return(
        <s.Wrapper>
            <s.Container>
                <s.IntroMent>All Listening</s.IntroMent>
                <s.ImgWrapper>
                <s.CoverImg src={cover} />
                </s.ImgWrapper>
                <s.Title>I dont need</s.Title>
                <s.ProfileContainer>
                    <s.ProfileImg src={profile} />
                    <s.ProfileName>
                        eminem
                    </s.ProfileName>
                </s.ProfileContainer>
                <s.PlayBar>
                    <s.ProgressBar/>
                </s.PlayBar>
                <s.BtnContainer>
                <i className="far fa-heart"></i>
                <i className="fas fa-play"></i>
                <i className="fas fa-pen"></i>
                </s.BtnContainer>
                <s.CommentContainer>
                    <s.Comment>hello my one of best friends, obama... this is so fucking rap </s.Comment>
                    <s.Comment>hello my </s.Comment>
                    <s.Comment>hello my </s.Comment>
                    <s.Comment>hello my </s.Comment>
                    <s.Comment>hello my </s.Comment>
                    <s.Comment>hello my </s.Comment>
                    <s.Comment>hello my </s.Comment>
                    <s.Comment>hello my </s.Comment>    
                </s.CommentContainer>
            </s.Container>
        </s.Wrapper>
    )
}