# Enum

[TOC]

## 1. Enum là gì 

**Enum cho phép chúng ta tạo một nhóm các giá trị hằng số trong một nơi chung.**

**Có 3 loại Enum là Nummeric, String, Heterogeneous.**

## 2. Nummeric Enum là gì 

**từ khoá enum để tạo Enum.**

> **enum** PrintMedia { 
>
> ​	Newspaper, 
>
> ​	Newsletter, 
>
> ​	Magazine, 
>
> ​	Book 
>
> }

Các vị trí của enum được tính từ 0 và được tăng lên 1 đơn vị. Như vậy giá trị của Newspaper, Newsletter, Magazine, Book.

```typescript
Newspaper = 0
Newsletter = 1
Magazine = 2
Book = 3
```

Enum luôn được gán giá trị là số khi chúng được lưu. Giá trị đầu tiên luôn là 0 và các giá trị tiếp theo là tăng lên 1.

Chúng ta có thể gán giá trị khởi tạo ban đầu cho Enum.

```typescript
enum PrintMedia {
  Newspaper = 1,
  Newsletter,
  Magazine,
  Book
}
```

Như vậy giá trị Newspaper là 1, thì giá trị Newsletter là 2, Magazine là 3 và Book là 4. Nếu không gán giá trị thì mặc định là 0.

- Trả về giá trị Nummeric Enum trong function**

Chúng ta có thể trả về kết quả Enum trong function như sau:

```typescript
enum PrintMedia {
    Newspaper = 1,
    Newsletter,
    Magazine,
    Book
}

function getMedia(mediaName: string): PrintMedia {
    if (  mediaName === 'Forbes' || mediaName === 'Outlook') {
        return PrintMedia.Magazine;
    }
 }

let mediaType: PrintMedia = getMedia('Forbes'); // returns Magazine
```

## 3. String Enum là gì 

```typescript
enum PrintMedia {
    Newspaper = "NEWSPAPER",
    Newsletter = "NEWSLETTER",
    Magazine = "MAGAZINE",
    Book = "BOOK"
}
// Access String Enum 
PrintMedia.Newspaper; //returns NEWSPAPER
PrintMedia['Magazine'];//returns MAGAZINE
```

## 4. Heterogeneous Enum là gì

**Heterogeneous là có thể chứa chữ và số.**

```typescript
enum Status { 
    Active = 'ACTIVE', 
    Deactivate = 1, 
    Pending
}
```

