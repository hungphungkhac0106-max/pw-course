# Cách khởi tạo git và add repo mới
`git init` => khởi tạo 3 vùng của git\
`git remote add origin <remote url>`\
`git add .` (đưa tất cả file lên staging area)\
`git add <ten_file1> <ten_file2> <ten_file3>` (add nhiều file)\
`git commit -m"message"` => message muốn cho người review commit biết\
`git push origin main`

---
## Cách khởi tạo một project mới
`npm init playwright@latest`

## Cách chạy file Javascript
Mở Terminal\
Gõ `node {đường dẫn đến file}/tên file.js`\
ex: node folder-1/test-01.js
## Copy nhanh 1 dòng code
để chuột ở cuối dòng code, bấm `Ctrl+c`, `Ctrl+v`
## Khai báo biến
`let tenBien = "giá trị"`

---
# Git
3 vùng trong Git: **working directory**, **staging area**, **repository**\
câu lệnh: `git status` => kiểm tra trạng thái của repo hiện tại\
mới khởi tạo git bằng lệnh `Git init` => các file sẽ ở stt Working (màu đỏ)\
=> `git add .` => file sẽ sang vùng staging (màu xanh lá)\
=> `git commit -m"commit name"` => file sẽ được commit lên vùng Repository => file sẽ ko nhìn thấy ở đâu

## Git log 
Danh sách các công việc đã được commit, gồm: commit id, author, date commit & commit name

## Git - cấu hình
Trước khi commit cần cho git biết bạn là ai, email là gì\
câu lệnh để set giá trị mặc định cho toàn bộ commit
`git config --global user.name "your name"`
`git config --global user.email "your email"`\
câu lệnh để set giá trị cho một repo nhất định\
`git config user.name "your name"`
`git config user.email "your email"`\
câu lệnh để list toàn bộ git commit\
=> `git config --list`

## Git commit convention
**Convention** là quy tắc để cả team làm việc chung theo\
Type (loại commit): short description (<50 kí tự)

## Type of commit: 3 loại chính
**Feat**: thêm tính năng mới, testcase mới\
**Fix**: sửa lỗi 1 test trước đó\
**Chore**: sửa lỗi nhỏ lẻ, chính tả, xoá file ko dùng tới...\
ví dụ: git commit -m"fix: update code for test-01"\
git commit -m"feat: add code for test-02"

---
# Javascript
`console.log("Hello, World!");`\
`node ten_file` => chạy file js\
`node path/file_name` => chạy file trong thư mục 

## Comment trong JS
Thêm dấu // trước đầu 1 dòng => cách vô hiệu hoá tạm thời 1 đoạn code, đoạn code được comment sẽ bị bỏ qua, ko thực thi\
Bôi đen nhiều dòng & bấm Ctrl + // => comment nhiều dòng\
Thêm dấu /* dòng 1, dòng 2 */ => comment nhiều dòng

## Biến (Variable) & Hằng (Constant)
**Biến** là thay đổi được giá trị\
**Khai báo biến**:\
`let <tên biến> = <"giá trị">;`\
ex: let myName = "Hưng";\
**Hằng** là giá trị cố định, ko thay đổi\
`const <tên hằng> = <"giá trị">;`

## Kiểu dữ liệu - Data type
là loại dữ liệu của biến được gắn 
có 8 kiểu dữ liệu, chia thành 2 nhóm chính:
- Kiểu dữ liệu nguyên thuỷ (primitive types):
    - String: Chuỗi kí tự\
 const myName = "Hưng"; // Dùng dấu nháy kép\
 const message = 'Hưng'  // Dùng dấu nháy đơn\
 const template = `Age: 18`  // Dùng dấu backtick 
    - Number: kiểu số nguyên và số thực.\
        - ex: const age = 18 (số nguyên);\
    const price = 9.99 (số thực)\
    const infinity = Infinity (số vô hạn)\
    const notANumber = NaN (số ko phải là số) => phép tính 2 gía trị khác loại, vd số / string
    - **Boolean**: kiểu giá trị logic\
        - const isPlaywright = true;\
        const isPython = false;
    - Undefined, null, symbol, BigInt
- Kiểu dữ liệu tham chiếu (reference types):
    - Object\

=> Muốn biết kiểu dữ liệu của biến là gì, gõ lệnh:\
`console.log(typeof <tên biến>);`

## Toán tử so sánh
- dùng để so sánh 2 toán hạng\
`console.log(a < b);`

## Toán tử toán học
- cộng, trừ, nhân, chia...\
`const ketQua = a / b;`
`console.log(ketQua);`

## Toán tử logic
- dùng để kết hợp một hoặc nhiều điều kiện và trả về kết quả boolean
    - **&& (And)**: trả về đúng nếu cả 2 vế của mệnh đề đều đúng
    - **|| (OR)**: trả về đúng nếu một trong 2 vế của mệnh đề đúng 

## Toán tử một ngôi
- là toán tử **chỉ cần một toán hạng** để thưc hiện
- Có 2 loại:
    - Prefix: toán tử nằm ở phía trước - tăng trước, trả về sau
        - ++x;
        - --x;
    - Postfix: toán tử nằm ở phía sau - trả về trước, tăng sau
        - x++;
        - x--;

## Toán tử chia dư (%)
- % sẽ trả về phần dư của phép tính\
    - ví dụ: 3%3 = 0 (vì 3 chia hết cho 3, dư 0)
    - 3%2 = 1 (vì 3 ko chia hết cho 2, dư 1)
    - 1%2 = 1 (vì 1 ko chia hết cho 2, dư 1)
- Ứng dụng tìm số chẵn, lẻ:
    - Nếu là số lẻ, chia dư cho 2 =1: x % 2 === 1
    - Nếu là số chẵn, chia dư cho 2 = 0: x % 2 === 0     

## In kết hợp giá trị chuỗi và biến với console.log()
- Cách 1: `console.log("message" + tên_biến)`
- Cách 2: `console.log("message", tên_biến)`
- Cách 3: nối chuỗi với toán tử +\

`const str1 = "Hello";
const str2 = "playwright Viet Nam"\
console.log(str1 + str2);`  

## Let, Const, Var
- Var: cũng là một biến, phạm vi theo hàm, không bị giới hạn bởi if, for, while. Biến khai báo trong if vẫn sống ở ngoài
- Hoisting: Var dùng trước khi khai báo vẫn chạy được. Js đẩy phần khai báo biến Var lên đầu hàm, nhưng giá trị thì chưa được gán. 
- Var khi khai báo lại đè lên nhau mà ko cảnh báo
    - vd: var user = "admin";
    - var user = "guest"
    - console.log(user); => "guest" (ko báo lỗi)

## Git - unstage
- Thao tác đưa 1 file đã commit lên vùng khác ngược về vùng trước đó
- `git restore --stage <file name>`
- `git restore --stage <file name1> <file name 2> <file name 3>`
- `git restore --stage .` => restore toàn bộ từ staging về working directory

## Git - undo commit message
- Thay đổi message của commit mới nhất
- `git commit --amend -m"message"`