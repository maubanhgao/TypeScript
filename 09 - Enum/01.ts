// Enum cho phép chúng ta tạo một nhóm các giá trị hằng số trong một nơi chung.

// Có 3 loại Enum là Nummeric, String, Heterogeneous.

//Nummeric Enum
enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
}
// Enum luôn được gán giá trị là số khi chúng được lưu.

enum PrintMedia1 {
    Newspaper ,
    Newsletter ,
    Magazine,
    Book
}
function getMedia(mediaName:string ): PrintMedia {
    if(mediaName === 'Forbes' || mediaName === "Outlook"){
        return PrintMedia.Magazine;
    }
}
let mediaType: PrintMedia = getMedia('Forbes');
console.log(mediaType); // 3

