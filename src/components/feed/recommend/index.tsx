import * as s from './styles'

export default function Recommend(){
    return(
        <s.Wrapper>
            <s.Title>Recommend For You</s.Title>
            <s.Refresh><i className="fas fa-sync-alt"></i> refresh list</s.Refresh>
        </s.Wrapper>
    )
}