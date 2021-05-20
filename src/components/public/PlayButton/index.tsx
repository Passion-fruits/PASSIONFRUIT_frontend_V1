import * as S from "./styles";

function PlayButton(props: any) {
    const { callback } = props;
    return (
        <S.PlayButton onClick={callback}>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="17"
                viewBox="0 0 15 17"
            >
                <path
                    id="Polygon_6"
                    data-name="Polygon 6"
                    d="M8.5,0,17,15H0Z"
                    transform="translate(15) rotate(90)"
                    fill="#fff"
                />
            </svg>
        </S.PlayButton>
    );
}

export default PlayButton;
