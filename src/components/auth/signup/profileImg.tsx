import { useRef, useState } from "react";
import * as s from "../styles";

export default function ProfileImg() {
  const [ImgSrc, setImgSrc] = useState<string>("");
  const inp : any = useRef(null);
  // SRC 
  const getSrc = (input: any): void => {
    console.log('sdfd')
    if (input.files && input.files[0]) {
      const FileType : string = input.files[0].type;
      if(FileType === "image/jpeg" || FileType === "image/png"){
        var reader = new FileReader();
        reader.onload = function (e) {
          if (typeof e.target?.result === "string") {
            setImgSrc(e.target?.result);
          }
        };
        reader.readAsDataURL(input.files[0]);
      }else{
        alert("Please select an image file.")
      }
    }
  };
  // FILE INPUT CLICK
  const InpClick = (): void => {
    if (inp) inp.current?.click();
  };
  return (
    <>
      {ImgSrc !== "" ? (
        <>
          <s.ProfileImg onClick={InpClick} src={ImgSrc} alt="" />
          <input type="file" ref={inp} style={{ display: "none" }} onChange={(e)=>{getSrc(e.target)}} />
        </>
      ) : (
        <s.AddImg onClick={InpClick}>
          <img src={ImgSrc} alt="" />
          <s.Square />
          <s.Square />
          <input type="file" ref={inp} style={{ display: "none" }} onChange={(e)=>{getSrc(e.target)}} />
        </s.AddImg>
      )}
    </>
  );
}
