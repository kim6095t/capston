const footer=document.querySelector(".footer");
const file_upload=document.querySelector(".fileupload"),
    input=file_upload.querySelector("input");


function uploadImage(){
    const selectedFile=input.files;
    let filename_list=new Array();
 

    //불러온 파일의 루트(파일명) 추출
    for(let i=0; i<selectedFile.length;i++){
        filename_list[i]=selectedFile[i].webkitRelativePath;
    }

    console.log(selectedFile);

    //html foot부분 사진 생성
    for(let i=0; i<filename_list.length;i++){
        const div=document.createElement("div");
        div.className="footer_column";
        div.id=i;
        const img=document.createElement("img");
        img.className="footer_column_icon";
        img.src=filename_list[i];
        div.appendChild(img);
        footer.appendChild(div);
    }
}


function init(){
    input.addEventListener('change',uploadImage);
}

init();