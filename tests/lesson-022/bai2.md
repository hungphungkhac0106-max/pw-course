# Bài 2:
 Sau khi chạy một loạt các lệnh thì các file sẽ tương ứng với các vùng sau:
## a. Tạo 3 file: file1, file2, file3
- Local: file1,file2,file3 | Working: Trống | Staging: Trống | Repo: Trống 
## b. Chạy lệnh: git init
- Local: file1,file2,file3 | Working: file1,file2,file3 | Staging: Trống | Repo: Trống
## c. Chạy lệnh: git commit -m”init project”
- Local: file1,file2,file3 | Working: file1,file2,file3 | Staging: Trống | Repo: Trống
## d. Chạy lệnh: git add file1
- Local: file1,file2,file3 | Working: file1,file2,file3 | Staging: file1 | Repo: Trống
## e. Chạy lệnh: git commit -m”add file1”
- Local: file1,file2,file3 | Working: file1,file2,file3 | Staging: file1 | Repo: file1
- file1: đã đưa lên vùng Repository với commit có message là "add file1" ở dòng lệnh e
## f. Chạy lệnh: git commit -m”add file”
- Local: file1,file2,file3 | Working: file1,file2,file3 | Staging: file1 | Repo: file1
- file2 và file3: đang ở vùng Working directory vì không có lệnh add file2 và file3 nào