let temp_img_url;
let temp_title;
let temp_message;
let temp_date_time;
let temp_alert;

// about top_bar
const top_bar = document.querySelector(".top_bar");
function display_time(){
    const d = new Date();
    const h = d.getHours();
    const m = d.getMinutes();
    console.log(d,h,m);
    const clock = top_bar.querySelector(".time");

    if(m<10){
        clock.innerText = `${h}:0${m}`;
    }else{
        clock.innerText = `${h}:${m}`;
    }
}
display_time();

const chat_list = document.querySelector(".chat_list");
function create_chat_room(img_url , title , msg , dt , al){
    const container = document.createElement("div");
    container.classList.add("container");
    chat_list.append(container);

    const icon = document.createElement("div");
    icon.classList.add("icon")
    container.append(icon);

        const img = document.createElement("img");
        if(img_url == ""){
            img_url = "default.jpg";
        }
        img.setAttribute("src" , `profile_image/${img_url}`);
        icon.append(img);

    const white_space01 = document.createElement("div");
    white_space01.classList.add("white_space");
    container.append(white_space01);

    const contents = document.createElement("div");
    contents.classList.add("contents");
    container.append(contents);

        const header = document.createElement("header");
        header.innerText = title;
        contents.append(header);

        const flex_box = document.createElement("div");
        flex_box.classList.add("flex_box");
        contents.append(flex_box);

            const message = document.createElement("p");
            message.classList.add("message");
            message.innerText = msg;
            flex_box.append(message);

    const white_space02 = document.createElement("div");
    white_space02.classList.add("white_space");
    container.append(white_space02);

    const etc = document.createElement("div");
    etc.classList.add("etc");
    container.append(etc);

        const date_time = document.createElement("span");
        date_time.classList.add("date_time");
        const month = dt.getMonth();
        const date = dt.getDate();
        date_time.innerText = `${month}월 ${date}일`;
        etc.append(date_time);

        if(al == 0){

        }else{
            const alert = document.createElement("div");
            alert.classList.add("alert");
            alert.innerText = al;
            etc.append(alert);
        }

    let message_height = message.clientHeight;
    if(message_height != 79){
        flex_box.style.margin = "10px 0px 0px 0px";
    }
}
function set_date(year , month , date){
    const d = new Date();
    d.setFullYear(year);
    d.setMonth(month);
    d.setDate(date);
    return d;
}

temp_img_url = "kakaopay.jpg";
temp_title = "카카오페이";
temp_message = `[안내] 멤버쉽 이용안내`;
temp_date_time = set_date(2021,3,23);
temp_alert = 1;
create_chat_room(temp_img_url , temp_title , temp_message , temp_date_time , temp_alert);

temp_img_url = "toss.jpg";
temp_title = "토스";
temp_message = `결제 되었습니다.`;
temp_date_time = set_date(2021,3,23);
temp_alert = 1;
create_chat_room(temp_img_url , temp_title , temp_message , temp_date_time , temp_alert);

temp_img_url = "toss.jpg";
temp_title = "토스";
temp_message = `결제 되었습니다.`;
temp_date_time = set_date(2021,3,23);
temp_alert = 1;
create_chat_room(temp_img_url , temp_title , temp_message , temp_date_time , temp_alert);

// for(var i=0; i<30; i++){
//     create_chat_room(temp_img_url , temp_title , temp_message , temp_date_time , temp_alert);
// }




